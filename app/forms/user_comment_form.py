from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import UserComment, BrokerReply


class UserCommentForm(FlaskForm):
    user_id = IntegerField('user id', validators=[DataRequired()])
    comment = StringField('comment', validators=[DataRequired()])
