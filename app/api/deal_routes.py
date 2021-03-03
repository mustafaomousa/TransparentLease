from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, Make
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from sqlalchemy import and_

deal_routes = Blueprint('broker', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@deal_routes.route('/')
def latest_deals():
    broker_deals = BrokerDeal.query.order_by(
        BrokerDeal.created_at.desc()).limit(20)

    return {"latest_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}


@deal_routes.route('/deals/<broker_id>')
def specific_broker_deals(broker_id):
    broker_deals = BrokerDeal.query.filter(
        BrokerDeal.broker_id == int(broker_id)).all()

    return {"current_broker_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}


@deal_routes.route('/make/<make_name>')
def specific_make_deals(make_name):
    make_deals = BrokerDeal.query.join(Make, Make.name.ilike(make_name))
    return {"make_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in make_deals}}
