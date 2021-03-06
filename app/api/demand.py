# -*- coding: utf-8 -*-
# demand: a request to get a rut like book list on a subject

import re
from flask import request, g, jsonify, abort
from ..models import Demands, Posts, Dvote, Respon, Comments
from . import db, rest, auth, PER_PAGE


@rest.route('/demands', methods=['GET'])
# @auth.login_required
def get_demands():
    """Get demands for request page"""
    query = Demands.query
    userid = request.args.get('userid', type=int)
    tag_str = request.args.get('tag', '')
    ref = request.args.get('ref', '')
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    # yield query per filter criteria
    if userid:
        demands_query = query.filter_by(requestor_id=userid)
    elif tag_str:
        demands_query = query.filter_by(dtag_str=str(tag_str))  # ??, to midify
    else:
        demands_query = query
    # order per ref: new or popular
    if ref == "hot":
        demands = demands_query.order_by(Demands.vote.desc())
    else:
        demands = demands_query.order_by(Demands.timestamp.desc())
    ds_list = demands.offset(per_page * page).limit(per_page)
    demands_dict = {
        'demands': [d.to_dict() for d in ds_list],
        'total': demands.count()
    }
    return jsonify(demands_dict)


@rest.route('/demands/<int:demandid>', methods=['GET'])
# @auth.login_required
def get_demand(demandid):
    """get demand info"""
    demand = Demands.query.get_or_404(demandid)
    demand_dict = demand.to_dict()
    return jsonify(demand_dict)


@rest.route('/demands/<int:demandid>/comments', methods=['GET'])
# @auth.login_required
def get_demand_comments(demandid):
    """get comments on a demand"""
    demand = Demands.query.get_or_404(demandid)
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    d_comments = demand.comments\
            .order_by(Comments.vote.desc(), Comments.timestamp.desc())\
            .offset(page*per_page).limit(per_page)
    comments = [c.to_dict() for c in d_comments]
    return jsonify(comments)


@rest.route('/demands/<int:demandid>/answers', methods=['GET'])
# @auth.login_required
def get_demand_answers(demandid):
    """get the ruts which have linked to a demand as answers"""
    demand = Demands.query.get_or_404(demandid)
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    d_resps = demand.posts.order_by(Respon.timestamp.desc())\
                          .offset(page*per_page).limit(per_page)
    d_respons = [r.post for r in d_resps]
    answers = [{'id': p.id, 'title': p.title, 'intro': p.intro} for p in d_respons]
    return jsonify(answers)


@rest.route('/demands/<int:demandid>/voters', methods=['GET'])
@auth.login_required
def get_demand_voters(demandid):
    """get who vote a demand"""
    page = request.args.get('page', 0, type=int)
    per_page = request.args.get('perPage', PER_PAGE, type=int)
    query = Dvote.query.filter_by(demand_id=demandid)
    voters = query.offset(page * per_page).limit(per_page)
    voters_dict = {
        'voters': [v.voter.to_simple_dict() for v in voters],
        'votecount': query.count()
    }
    return jsonify(voters_dict)


@rest.route('/demands/<int:demandid>/voters', methods=['PATCH'])
@auth.login_required
def upvote_demand(demandid):
    demand = Demands.query.get_or_404(demandid)  # demand's id
    user = g.user
    voted = Dvote.query.filter_by(user_id=user.id, demand_id=demandid).first()
    if voted is None:
        demand.vote = demand.vote + 1
        db.session.add(demand)
        dvote = Dvote(
            voter=user,
            vote_demand=demand
        )
        db.session.add(dvote)
        db.session.commit()
        # record activity as upvote a demand
        from task.tasks import set_event_celery
        set_event_celery.delay(user.id, action='Voted', demandid=demand.id)
    # return jsonify(demand.vote)
    return jsonify(demand.vote)


@rest.route('/demands', methods=['POST'])
@auth.login_required
def new_demand():
    text = request.json.get('demand', '').strip()
    body = text.split('#')[0].strip()
    if not body:
        abort(403)
    tglst = re.findall(r'#(\w+)', text)
    tag_str = (tglst + ['42'])[0][:42]
    user = g.user
    demand = Demands(
        requestor=user,
        body=body,
        dtag_str=tag_str
    )
    db.session.add(demand)
    demand.dtag_to_db()
    db.session.commit()
    # record activity as send a demand
    from task.tasks import set_event_celery
    set_event_celery.delay(user.id, action='Sent', demandid=demand.id)
    return jsonify(demand.to_dict())


@rest.route('/demands/<int:demandid>/ruts/<int:rutid>', methods=['PATCH'])
@auth.login_required
def rut_as_answer(demandid, rutid):
    """link  Rut to  a demand as Answer"""
    rut = Posts.query.get_or_404(rutid)
    user = g.user
    if rut.creator != user and user.role.duty != 'Admin':
        abort(403)  # no permission
    if rut.demands.count() >= 6:  # limit the num as answer
        return jsonify(False)
    demand = Demands.query.get_or_404(demandid)
    respon = Respon(
        post=rut,
        demand=demand
    )
    db.session.add(respon)
    db.session.commit()
    answer = {'id': rut.id, 'title': rut.title}
    return jsonify(answer)


@rest.route('/demands/<int:demandid>', methods=['DELETE'])
@auth.login_required
def del_demand(demandid):
    demand = Demands.query.get_or_404(demandid)
    user = g.user
    if demand.requestor != user and user.role.duty != 'Admin':
        abort(403)
    db.session.delete(demand)
    db.session.commit()
    return jsonify('Deleted')


@rest.route('/demands/<int:demandid>/disabled', methods=['PATCH'])
@auth.login_required
def disable_demand(demandid):
    demand = Demands.query.get_or_404(demandid)
    user = g.user
    if demand.requestor != user and user.role.duty != 'Admin':
        abort(403)
    dis_or_enb = request.json.get('disbaled', True)
    demand.disabled = dis_or_enb
    db.session.add(demand)
    db.session.commit()
    return jsonify(demand.disabled)
