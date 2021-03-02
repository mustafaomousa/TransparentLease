from .db import db


class Make(db.Model):
    __tablename__ = 'makes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    luxury = db.Column(db.Boolean)

    models = db.relationship("Model", back_populates="makes")
    trims = db.relationship("Trim", back_populates="makes")
    broker_deals = db.relationship("BrokerDeal", back_populates="makes")
    alerts = db.relationship("DealAlert", back_populates="makes")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "luxury": self.luxury,
            "models": self.models,
            "trims": self.trims,
            "deals": self.broker_deals
        }
