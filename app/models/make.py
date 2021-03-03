from .db import db


class Make(db.Model):
    __tablename__ = 'makes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    luxury = db.Column(db.Boolean)

    models = db.relationship("Model")
    trims = db.relationship("Trim")
    broker_deals = db.relationship("BrokerDeal", backref="makes")
    alerts = db.relationship("DealAlert")

    @property
    def make_name(self):
        return self.name

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "luxury": self.luxury
        }
