from app.models import db, Model
# Adds a demo user, you can add other users here if you want


def seed_models():

    audi_a3 = Model(make_id=1, name="A3")
    audi_a5 = Model(make_id=1, name="A5 Sportback")
    audi_a8 = Model(make_id=1, name="A8L")
    bmw_3series = Model(make_id=2, name="3 series")
    bmw_5series = Model(make_id=2, name="5 series")
    bmw_7series = Model(make_id=2, name="7 series")
    mercedes_aclass = Model(make_id=3, name="A class")
    mercedes_cclass = Model(make_id=3, name="C class")
    mercedes_sclass = Model(make_id=3, name="S class")
    honda_civic = Model(make_id=4, name="Civic")
    honda_accord = Model(make_id=4, name="Accord")
    honda_crv = Model(make_id=4, name="CR-V")
    toyota_corolla = Model(make_id=5, name="Corolla")
    toyota_camry = Model(make_id=5, name="Camry")
    toyota_supra = Model(make_id=5, name="Supra")
    nissan_sentra = Model(make_id=6, name="Senta")
    nissan_altima = Model(make_id=6, name="Altima")
    nissan_maxima = Model(make_id=6, name="Maxima")

    db.session.add(audi_a3)
    db.session.add(audi_a5)
    db.session.add(audi_a8)
    db.session.add(bmw_3series)
    db.session.add(bmw_7series)
    db.session.add(bmw_5series)
    db.session.add(mercedes_aclass)
    db.session.add(mercedes_cclass)
    db.session.add(mercedes_sclass)
    db.session.add(honda_civic)
    db.session.add(honda_accord)
    db.session.add(honda_crv)
    db.session.add(toyota_camry)
    db.session.add(toyota_corolla)
    db.session.add(toyota_supra)
    db.session.add(nissan_sentra)
    db.session.add(nissan_altima)
    db.session.add(nissan_maxima)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_models():
    db.session.execute('TRUNCATE models RESTART IDENTITY CASCADE')
    db.session.commit()
