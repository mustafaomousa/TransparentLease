from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import UserComment, BrokerReply


class BrokerReplyForm(FlaskForm):
    user_comment_id = IntegerField(
        'user comment id', validators=[DataRequired()])
    reply = StringField('comment', validators=[DataRequired()])
