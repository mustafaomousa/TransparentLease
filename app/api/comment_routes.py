from flask import Blueprint, jsonify, session, request
from app.models import User, db, BrokerDeal, UserComment, BrokerReply
from flask_login import current_user, login_user, logout_user, login_required
from datetime import *
from app.forms import CommentForm
from sqlalchemy import and_

comment_routes = Blueprint('comment', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@comment_routes.route('/<brokerId>')
def get_broker_comments(brokerId):


@comment_routes.route('/user_comment/<brokerId>', methods=["POST"])
def create_user_comment(brokerId):


@comment_routes.route('/broker_reply/<brokerId>', methods=["POST"])
def create_broker_reply(brokerId):
