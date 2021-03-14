from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateField, BooleanField
from wtforms.validators import DataRequired


class UserInquiryForm(FlaskForm):
    broker_deal_id = IntegerField(
        'broker deal id', validators=[DataRequired()])
