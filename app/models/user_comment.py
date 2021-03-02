from .db import db


class User_Comment(db.Model):
    __tablename__ = 'user_comments'

    id = db.Column(db.Integer, primary_key=True)
    broker_id = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=False)
    pinned = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "broker_id": self.broker_id,
            "user_id": self.user_id,
            "comment": self.comment,
            "pinned": self.pinned,
            "created_at": self.created_at,
            "updated_at": self.updated_at

        }
