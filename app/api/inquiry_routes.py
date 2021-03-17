from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, Make, Trim, Model, LeaseInfo, UserInquiry
from flask_login import current_user
from datetime import *
from app.forms import UserInquiryForm
from sqlalchemy import and_

inquiry_routes = Blueprint('inquiry', __name__)


@inquiry_routes.route('/<int:user_id>')
def current_user_inquiries(user_id):
    users_inquiries = UserInquiry.query.filter(
        UserInquiry.user_id == user_id).all()
    if users_inquiries:
        print(users_inquiries)
        return {"user_inquiries": {user_inquiry.broker_deal_id: user_inquiry.to_dict() for user_inquiry in users_inquiries}}
    else:
        return {"errors": ["Current user has not submitted any inquries"]}


@inquiry_routes.route('/create', methods=['POST'])
def create_user_inquiry():
    form = UserInquiryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_inquiry = UserInquiry(
            user_id=current_user.id,
            broker_deal_id=form.data["broker_deal_id"],
            created_at=datetime.now()
        )
        db.session.add(user_inquiry)
        db.session.commit()
        user_inquiry_dict = user_inquiry.to_dict()
        return {user_inquiry_dict["broker_deal_id"]: user_inquiry.to_dict()}


@inquiry_routes.route('/delete/<int:inquiry_id>', methods=['DELETE'])
def delete_user_inquiry(inquiry_id):
    inquiry = UserInquiry.query.filter(UserInquiry.id == inquiry_id).first()
    inq = inquiry.to_dict()
    db.session.delete(inquiry)
    db.session.commit()
    return {"deleted_inquiry": inq["broker_deal_id"], "inquiry": inq}
