from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    name = StringField('name')
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    address = StringField('address')
    city = StringField('city')
    state = StringField('state')
    zip_code = IntegerField('zip code')
    broker = BooleanField('broker')
    dealer = BooleanField('dealer')
    header = StringField('header')
    bio = TextAreaField('bio')
    profile_image = StringField('profile image')
