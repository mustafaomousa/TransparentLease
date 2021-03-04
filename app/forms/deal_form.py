from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import BrokerDeal


class DealForm(FlaskForm):
    year = IntegerField('year', validators=[DataRequired()])
    makeId = IntegerField('make id', validators=[DataRequired()])
    model_name = StringField('model', validators=[DataRequired()])
    trim_name = StringField('trim', validators=[DataRequired()])
    months = IntegerField('months', validators=[DataRequired()])
    miles = IntegerField('miles', validators=[DataRequired()])
    msrp = IntegerField('msrp', validators=[DataRequired()])
    discount = IntegerField('discount', validators=[DataRequired()])
    residual = IntegerField('residual', validators=[DataRequired()])
    money_factor = FloatField('money factor', validators=[DataRequired()])
    loyalty = FloatField('loyalty')
    lease_cash = FloatField('lease cash')
    conquest = FloatField('conquest')
    payment = FloatField('payment', validators=[DataRequired()])
    broker_fee = FloatField('broker fee', validators=[DataRequired()])
    listed_date = DateField('listed date', validators=[DataRequired()])
