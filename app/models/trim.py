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
    doors = db.Column(db.Integer, nullable=False)
    fuel_type = db.Column(db.String(20), nullable=False)
    awd = db.Column(db.Boolean)
    cylinders = db.Column(db.Integer, nullable=False)

    model = db.relationship("Model", back_populates='trims')
    make = db.relationship("Make", back_populates="trims")
    style = db.relationship("Style", back_populates="trims")
    lease_infos = db.relationship("Lease_Info", back_populates="trims")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "style": self.style,
            "make": self.make,
            "model": self.model,
            "doors": self.doors,
            "fuel_type": self.fuel_type,
            "awd": self.awd,
            "cylinders": self.cylinders,
        }
