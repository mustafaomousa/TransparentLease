from werkzeug.security import generate_password_hash
from app.models import db, User
from datetime import *
# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(name='Demo User',
                username='Demo',
                email='demo@aa.io',
                password='password',
                address='2600 W. 7th Street',
                city='Fort Worth',
                state="Texas",
                zip_code=76107,
                header='I am a demo user!',
                bio='I sure love demoing cool apps!',
                broker=True,
                dealer=False,
                created_at=datetime.now()
                )

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE')
    db.session.commit()
