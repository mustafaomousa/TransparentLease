from .db import db


class UserInquiry(db.Model):
    __tablename__ = 'user_inquiries'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    broker_deal_id = db.Column(db.Integer, db.ForeignKey(
        "broker_deals.id"), nullable=False)
    accepted = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, nullable=False)

    broker_deal = db.relationship(
        "BrokerDeal", foreign_keys=[broker_deal_id])
    user = db.relationship('User', foreign_keys=[user_id])

    @property
    def broker_id(self):
        return self.broker_deal.owning_broker["id"]

    def to_dict(self):
        return {
            "id": self.id,
            "broker_deal_id": self.broker_deal_id,
            "broker_id": self.broker_id,
            "user_id": self.user_id,
            "broker_deal": self.broker_deal.to_dict(),
            "user": self.user.to_dict(),
            "created_at": self.created_at
        }
