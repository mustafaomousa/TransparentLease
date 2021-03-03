from .db import db


class BrokerDealNote(db.Model):
    __tablename__ = 'broker_deal_notes'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    broker_deal_id = db.Column(db.Integer, db.ForeignKey(
        "broker_deals.id"), nullable=False)
    note = db.Column(db.String, nullable=False)

    broker = db.relationship("User")
    deal = db.relationship("BrokerDeal")

    def to_dict(self):
        return {
            "id": self.id,
            "broker": self.broker.to_dict(),
            "deal": self.deal.to_dict(),
            "note": self.note
        }
