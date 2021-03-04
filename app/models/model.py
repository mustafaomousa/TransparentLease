from .db import db


class Model(db.Model):
    __tablename__ = 'models'

    id = db.Column(db.Integer, primary_key=True)
    make_id = db.Column(db.Integer, db.ForeignKey('makes.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)

    make = db.relationship("Make")
    trims = db.relationship("Trim")
    alerts = db.relationship("DealAlert")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "make": self.make.to_dict()
        }
