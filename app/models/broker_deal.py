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
    demo = db.Column(db.Boolean)
    broker = db.relationship("User")
    make = db.relationship("Make")
    lease_info = db.relationship("LeaseInfo")
    notes = db.relationship("BrokerDealNote")
    broker_pictures = db.relationship(
        "BrokerDealPicture")

    @property
    def deal_make(self):
        return self.make.make_name

    def to_dict(self):
        return {
            "id": self.id,
            "fee": self.fee,
            "active_month_year": self.active_month_year,
            "listed": self.listed,
            "advertised": self.advertise,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "lease_info": self.lease_info.to_dict(),
            "make": self.make.to_dict(),
            "broker": self.broker.to_dict()
        }
