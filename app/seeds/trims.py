from app.models import db, Trim
# Adds a demo user, you can add other users here if you want


def seed_trims():

    a3_premium = Trim(model_id=1, make_id=1, style_id=4, name="Premium",
                      doors=4, fuel_type="Gas", awd=True, cylinders=4)
    a3_premiumplus = Trim(model_id=1, make_id=1, style_id=4, name="Premium Plus",
                          doors=4, fuel_type="Gas", awd=False, cylinders=4)
    a5_premiumplus = Trim(model_id=2, make_id=1, style_id=4,
                          name="Premium Plus", doors=4, fuel_type="Gas", awd=True, cylinders=4)
    a5_prestige = Trim(model_id=2, make_id=1, style_id=3, name="Prestige",
                       doors=4, fuel_type="Gas", awd=True, cylinders=4)
    a8 = Trim(model_id=3, make_id=1, style_id=4, name="A8L",
              doors=4, fuel_type="Gas", awd=True, cylinders=8)
    bmw_330ix = Trim(model_id=4, make_id=2, style_id=4, name="330i x-drive",
                     doors=4, fuel_type="Gas", awd=True, cylinders=4)
    bmw_330i = Trim(model_id=4, make_id=2, style_id=4, name="330i",
                    doors=4, fuel_type="Gas", awd=False, cylinders=4)
    bmw_m340ix = Trim(model_id=4, make_id=2, style_id=4, name="m340i x-drive",
                      doors=4, fuel_type="Gas", awd=True, cylinders=6)
    bmw_740ix = Trim(model_id=5, make_id=2, style_id=4, name="740i x-drive",
                     doors=4, fuel_type="Gas", awd=True, cylinders=6)
    bmw_750i = Trim(model_id=5, make_id=2, style_id=4, name="750i",
                    doors=4, fuel_type="Gas", awd=False, cylinders=8)
    bmw_m550ix = Trim(model_id=6, make_id=2, style_id=4, name="m550i x-drive",
                      doors=4, fuel_type="Gas", awd=True, cylinders=8)
    merc_a35 = Trim(model_id=7, make_id=3, style_id=4, name="A35 AMG",
                    doors=4, fuel_type="Gas", awd=True, cylinders=4)
    merc_a200 = Trim(model_id=7, make_id=3, style_id=4, name="A200",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    merc_c300 = Trim(model_id=8, make_id=3, style_id=4, name="C300",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    merc_c63s = Trim(model_id=8, make_id=3, style_id=2, name="C63 AMG",
                     doors=2, fuel_type="Gas", awd=False, cylinders=8)
    merc_s450 = Trim(model_id=9, make_id=3, style_id=4, name="S450",
                     doors=4, fuel_type="Gas", awd=False, cylinders=6)
    merc_s560 = Trim(model_id=9, make_id=3, style_id=4, name="S560",
                     doors=4, fuel_type="Gas", awd=False, cylinders=8)
    merc_s63 = Trim(model_id=9, make_id=3, style_id=2, name="S63 AMG",
                    doors=2, fuel_type="Gas", awd=True, cylinders=8)
    civic_lx = Trim(model_id=10, make_id=4, style_id=4, name="LX",
                    doors=4, fuel_type="Gas", awd=False, cylinders=4)
    civic_limited = Trim(model_id=10, make_id=4, style_id=4,
                         name="Limited", doors=4, fuel_type="Gas", awd=False, cylinders=4)
    accord_lx = Trim(model_id=11, make_id=4, style_id=4, name="LX",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    accord_sport = Trim(model_id=11, make_id=4, style_id=4, name="Sport",
                        doors=4, fuel_type="Gas", awd=False, cylinders=4)
    crv_lx = Trim(model_id=12, make_id=4, style_id=5, name="LX",
                  doors=4, fuel_type="Gas", awd=True, cylinders=4)
    camry_xle = Trim(model_id=13, make_id=5, style_id=4, name="XLE",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    camry_le = Trim(model_id=13, make_id=5, style_id=4, name="LE",
                    doors=4, fuel_type="Gas", awd=False, cylinders=4)
    corolla_le = Trim(model_id=14, make_id=5, style_id=4, name="LE",
                      doors=4, fuel_type="Gas", awd=False, cylinders=4)
    supra_xle = Trim(model_id=15, make_id=5, style_id=2, name="XLE",
                     doors=2, fuel_type="Gas", awd=False, cylinders=6)
    sentra_sv = Trim(model_id=16, make_id=6, style_id=4, name="SV",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    sentra_sl = Trim(model_id=16, make_id=6, style_id=4, name="SL",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    altima_sl = Trim(model_id=17, make_id=6, style_id=4, name="SL",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    altima_sr = Trim(model_id=17, make_id=6, style_id=4, name="SR",
                     doors=4, fuel_type="Gas", awd=False, cylinders=4)
    maxima_sl = Trim(model_id=18, make_id=6, style_id=4, name="SL",
                     doors=4, fuel_type="Gas", awd=False, cylinders=6)
    maxima_sr = Trim(model_id=18, make_id=6, style_id=4, name="SR",
                     doors=4, fuel_type="Gas", awd=False, cylinders=6)

    db.session.add(a3_premium)
    db.session.add(a3_premiumplus)
    db.session.add(a5_premiumplus)
    db.session.add(a5_prestige)
    db.session.add(a8)
    db.session.add(bmw_330i)
    db.session.add(bmw_330ix)
    db.session.add(bmw_740ix)
    db.session.add(bmw_750i)
    db.session.add(bmw_m550ix)
    db.session.add(bmw_m340ix)
    db.session.add(merc_a200)
    db.session.add(merc_a35)
    db.session.add(merc_c300)
    db.session.add(merc_c63s)
    db.session.add(merc_s450)
    db.session.add(merc_s560)
    db.session.add(merc_s63)
    db.session.add(civic_lx)
    db.session.add(civic_limited)
    db.session.add(accord_lx)
    db.session.add(accord_sport)
    db.session.add(crv_lx)
    db.session.add(corolla_le)
    db.session.add(supra_xle)
    db.session.add(camry_le)
    db.session.add(camry_xle)
    db.session.add(sentra_sl)
    db.session.add(sentra_sv)
    db.session.add(altima_sl)
    db.session.add(altima_sr)
    db.session.add(maxima_sl)
    db.session.add(maxima_sr)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_trims():
    db.session.execute('TRUNCATE trims RESTART IDENTITY CASCADE')
    db.session.commit()
