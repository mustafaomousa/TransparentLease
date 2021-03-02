from .db import db


class Model(db.Model):
    __tablename__ = 'models'

    id = db.Column(db.Integer, primary_key=True)
    make_id = db.Column(db.Integer, db.ForeignKey('makes.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)

    make = db.relationship("Make", back_populates="models")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "make": self.make
        }
