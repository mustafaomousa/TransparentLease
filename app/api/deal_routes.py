from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, Make, Trim, Model, LeaseInfo
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import DealForm
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
        BrokerDeal.created_at.desc()).limit(9)

    return {"latest_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}


@deal_routes.route('/create', methods=['POST'])
def create_deal():
    form = DealForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        make = Make.query.filter(Make.id == form.data["makeId"]).first()
        model = Model.query.filter(and_(Model.name ==
                                        form.data["model_name"], Model.make_id == form.data["makeId"])).first()
        trim = Trim.query.filter(
            and_(Trim.name.ilike(form.data["trim_name"]), Trim.make_id ==
                 form.data["makeId"])).first()
        if (model and trim):
            new_lease_info = LeaseInfo(
                broker_id=current_user.id,
                trim_id=trim.id,
                months=int(form.data["months"]),
                miles_yearly=int(form.data["miles"]),
                money_factor=float(form.data["money_factor"]),
                residual=int(form.data["residual"]),
                msrp=float(form.data["msrp"]),
                discount=int(form.data["discount"]),
                loyalty=int(form.data["loyalty"]),
                lease_cash=int(form.data["lease_cash"]),
                conquest=int(form.data["conquest"]),
                payment=int(form.data["payment"]),
                additional_fees=int(form.data["additional_fees"])
            )
            db.session.add(new_lease_info)
            db.session.commit()
            new_broker_deal = BrokerDeal(
                broker_id=current_user.id,
                make_id=make.id,
                lease_info_id=new_lease_info.id,
                fee=int(form.data["broker_fee"]),
                active_month_year=form.data["listed_date"],
                listed=form.data["listed"],
                advertise=form.data["advertise"],
                created_at=datetime.now(),
                updated_at=datetime.now(),
                demo=form.data["demo"]
            )
            db.session.add(new_lease_info)
            db.session.add(new_broker_deal)
            db.session.commit()
            return {"new_deal": new_broker_deal.to_dict()}
        elif (model and not trim):
            new_trim = Trim(
                name=form.data["trim_name"], model_id=model.id, make_id=make.id, style_id=4)
            db.session.add(new_trim)
            db.session.commit()
            new_lease_info = LeaseInfo(
                broker_id=current_user.id,
                trim_id=new_trim.id,
                months=int(form.data["months"]),
                miles_yearly=int(form.data["miles"]),
                money_factor=float(form.data["money_factor"]),
                residual=int(form.data["residual"]),
                msrp=float(form.data["msrp"]),
                discount=int(form.data["discount"]),
                loyalty=int(form.data["loyalty"]),
                lease_cash=int(form.data["lease_cash"]),
                conquest=int(form.data["conquest"]),
                payment=int(form.data["payment"]),
                additional_fees=int(form.data["additional_fees"])
            )
            db.session.add(new_lease_info)
            db.session.commit()
            new_broker_deal = BrokerDeal(
                broker_id=current_user.id,
                make_id=make.id,
                lease_info_id=new_lease_info.id,
                fee=int(form.data["broker_fee"]),
                active_month_year=form.data["listed_date"],
                listed=form.data["listed"],
                advertise=form.data["advertise"],
                created_at=datetime.now(),
                updated_at=datetime.now(),
                demo=form.data["demo"]
            )
            db.session.add(new_lease_info)
            db.session.add(new_broker_deal)
            db.session.commit()
            return {"wops": "wops"}
        elif (trim and not model):
            new_model = Model(
                make_id=form.data["makeId"], name=form.data["model_name"], year=form.data["year"])
            db.session.add(new_model)
            db.session.commit()
            new_lease_info = LeaseInfo(
                broker_id=current_user.id,
                trim_id=trim.id,
                months=int(form.data["months"]),
                miles_yearly=int(form.data["miles"]),
                money_factor=float(form.data["money_factor"]),
                residual=int(form.data["residual"]),
                msrp=float(form.data["msrp"]),
                discount=int(form.data["discount"]),
                loyalty=int(form.data["loyalty"]),
                lease_cash=int(form.data["lease_cash"]),
                conquest=int(form.data["conquest"]),
                payment=int(form.data["payment"]),
                additional_fees=int(form.data["additional_fees"])
            )
            db.session.add(new_lease_info)
            db.session.commit()
            new_broker_deal = BrokerDeal(
                broker_id=current_user.id,
                make_id=make.id,
                lease_info_id=new_lease_info.id,
                fee=int(form.data["broker_fee"]),
                active_month_year=form.data["listed_date"],
                listed=form.data["listed"],
                advertise=form.data["advertise"],
                created_at=datetime.now(),
                updated_at=datetime.now(),
                demo=form.data["demo"]
            )
            db.session.add(new_lease_info)
            db.session.add(new_broker_deal)
            db.session.commit()

            return {"wops": "wops"}
        elif (not model and not trim):
            new_model = Model(
                make_id=form.data["makeId"], name=form.data["model_name"], year=form.data["year"])
            db.session.add(new_model)
            db.session.commit()
            new_trim = Trim(
                name=form.data["trim_name"], model_id=new_model.id, make_id=make.id, style_id=4)
            db.session.add(new_trim)
            db.session.commit()
            new_lease_info = LeaseInfo(
                broker_id=current_user.id,
                trim_id=new_trim.id,
                months=int(form.data["months"]),
                miles_yearly=int(form.data["miles"]),
                money_factor=float(form.data["money_factor"]),
                residual=int(form.data["residual"]),
                msrp=float(form.data["msrp"]),
                discount=int(form.data["discount"]),
                loyalty=int(form.data["loyalty"]),
                lease_cash=int(form.data["lease_cash"]),
                conquest=int(form.data["conquest"]),
                payment=int(form.data["payment"]),
                additional_fees=int(form.data["additional_fees"])
            )
            db.session.add(new_lease_info)
            db.session.commit()
            new_broker_deal = BrokerDeal(
                broker_id=current_user.id,
                make_id=make.id,
                lease_info_id=new_lease_info.id,
                fee=int(form.data["broker_fee"]),
                active_month_year=form.data["listed_date"],
                listed=form.data["listed"],
                advertise=form.data["advertise"],
                created_at=datetime.now(),
                updated_at=datetime.now(),
                demo=form.data["demo"]
            )
            db.session.add(new_lease_info)
            db.session.add(new_broker_deal)
            db.session.commit()
        return {"success": "validated but still false"}
    return {"success": "false"}


@ deal_routes.route('/deals/<broker_id>')
def specific_broker_deals(broker_id):
    broker_deals = BrokerDeal.query.filter(
        BrokerDeal.broker_id == int(broker_id)).all()

    return {"current_broker_deals": {broker_deal.id: broker_deal.to_dict() for broker_deal in broker_deals}}


@ deal_routes.route('/make')
def get_makes():
    makes = Make.query.all()
    return {"makes": [{"label": make.name, "value": make.id} for make in makes]}


@ deal_routes.route('/make/<make_name>')
def specific_make_deals(make_name):
    make_deals = BrokerDeal.query.join(Make, Make.name.like(make_name))
    return {"make_deals": [make_deal.to_dict() for make_deal in make_deals]}
