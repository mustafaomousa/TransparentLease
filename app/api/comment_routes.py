from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, UserComment, BrokerReply
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import UserCommentForm, BrokerReplyForm
from sqlalchemy import and_

comment_routes = Blueprint('comment', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@comment_routes.route('/<brokerId>')
def get_broker_comments(brokerId):
    comments = UserComment.query.filter(
        UserComment.broker_id == brokerId).all()
    return {"comments": {comment.id: comment.to_dict() for comment in comments}}


@comment_routes.route('/user_comment/<int:brokerId>', methods=["POST"])
def create_user_comment(brokerId):
    form = UserCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = UserComment(
            broker_id=brokerId,
            user_id=form.data["user_id"],
            comment=form.data["comment"],
            pinned=False,
            created_at=datetime.now(),
            updated_at=datetime.now())
        db.session.add(new_comment)
        db.session.commit()
        return {"new_comment": new_comment.to_dict()}


@comment_routes.route('/user_comment/comment/<int:comment_id>', methods=["DELETE"])
def delete_user_comment(comment_id):
    comment = UserComment.query.filter_by(id=comment_id).first()
    if comment:
        deleted_comment = comment.to_dict()
        db.session.delete(comment)
        db.session.commit()
        return {"comment_deleted": deleted_comment}
    return {"errors": ["Please try again"]}


# @comment_routes.route('/broker_reply/<brokerId>', methods=["POST"])
# def create_broker_reply(brokerId):
