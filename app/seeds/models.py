from app.models import db, Model
# Adds a demo user, you can add other users here if you want


def seed_models():
    audi_a3 = Model(make_id=1, name="A3", year=2021)
    audi_a5 = Model(make_id=1, name="A5 Sportback", year=2021)
    audi_a8 = Model(make_id=1, name="A8L", year=2021)
    bmw_3series = Model(make_id=2, name="3 series", year=2021)
    bmw_5series = Model(make_id=2, name="5 series", year=2021)
    bmw_7series = Model(make_id=2, name="7 series", year=2021)
    mercedes_aclass = Model(make_id=3, name="A class", year=2021)
    mercedes_cclass = Model(make_id=3, name="C class", year=2021)
    mercedes_sclass = Model(make_id=3, name="S class", year=2020)
    honda_civic = Model(make_id=4, name="Civic", year=2021)
    honda_accord = Model(make_id=4, name="Accord", year=2021)
    honda_crv = Model(make_id=4, name="CR-V", year=2021)
    toyota_corolla = Model(make_id=5, name="Corolla", year=2020)
    toyota_camry = Model(make_id=5, name="Camry", year=2021)
    toyota_supra = Model(make_id=5, name="Supra", year=2020)
    nissan_sentra = Model(make_id=6, name="Sentra", year=2021)
    nissan_altima = Model(make_id=6, name="Altima", year=2021)
    nissan_maxima = Model(make_id=6, name="Maxima", year=2021)

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
