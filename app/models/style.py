from .db import db


class Style(db.Model):
    __tablename__ = 'styles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    trims = db.relationship("Trim")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
