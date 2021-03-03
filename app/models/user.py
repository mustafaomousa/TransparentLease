from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(db.String, nullable=True)
    header = db.Column(db.String(150), nullable=True)
    bio = db.Column(db.String, nullable=True)
    broker = db.Column(db.Boolean)
    dealer = db.Column(db.Boolean)
    address = db.Column(db.String, nullable=True)
    city = db.Column(db.String, nullable=True)
    state = db.Column(db.String, nullable=True)
    zip_code = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.Date, nullable=True)

    broker_lease_infos = db.relationship("LeaseInfo")
    broker_deals = db.relationship("BrokerDeal")
    broker_notes = db.relationship(
        "BrokerDealNote")
    broker_pictures = db.relationship(
        "BrokerDealPicture")
    user_alerts = db.relationship("DealAlert")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        print(self.broker_deals)
        return {
            "id": self.id,
            "name": self.name,
            "username": self.username,
            "email": self.email,
            "address": f'{self.address} {self.city} {self.state} {self.zip_code}',
            "broker": self.broker,
            "dealer": self.dealer,
            "header": self.header,
            "bio": self.bio,
            "profile_image": self.profile_image
        }
