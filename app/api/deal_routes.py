from flask import Blueprint, jsonify, session, request
from app.models import User, db, Deal
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import DealForm
from sqlalchemy import and_, or_

deal_routes = Blueprint('deals', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@deal_routes.route('/')
def newest_deals():

    deals = Deal.query.order_by(Deal.created_at.desc()).limit(10)

    return {deal.id:deal.to_dict() for deal in deals}



@ deal_routes.route('/', methods=['POST'])
def create_deal():

    form = DealForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        deal = Deal(
            broker_id = form.data['broker_id'],
            year = form.data['year'],
            make = form.data['make'],
            model = form.data['model'],
            months = form.data['months'],
            miles = form.data['miles'],
            money_factor = form.data['money_factor'],
            residual = form.data['residual'],
            msrp = form.data['msrp'],
            discount = form.data['discount'],
            additional_fees = form.data['additional_fees'],
            payment = form.data['payment'],
            active_month_year = form.data['active_month_year'],
            listed = form.data['listed'],
            demo = form.data['demo'],
        )

        db.session.add(deal)
        db.session.commit()

        return deal.to_dict()

    return {"error": ["error"]}