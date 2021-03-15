from app.models import db, UserInquiry
from datetime import *
# Adds a demo user, you can add other users here if you want


def seed_inquiries():
    inquiry = UserInquiry(user_id=2, broker_deal_id=1,
                          created_at=datetime.now())

    db.session.add(inquiry)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_inquiries():
    db.session.execute('TRUNCATE inquiries RESTART IDENTITY CASCADE')
    db.session.commit()
