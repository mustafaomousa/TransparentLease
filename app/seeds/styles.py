from app.models import db, Style
# Adds a demo user, you can add other users here if you want


def seed_styles():

    convertible = Style(name="Convertible")
    coupe = Style(name="Coupe")
    hatchback = Style(name="Hatchback")
    sedan = Style(name="Sedan")
    suv_crossover = Style(name="SUV / Crossover")
    truck = Style(name="Truck")
    van_minivan = Style(name="Van / Minivan")
    wagon = Style(name="Wagon")

    db.session.add(convertible)
    db.session.add(coupe)
    db.session.add(hatchback)
    db.session.add(sedan)
    db.session.add(suv_crossover)
    db.session.add(truck)
    db.session.add(van_minivan)
    db.session.add(wagon)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_styles():
    db.session.execute('TRUNCATE styles RESTART IDENTITY CASCADE')
    db.session.commit()
