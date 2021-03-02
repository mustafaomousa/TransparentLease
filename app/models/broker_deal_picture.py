from .db import db


class BrokerDealPicture(db.Model):
    __tablename__ = 'broker_deal_pictures'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    broker_deal_id = db.Column(db.Integer, db.ForeignKey(
        "broker_deals.id"), nullable=False)
    picture_url = db.Column(db.String, nullable=False)

    broker = db.relationship("User")
    deal = db.relationship("BrokerDeal")

    def to_dict(self):
        return {
            "id": self.id,
            "broker": self.broker,
            "deal": self.deal,
            "broker": self.broker,
            "picture": self.picture_url
        }
