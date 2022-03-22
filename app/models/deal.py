from .db import db


class Deal(db.Model):
    __tablename__ = 'deals'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    year = db.Column(db.Integer, nullable=False)
    make = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)

    months = db.Column(db.Integer, nullable=False)
    miles = db.Column(db.Integer, nullable=False)
    money_factor = db.Column(db.Float, nullable=False)
    residual = db.Column(db.Integer, nullable=False)
    msrp = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Float, nullable=False)
    additional_fees = db.Column(db.Float, nullable=False)
    payment = db.Column(db.Float, nullable=False)

    active_month_year = db.Column(db.Date, nullable=False)
    listed = db.Column(db.Boolean, nullable=False)
    demo = db.Column(db.Boolean, nullable=False)

    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    
    broker = db.relationship("User")

    def to_dict(self):
        return {
            "id": self.id,
            "year": self.year,
            "make": self.make,
            "model": self.model,
            "months": self.months,
            "miles": self.miles,
            "money_factor": self.money_factor,
            "residual": self.residual,
            "msrp": self.msrp,
            "discount": self.discount,
            "additional_fees": self.additional_fees,
            "payment": self.payment,
            "active_month_year": self.active_month_year,
            "listed": self.listed,
            "demo": self.demo,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
