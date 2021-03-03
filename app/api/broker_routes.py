from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from sqlalchemy import and_

broker_routes = Blueprint('broker', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@broker_routes.route('/')
def brokers():
    brokers = User.query.filter(User.broker == True).all()
    return {"all_brokers": {broker.id: broker.to_dict() for broker in brokers}}


@broker_routes.route('/<broker_id>')
def broker(broker_id):
    broker = User.query.filter(
        and_(User.id == int(broker_id), User.broker == True)).first()
    return {"broker": broker.to_dict()}


@broker_routes.route('/deals')
def broker_deals():
    broker_deals = BrokerDeal.query.order_by(
        BrokerDeal.created_at.desc()).limit(20)

    return {"newest_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}


@broker_routes.route('/deals/<broker_id>')
def specific_broker_deals(broker_id):
    broker_deals = BrokerDeal.query.filter(
        BrokerDeal.broker_id == int(broker_id)).all()

    return {"current_broker_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}
