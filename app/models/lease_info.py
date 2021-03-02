from .db import db


class LeaseInfo(db.Model):
    __tablename__ = 'lease_infos'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    trim_id = db.Column(db.Integer, db.ForeignKey(
        "trims.id"), nullable=False)
    months = db.Column(db.Integer, nullable=False)
    miles_yearly = db.Column(db.Integer, nullable=False)
    money_factor = db.Column(db.Integer, nullable=False)
    residual = db.Column(db.Integer, nullable=False)
    msrp = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Float, nullable=False)
    loyalty = db.Column(db.Float, nullable=False)
    lease_cash = db.Column(db.Float, nullable=False)
    conquest = db.Column(db.Float, nullable=False)
    additional_fees = db.Column(db.Float, nullable=False)
    payment = db.Column(db.Float, nullable=False)

    broker = db.relationship("Broker", back_populates="lease_infos")
    trim = db.relationship("trim", back_populates="lease_infos")

    def to_dict(self):
        return {
            "id": self.id,
            "broker": self.broker,
            "trim": self.trim,
            "months": self.months,
            "miles_yearly": self.miles_yearly,
            "money_factor": self.money_factor,
            "residual": self.residual,
            "msrp": self.msrp,
            "discount": self.discount,
            "loyalty": self.loyalty,
            "lease_cash": self.lease_cash,
            "conquest": self.conquest,
            "additional_fees": self.additional_fees,
            "payment": self.payment,
        }
