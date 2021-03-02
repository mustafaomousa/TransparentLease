from .db import db


class Broker_Reply(db.Model):
    __tablename__ = 'broker_replies'

    id = db.Column(db.Integer, primary_key=True)
    user_comment_id = db.Column(
        db.Integer, db.ForeignKey("user_comments.id"), nullable=False)
    broker_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    reply = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    comment = db.relationship("User_Comment", back_populates="broker_replies")

    def to_dict(self):
        return {
            "id": self.id,
            "user_comment_id": self.user_comment_id,
            "broker_id": self.broker_id,
            "reply": self.reply,
            "created_at": self.created_at,
            "updated_at": self.updated_at

        }