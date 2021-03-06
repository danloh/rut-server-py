# -*- coding: utf-8 -*-
# rut is readup tips, included an item list and tips for each item

import re
from flask import request, g, jsonify, abort
from ..models import Posts, Star, Collect, Users, Tags,\
                     Comments, Flag, Demands, Items, Respon
from . import db, rest, auth, PER_PAGE


@rest.route('/ruts/index', methods=['GET'])
# @auth.login_required
def get_index_ruts():
    # #personalized ruts
    # user = g.user
    # #get related tags set and fav tags
    # tag_set, tag_fv = user.get_tag_set()
    # # get followed posts queries
    # post_fo = [f.followed.posts for f in user.followed]
    # #list the queries, followed _posts as init
    # q = post_fo
    # for tag_obj in tag_set:
    #     q.append(tag_obj.posts)
    # q_rand = Posts.query.order_by(db.func.rand()).limit(0) # !! need to optimize
    # query = q_rand.union(*q)
    # ruts = query.order_by(Posts.timestamp.desc())  # other way,list reverse
    # total = ruts.count()
    # #Top Picked ruts
    ruts = Posts.select_posts()
    total = len(ruts)  # ruts.count() #
    tag_set = Tags.get_tags()
    ruts_dict = {  # need to optimize
        'ruts': ruts,  # [r.to_dict() for r in ruts],
        'total': total,
        'tags': [{'tagid': t.id, 'tagname': t.tag} for t in tag_set]
    }
    return jsonify(ruts_dict)


@rest.route('/ruts/<int:rutid>', methods=['GET'])
def get_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    rut_dict = rut.to_dict()
    # attach tips and items included in rut
    r_items = rut.items.order_by(Collect.order).limit(42)  # special limit num
    tips = [t.to_dict() for t in r_items]  # in Collect model
    # # sort tips per order-key in collect-dict -- deprecated way
    # from operator import itemgetter
    # order_tips = sorted(tips, key=itemgetter('order'))
    rut_dict['tips'] = tips  # order_tips
    # attach demands respon to
    r_demands = rut.demands.limit(6)  # special limit num
    demands = [{'id': r.demand_id, 'demand': r.demand.body} for r in r_demands]
    rut_dict['demands'] = demands
    return jsonify(rut_dict)


@rest.route('/ruts/<int:rutid>/tips', methods=['GET'])
def get_rut_tips(rutid):
    rut = Posts.query.get_or_404(rutid)
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', 42, type=int)  # special limit num
    r_items = rut.items.order_by(Collect.order)\
                       .offset(page*per_page).limit(per_page)
    tips_list = [t.to_dict() for t in r_items]
    return jsonify(tips_list)


@rest.route('/ruts/<int:rutid>/demands', methods=['GET'])
def get_rut_demands(rutid):
    rut = Posts.query.get_or_404(rutid)
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    r_demands = rut.demands.offset(page*per_page).limit(per_page)
    demands_list = [{'id': r.demand_id, 'demand': r.demand.body} for r in r_demands]
    return jsonify(demands_list)


@rest.route('/ruts/<int:rutid>/stars', methods=['GET'])
@auth.login_required
def get_rut_stars(rutid):
    # rut = Posts.query.get_or_404(rutid)  #other way: rut.stars
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    stars = Star.query.filter_by(post_id=rutid)
    starcount = stars.count()
    r_stars = stars.offset(page*per_page).limit(per_page)
    stars_list = [u.starer.to_simple_dict() for u in r_stars]
    stars_dict = {
        'stars': stars_list,
        'starcount': starcount
    }
    return jsonify(stars_dict)


@rest.route('/ruts/<int:rutid>/comments', methods=['GET'])
@auth.login_required
def get_rut_comments(rutid):
    rut = Posts.query.get_or_404(rutid)
    rut_dict = {
        'id': rut.id,
        'title': rut.title
    }
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    r_comments = rut.comments
    rut_dict['commentcount'] = r_comments.count()
    rut_comments = r_comments\
        .order_by(Comments.vote.desc(), Comments.timestamp.desc())\
        .offset(page*per_page).limit(per_page)
    comments = [c.to_dict() for c in rut_comments]
    rut_dict['comments'] = comments
    return jsonify(rut_dict)


@rest.route('/ruts', methods=['GET'])
@auth.login_required
def get_all_ruts():
    # yield query
    ruts = Posts.query
    # pagination
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    ruts_list = ruts.offset(page*per_page).limit(per_page)
    # yield result: a dict
    ruts_dict = {
        'ruts': [r.to_dict() for r in ruts_list],
        'total': ruts.count(),
        'currentpage': page
    }
    return jsonify(ruts_dict)


@rest.route('/ruts/search', methods=['GET'])
@auth.login_required
def search_ruts():
    """search ruts, esp. created ruts"""
    title = request.args.get('title', '').strip()  # search per title
    # related pagination
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    # if keywork is '', just return created
    if not title:
        ruts = g.user.posts.order_by(Posts.timestamp.desc())\
                           .offset(page*per_page).limit(per_page)
    else:
        ref = request.args.get('ref', 'created').strip()  # search in all or created
        if ref == 'created':
            query = g.user.posts
        else:
            query = Posts.query
        ruts = query.filter(Posts.title.contains(title))\
                    .order_by(Posts.timestamp.desc())\
                    .offset(page*per_page).limit(per_page)
    ruts_list = [{'id': r.id, 'title': r.title} for r in ruts]
    return jsonify(ruts_list)


@rest.route('/ruts/<int:rutid>/star', methods=['GET'])
@auth.login_required
def check_star(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    staring = 'Unstar' if user.staring(rut) else 'Star'
    can_edit = bool(rut.creator.id == user.id or rut.editable == 'Everyone')
    if_star = {'staring': staring, 'canEdit': can_edit}
    return jsonify(if_star)


@rest.route('/ruts/<int:rutid>/stars', methods=['PATCH'])
@auth.login_required
def star_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    user.star(rut)  # commit included
    # record activity as star a rut
    from task.tasks import set_event_celery
    set_event_celery.delay(user.id, action='Starred', postid=rut.id)
    return jsonify('Unstar')


@rest.route('/ruts/<int:rutid>/stars', methods=['DELETE'])
@auth.login_required
def unstar_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    user.unstar(rut)
    return jsonify('Star')


@rest.route('/ruts', methods=['POST'])
@auth.login_required
def new_rut():
    title = request.json.get('title', '').strip()
    intro = request.json.get('intro', '').strip()
    # extract tags and intro
    taglst = re.findall(r'#(\w+)', intro)
    intro = intro.split("#" + (taglst + ['42'])[0])[0]
    # extract original author and source url , ^^
    who = request.json.get('editable', 'Creator')
    who_lst = who.split('^^') + ['']
    who_edit = who_lst[0]
    user = g.user
    credit_to = user.showname if who_edit in ['Creator', 'Everyone'] else who_edit
    credit_url = who_lst[1] or ('/profile/' + str(user.id))
    if not (title and intro):
        abort(403)  # cannot be ''
    post = Posts(
        creator=user,
        title=title,
        intro=intro,
        rating=request.json.get('rating', 'All'),
        credential=request.json.get('credential', '...').strip(),
        editable=who_edit,
        credit_to=credit_to,
        credit_url=credit_url
    )
    db.session.add(post)
    post.tag_to_db(taglst)
    # link to demand as answer if come from demand
    demandid = request.json.get('demandid', '').strip()
    if demandid:
        demand = Demands.query.get(demandid)
        if demand:
            respon = Respon(
                post=post,
                demand=demand
            )
            db.session.add(respon)
    db.session.commit()
    # record activity as create a rut
    from task.tasks import set_event_celery
    set_event_celery.delay(user.id, action='Created', postid=post.id)
    return jsonify({'id': post.id, 'title': post.title})


@rest.route('/ruts/<int:rutid>/lock', methods=['GET'])
@auth.login_required
def lock_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    rut.lock(user)
    return jsonify('Locked')


@rest.route('/ruts/<int:rutid>/unlock', methods=['GET'])
def unlock_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    rut.unlock()
    return jsonify('UnLocked')


@rest.route('/ruts/<int:rutid>/locked/<int:userid>', methods=['GET'])
def check_rut_if_locked(rutid, userid):
    rut = Posts.query.get_or_404(rutid)
    is_locked = rut.check_locked(userid)
    return jsonify(is_locked)


@rest.route('/ruts/<int:rutid>/editable/<userid>', methods=['GET'])
# @auth.login_required
def check_rut_editable(userid, rutid):
    if not userid:
        return jsonify(False)
    user = Users.query.get_or_404(userid)
    if not user:
        return jsonify(False)
    rut = Posts.query.get_or_404(rutid)
    can_edit = rut.check_editable(user)
    editor_id = rut.editing_id
    can_dict = {'editorid': editor_id, 'rutid': rutid, 'canedit': can_edit}
    return jsonify(can_dict)


@rest.route('/ruts/<int:rutid>', methods=['PUT'])
@auth.login_required
def edit_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    # check if rut editable
    if not rut.check_editable(user):
        abort(403)
    # check not-null column can not be ''
    title = request.json.get('title', '').strip()
    intro = request.json.get('intro', '').strip()
    if (not title) or (not intro):
        abort(403)  # cannot be ''
    # extract original author and source url , ^^
    who = request.json.get('editable', 'Creator')
    who_lst = who.split('^^') + ['']
    who_edit = who_lst[0]
    user = g.user
    credit_to = user.showname if who_edit in ['Creator', 'Everyone'] else who_edit
    credit_url = who_lst[1] or ('/profile/' + str(user.id))

    rut.title = title
    rut.intro = intro
    rut.rating = request.json.get('rating')
    rut.editable = who_edit
    rut.credit_to = credit_to
    rut.credit_url = credit_url
    # renew the update time and add to db
    rut.renew()
    # db.session.add(rut)
    db.session.commit()
    return jsonify(rut.to_dict())


@rest.route('/ruts/<int:rutid>/ce', methods=['PATCH'])
@auth.login_required
def edit_rut_epi_or_cred(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    # check if rut editable
    if not rut.check_editable(user):
        abort(403)
    credential = request.json.get('credential')
    epilog = request.json.get('epilog')
    # if (not credential) and (not epilog):
    #     abort(403)  # cannot both be ''
    if credential is not None:
        rut.credential = credential.strip()
    if epilog is not None:
        rut.epilog = epilog.strip()
    # renew the update time and add to db
    rut.renew()
    # db.session.add(rut)
    db.session.commit()
    ce_dict = {
        'credential': rut.credential,
        'epilog': rut.epilog
    }
    return jsonify(ce_dict)


@rest.route('/ruts/<int:rutid>/tags', methods=['PATCH'])
@auth.login_required
def edit_rut_tags(rutid):
    rut = Posts.query.get_or_404(rutid)
    old = request.json.get('old')
    new = request.json.get('new')
    old_set = set(old)
    new_set = set(new)
    add_tags = new_set - old_set
    del_tags = old_set - new_set
    query = Tags.query
    for tg in add_tags:
        t = tg.strip()
        if not t:
            continue  # if t is '' then next element
        tag = query.filter_by(tag=t).first()
        if tag is None:
            new_tag = Tags(tag=t)
            new_tag.posts.append(rut)
            # new_tag.cal_vote()
            db.session.add(new_tag)
        else:
            tag.posts.append(rut)
            # tag.cal_vote()
            db.session.add(tag)
    for tg in del_tags:
        tag = query.filter_by(tag=tg).first()
        tag.posts.remove(rut)
    db.session.commit()
    new_tags_list = [t.to_dict() for t in rut.tags]
    return jsonify(new_tags_list)


@rest.route('/ruts/<int:rutid>/items/<int:itemid>', methods=['POST'])
@auth.login_required
def add_item_to_rut(itemid, rutid):
    """Add existing item to Rut, i.e. add new tips"""
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    if not rut.check_editable(user):
        abort(403)
    if rut.items.count() >= 42:
        abort(418)
    item = Items.query.get_or_404(itemid)
    tips = request.json.get('tips', '...').strip()
    spoiler_text = request.json.get('spoiler')
    spoiler = True if spoiler_text == 'Spoiler Ahead' else False
    rut.collecting(item, tips, user, spoiler)
    db.session.commit()
    return jsonify('Done')


@rest.route('/tips/<int:cid>', methods=['PUT'])
@auth.login_required
def edit_tips(cid):
    tip_collect = Collect.query.filter_by(id=cid).first_or_404()  # collect 's id
    post_id = tip_collect.post_id
    rut = Posts.query.get_or_404(post_id)
    user = g.user
    if not rut.check_editable(user):
        abort(403)
    # get the data
    order = request.json.get('order')
    tips = request.json.get('tips', '').strip()
    if not order or not tips:
        abort(403)  # cannot be None
    item = Items.query.get_or_404(tip_collect.item_id)
    # get the spoiler
    spoiler_text = request.json.get('spoiler')
    spoiler = True if spoiler_text == 'Spoiler Ahead' else False
    # re-ordering
    rut.ordering(item, order)
    rut.renew()
    tip_collect.tips = tips
    tip_collect.spoiler = spoiler
    db.session.add(tip_collect)
    db.session.commit()
    return jsonify('Done')


@rest.route('/tips/<int:cid>', methods=['DELETE'])
@auth.login_required
def del_tips_in_rut(cid):
    """Del tips, re-ordering items"""
    # collect 's id,but not get_or_404, for 3 primary key
    tip_c = Collect.query.filter_by(id=cid).first_or_404()
    user = g.user
    if user != tip_c.tip_creator and user.role.duty != 'Admin':
        abort(403)
    # once delete an item. need to re-ordering,
    # order the to-be-del item to the last, then del
    item = Items.query.get_or_404(tip_c.item_id)
    rut = Posts.query.get_or_404(tip_c.post_id)
    n = rut.items.count()
    rut.ordering(item, n)
    db.session.delete(tip_c)
    db.session.commit()
    rutid = rut.id
    return jsonify(rutid)


@rest.route('/ruts/<int:rutid>/disabled', methods=['PATCH'])
@auth.login_required
def disable_or_enable_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    if ((rut.creator != user and user.role.duty != 'Admin')
            or rut.starers.count() != 0):
        abort(403)
    dis_or_enb = request.json.get('disbaled', True)
    rut.disabled = dis_or_enb
    db.session.add(rut)
    db.session.commit()
    return jsonify(rut.disabled)


@rest.route('/ruts/<int:rutid>', methods=['DELETE'])
@auth.login_required
def delete_rut(rutid):
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    if ((rut.creator != user and user.role.duty != 'Admin')
            or rut.starers.count() != 0):
        abort(403)
    db.session.delete(rut)
    db.session.commit()
    return jsonify('Deleted')
