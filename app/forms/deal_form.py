from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, DateField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Deal


class DealForm(FlaskForm):
    broker_id = IntegerField('broker_id', validators=[DataRequired()])
    year = IntegerField('year', validators=[DataRequired()])
    make = StringField('make', validators=[DataRequired()])
    model = StringField('model', validators=[DataRequired()])
    months = IntegerField('months', validators=[DataRequired()])
    trim = StringField('trim', validators=[DataRequired()])
    miles = IntegerField('miles', validators=[DataRequired()])
    money_factor = FloatField('money_factor', validators=[DataRequired()])
    residual = FloatField('residual', validators=[DataRequired()])
    msrp = IntegerField('msrp', validators=[DataRequired()])
    discount = IntegerField('discount', validators=[DataRequired()])
    additional_fees = FloatField('additional_fees', validators=[DataRequired()])
    payment = FloatField('payment', validators=[DataRequired()])
    active_month_year = DateField('active_month_year')
    listed = BooleanField('listed')
    demo = BooleanField('demo')
    
