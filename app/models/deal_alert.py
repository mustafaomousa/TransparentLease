from .db import db


class DealAlert(db.Model):
    __tablename__ = 'deal_alerts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    make_id = db.Column(db.Integer, db.ForeignKey("makes.id"), nullable=False)
    model_id = db.Column(db.Integer, db.ForeignKey(
        "models.id"), nullable=False)
    trim = db.Column(db.String(100), nullable=False)

    user = db.relationship("User")
    make = db.relationship("Make")
    model = db.relationship("Model")

    def to_dict(self):
        return {
            "id": self.id,
            "user": self.user.to_dict(),
            "make": self.make.to_dict(),
            "model": self.model.to_dict(),
            "trim": self.trim
        }
