from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, Make, Trim, Model, LeaseInfo, UserInquiry
from flask_login import current_user
from datetime import *
from app.forms import DealForm
from sqlalchemy import and_

inquiry_routes = Blueprint('inquiry', __name__)


@inquiry_routes.route('/')
def current_user_inquiries():
    users_inquiries = UserInquiry.query.filter(
        UserInquiry.id == current_user.id).all()
    if users_inquiries:
        return {"user_inquiries": {user_inquiry.id: user_inquiry.to_dict() for user_inquiry in users_inquiries}}
    else:
        return {"errors": ["Current user has not submitted any inquries"]}


@inquiry_routes.route('/', methods=['POST'])
def create_user_inquiry():
    user_inquiry = UserInquiry(
        user_id=current_user.id,
        broker_deal_id=1,
        created_at=datetime.now()
    )
    db.session.add(user_inquiry)
    db.session.commit()
    return {"new_inquiry": user_inquiry.to_dict()}
