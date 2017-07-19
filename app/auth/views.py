# -*- coding: utf-8 -*-

from flask import g, render_template, redirect, request, session, url_for, flash
from flask_login import login_user, logout_user, login_required, current_user
from flask_oauthlib.client import OAuthException
from . import auth
from .. import db, oauth, login_manager
from config import Config as C
from ..models import Users, Posts, Comments 
from .forms import EditProfileForm


google = oauth.remote_app(
	'google',
	consumer_key=C.GOOGLE_AUTH_ID,
	consumer_secret=C.GOOGLE_AUTH_SECRET,
	request_token_params={'scope': 'email'},
	base_url='https://www.googleapis.com/oauth2/v1/',
	request_token_url=None,
	access_token_method='POST',
	access_token_url='https://accounts.google.com/o/oauth2/token',
	authorize_url='https://accounts.google.com/o/oauth2/auth',
)

facebook = oauth.remote_app(
	'facebook',
	consumer_key=C.FACEBOOK_AUTH_ID,
	consumer_secret=C.FACEBOOK_AUTH_SECRET,
	request_token_params={'scope': 'email'},
	base_url='https://graph.facebook.com',
	request_token_url=None,
	access_token_url='/oauth/access_token',
	access_token_method='GET',
	authorize_url='https://www.facebook.com/dialog/oauth'
)

twitter = oauth.remote_app(
    'twitter',
    consumer_key=C.TWITTER_AUTH_ID,
    consumer_secret=C.TWITTER_AUTH_SECRET,
    base_url='https://api.twitter.com/1.1/',
    request_token_url='https://api.twitter.com/oauth/request_token',
    access_token_url='https://api.twitter.com/oauth/access_token',
    authorize_url='https://api.twitter.com/oauth/authorize'
)


@login_manager.user_loader
def load_user(id):
    return Users.query.get(int(id))

@auth.before_request
def get_current_user():
    g.user = current_user

def create_user(me, auth_server_name):  
    if auth_server_name == 'Facebook':
        avatar_url = me.data['picture']['data']['url']
    
    elif auth_server_name == 'Google':
        avatar_url = me.data['picture']
    
    else:
        pass
        #avatar_url = me.data['picture']
    
    new_user = Users(
        auth_server=auth_server_name, 
        auth_social_id=me.data['id'],
        name=me.data['name'],
        email=me.data['email'],
        avatar=avatar_url,
        nickname = me.data['email'].split('@')[0]
    )  

    db.session.add(new_user)
    db.session.commit()
    login_user(new_user, remember=True)
    return new_user

def set_user(server_name, me):
    user = Users.query.filter_by(
        auth_server=server_name, 
        auth_social_id=me.data['id']
    ).first()
    if user is None:
        user = create_user(me, server_name)
        return redirect(url_for('auth.edit_profile'))  #note!!

    login_user(user, remember=True)
    return redirect(url_for('main.index'))  #note!!


def set_tw_user(server_name, auth_social_id, name, next_url):
    user = Users.query.filter_by(
        auth_server=server_name, 
        auth_social_id=auth_social_id
    ).first()
    if user is None:
        new_user = Users(
            auth_server=auth_server_name, 
            auth_social_id=auth_social_id,
            name=name,
            #avatar=avatar_url  #??
        )  
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user, remember=True)
        return redirect(url_for('auth.edit_profile'))  #note!!

    login_user(user, remember=True)
    return redirect(next_url) 

@auth.route('/connect')
def connect():
    next_c = request.args.get('next')
    session['next'] = next_c
    return render_template('connect.html') 

@auth.route('/login/<string:server_name>')
def login(server_name):
    '''route to different oauth server'''
    #Facebook
    if server_name == "Facebook":
        callback = url_for(
            'auth.facebook_authorized',
            next=request.args.get('next')
                or request.referrer 
                or None,
            _external=True
        )
        return facebook.authorize(callback=callback)
    #Twitter
    elif server_name == "Twitter":
        callback_url = url_for('auth.twitter_authorized', next=request.args.get('next'))    
        return twitter.authorize(callback=callback_url or request.referrer or None )
    #Google
    return google.authorize(
            callback=url_for(
                'auth.g_authorized', 
                _external=True)
            )

#Facebook
@auth.route('/login/facebook_authorized')
def facebook_authorized():
    resp = facebook.authorized_response()
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    if isinstance(resp, OAuthException):
        return 'Access denied: %s' % resp.message

    session['oauth_token'] = (resp['access_token'], '')
    me = facebook.get(
        '/me/?fields=email,name,id,picture.height(200).width(200)'
    )
    return set_user('Facebook', me)

@facebook.tokengetter
def get_facebook_oauth_token():
    return session.get('oauth_token')
#Facebook end

#Google
@auth.route('/login/g_authorized')
def g_authorized():
    resp = google.authorized_response()
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )
    session['google_token'] = (resp['access_token'], '')
    me = google.get('userinfo')
    return set_user('Google', me)

@google.tokengetter
def get_google_oauth_token():
    return session.get('google_token')
#Google end

#Twitter    
@auth.route('/login/twitter_authorized')
def twitter_authorized():
    next_url = request.args.get('next') or url_for('main.index')
    resp = twitter.authorized_response()
    if resp is None:
        #flash('You denied the request to sign in.')
        return redirect(next_url)
    
    session['twitter_token'] = (
        resp['oauth_token'],
        resp['oauth_token_secret']
    )
    session['twitter_user'] = resp['screen_name']

    auth_social_id = resp['user_id']
    name = resp['screen_name']

    #flash('You were signed in as %s' % resp['screen_name'])
    return set_tw_user('Twitter', auth_social_id, name, next_url)   #?? 和其他的不一样

@twitter.tokengetter
def get_twitter_token():
    return session.get('twitter_token')  #??
#Twitter end


@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('main.index'))  # note!!!


@auth.route('/profile/<id>')
def profile(id):
    
    user = Users.query.get_or_404(id)

    m = 10 # the num for show more to paginate

    #created post
    post_query = user.posts.order_by(Posts.timestamp.desc())
    post_count = post_query.count()
    posts = post_query.limit(m)

    #star posts
    star_query = user.star_posts
    star_count = star_query.count()
    star_posts = [s.star_post for s in user.star_posts.limit(m)]
    
    # flag items
    fl_items = user.flag_items

    query_1 = fl_items.filter_by(flag_label=1)
    count_1 = query_1.count()
    query_2 = fl_items.filter_by(flag_label=2)
    count_2 = query_2.count()
    query_3 = fl_items.filter_by(flag_label=3)
    count_3 = query_3.count()

    todos = [i.flag_item for i in query_1.limit(m)]
    doings = [i.flag_item for i in query_2.limit(m)]
    dones = [i.flag_item for i in query_3.limit(m)]

    c_query = Comments.query.filter(Comments.creator==user)
    # Reviews
    review_query = c_query.filter(Comments.heading!=None)
    review_count = review_query.count()
    myreviews = review_query.limit(m)

    # comments
    commt_query = c_query.filter(Comments.heading==None)
    commt_count = commt_query.count()
    mycomments = commt_query.limit(m)

    return render_template('profile.html',m=m, user=user,todos=todos, count_1=count_1, doings=doings,
                count_2=count_2, dones=dones, count_3=count_3, posts=posts, post_count=post_count,
                star_posts=star_posts, star_count=star_count, mycomments=mycomments, commt_count=commt_count,
                myreviews=myreviews, review_count=review_count)

@auth.route('/editprofile', methods=['GET','POST'])
@login_required
def edit_profile():
    form = EditProfileForm()
    if form.validate_on_submit():
        current_user.nickname = form.nickname.data
        current_user.location = form.location.data
        current_user.about_me = form.about.data
        current_user.links = form.links.data
        db.session.add(current_user)
        flash('Your profile has been updated.')
        return redirect(url_for('auth.profile', id=current_user.id))
    form.nickname.data = current_user.nickname
    form.location.data = current_user.location
    form.about.data = current_user.about_me
    form.links.data = current_user.links
    return render_template('edit_profile.html', form=form)