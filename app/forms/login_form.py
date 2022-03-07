from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exists", field.data)
    username = field.data
    user = User.query.filter(User.username == username).first()
    if not user:
        raise ValidationError("Username provided not found.")



class LoginForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
