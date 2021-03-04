from .db import db


class Trim(db.Model):
    __tablename__ = 'trims'

    id = db.Column(db.Integer, primary_key=True)
    model_id = db.Column(db.Integer, db.ForeignKey(
        "models.id"), nullable=False)
    make_id = db.Column(db.Integer, db.ForeignKey(
        "makes.id"), nullable=False)
    style_id = db.Column(db.Integer, db.ForeignKey(
        "styles.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    doors = db.Column(db.Integer, nullable=True)
    fuel_type = db.Column(db.String(20), nullable=True)
    awd = db.Column(db.Boolean)
    cylinders = db.Column(db.Integer, nullable=True)

    model = db.relationship("Model")
    make = db.relationship("Make")
    style = db.relationship("Style")
    lease_infos = db.relationship("LeaseInfo")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "style": self.style.to_dict(),
            "make": self.make.to_dict(),
            # "model": self.model.to_dict(),
            "doors": self.doors,
            "fuel_type": self.fuel_type,
            "awd": self.awd,
            "cylinders": self.cylinders,
        }
