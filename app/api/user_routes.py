from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, BrokerDeal

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<username>')
def find_user(username):
    user = User.query.filter(User.username == username).one()
    broker_deals = BrokerDeal.query.filter(BrokerDeal.broker_id == user.id)
    return {"profile_user": user.to_dict(), "broker_deals": [broker_deal.to_dict() for broker_deal in broker_deals]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
