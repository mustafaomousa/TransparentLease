from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, BrokerDeal, UserComment

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/broker/<username>')
def find_user(username):
    user = User.query.filter(User.username == username).one()
    broker_deals = BrokerDeal.query.filter(BrokerDeal.broker_id == user.id)
    broker_comments = UserComment.query.filter(
        UserComment.broker_id == user.id).all()
    return {"broker_information": user.to_dict(), "broker_deals": [broker_deal.to_dict() for broker_deal in broker_deals], "broker_comments": [broker_comment.to_dict() for broker_comment in broker_comments]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
