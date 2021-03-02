from .db import db


class BrokerDeal(db.Model):
    __tablename__ = 'broker_deals'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    make_id = db.Column(db.Integer, db.ForeignKey(
        "makes.id"), nullable=False)
    lease_info_id = db.Column(db.Integer, db.ForeignKey(
        "lease_infos.id"), nullable=False)
    fee = db.Column(db.Integer, nullable=False)
    active_month_year = db.Column(db.Date, nullable=False)
    listed = db.Column(db.Boolean)
    advertise = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    broker = db.relationship("Broker", back_populates="broker_deals")
    make = db.relationship("Make", back_populates="broker_deals")
    lease_info = db.relationship("LeaseInfo", back_populates="broker_deals")
    notes = db.relationship("BrokerDealNote", back_populates="broker_deals")

    def to_dict(self):
        return {
            "id": self.id,
            "broker": self.broker,
            "make": self.make,
            "lease_info": self.lease_info,
            "fee": self.fee,
            "active_month_year": self.active_month_year,
            "listed": self.listed,
            "advertised": self.advertise,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
