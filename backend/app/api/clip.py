# -*- coding: utf-8 -*-
# clip : a quote excerpted from a book , or a spark of thought

from flask import request, g, jsonify, abort
from ..models import *
from . import db, rest, auth, PER_PAGE

@rest.route('/all/clips')
def get_all_clips():
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    all_clips = Clips.query
    clips = all_clips.offset(page*per_page).limit(per_page)
    clips_dict = {
        'clips': [c.to_dict() for c in clips],
        'total': all_clips.count(),
        'currentpage': page
    }
    return jsonify(clips_dict)

@rest.route('/clips')
@auth.login_required
def get_clips():
    user = g.user
    ref = request.args.get('ref','')
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    q = Clips.query
    if ref == "All":
        query = q.filter(Clips.creator != user)
    elif ref == "Hot":
        query = q.order_by(Clips.vote.desc())
    else:
        query = q.filter_by(creator_id=user.id)
    order_query = query.order_by(Clips.timestamp.desc())\
                  .offset(page * per_page).limit(per_page)
    clips_dict = {
        'clips': [c.to_dict() for c in order_query],
        'total': query.count()
    }
    return jsonify(clips_dict)

@rest.route('/clip/<int:clipid>')
def get_clip(clipid):        
    clip = Clips.query.get_or_404(clipid)
    clip_dict = clip.to_dict()
    return jsonify(clip_dict)

@rest.route('/clip/<int:clipid>/voters')
def get_clip_voters(clipid):
    pass

@rest.route('/newclip', methods=['POST'])
@auth.login_required
def new_clip():
    body = request.json.get('clip','').strip()
    if not body:
        abort(403)
    itemid = request.json.get('itemid')
    clip = Clips(
        creator = g.user,
        body = body,
        item = Items.query.get(itemid)
    )
    db.session.add(clip)
    db.session.commit()
    return jsonify(clip.to_dict())

@rest.route('/upvoteclip/<int:clipid>')
@auth.login_required
def upvote_clip(clipid):
    user = g.user
    clip = Clips.query.get_or_404(clipid)
    voted = Cvote.query.filter_by(user_id=user.id,clip_id=clipid).first()
    if voted is None:
        clip.vote = clip.vote + 1 
        db.session.add(clip)
        cvote = Cvote(
            voter=user,
            vote_clip=clip
        )
        db.session.add(cvote)
        db.session.commit()
    return jsonify(clip.vote)

@rest.route('/delete/clip/<int:clipid>')
@auth.login_required
def del_clip(clipid):
    user = g.user
    clip = Clips.query.get_or_404(clipid)
    if clip.creator != user and user.role != 'Admin':
        abort(403)
    db.session.delete(clip)
    db.session.commit()
    return jsonify('Deleted')

@rest.route('/disable/clip/<int:clipid>')
@auth.login_required
def disable_clip(clipid):
    user = g.user
    clip = Clips.query.get_or_404(clipid)
    if clip.creator != user and user.role != 'Admin':
        abort(403)
    clip.disabled = True
    db.session.add(clip)
    db.session.commit()
    return jsonify('Disabled')

@rest.route('/recover/clip/<int:clipid>')
@auth.login_required
def recover_clip(clipid):
    user = g.user
    clip = Clips.query.get_or_404(clipid)
    if clip.creator != user and user.role != 'Admin':
        abort(403)
    clip.disabled = False #enable
    db.session.add(clip)
    db.session.commit()
    return jsonify('Enabled')