from app.models import db, Make
from datetime import *
# Adds a demo user, you can add other users here if you want


def seed_makes():

    audi = Make(name='Audi', luxury=True)
    bmw = Make(name='BMW', luxury=True)
    mercedes = Make(name='Mercedes', luxury=True)
    honda = Make(name='Honda', luxury=False)
    toyota = Make(name='Toyota', luxury=False)
    nissan = Make(name='Nissan', luxury=False)

    db.session.add(audi)
    db.session.add(bmw)
    db.session.add(mercedes)
    db.session.add(honda)
    db.session.add(toyota)
    db.session.add(nissan)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_makes():
    db.session.execute('TRUNCATE makes RESTART IDENTITY CASCADE')
    db.session.commit()
