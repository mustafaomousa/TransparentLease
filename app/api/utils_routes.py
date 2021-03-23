from flask import Blueprint, jsonify, session, request
from app.models import User, db, Make, Model, Trim
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import UserCommentForm, BrokerReplyForm
from sqlalchemy import and_

utils_routes = Blueprint('utils', __name__)


@utils_routes.route('')
def get_guest_utils():
    makes = {make.id: {"make": make.to_dict(),
                       "models": {model.id: {"model": model.to_dict(), "trims": {trim.id: trim.to_dict() for trim in Trim.query.filter(Trim.model_id == model.id).all()}} for model in Model.query.filter(Model.make_id == make.id).all()}
                       } for make in Make.query.all()}

    return {"utils": {"makes": makes}}
