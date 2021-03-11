from flask import Blueprint, jsonify, session, request
from app.models import User, db, Make
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import UserCommentForm, BrokerReplyForm
from sqlalchemy import and_

utils_routes = Blueprint('utils', __name__)


@utils_routes.route('/')
def get_guest_utils():
    makes = Make.query.all()
    return {"utils": {"makes": [make.to_dict() for make in makes]}}


# @utils_routes.route('/user/<int:user_id>', methods=["POST"])
# def get_user_utils(user_id):
