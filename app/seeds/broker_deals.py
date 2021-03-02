from app.models import db, BrokerDeal, LeaseInfo, BrokerDealNote, BrokerDealPicture
from datetime import datetime
# Adds a demo user, you can add other users here if you want


def seed_broker_deals():

    bmw740ixleaseinfo = LeaseInfo(broker_id=1,
                                  trim_id=8,
                                  months=36,
                                  miles_yearly=7500,
                                  money_factor=0.00086,
                                  residual=55,
                                  msrp=98000,
                                  discount=17640,
                                  loyalty=3000,
                                  lease_cash=0,
                                  conquest=0,
                                  additional_fees=2024,
                                  payment=728)

    bmw740ixbrokerdeal = BrokerDeal(broker_id=1,
                                    make_id=2,
                                    lease_info_id=1,
                                    fee=300,
                                    active_month_year=datetime.now(),
                                    listed=True,
                                    advertise=True,
                                    created_at=datetime.now(),
                                    updated_at=datetime.now())

    db.session.add(bmw740ixleaseinfo)
    db.session.add(bmw740ixbrokerdeal)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_broker_deals():
    db.session.execute('TRUNCATE broker_deals RESTART IDENTITY CASCADE')
    db.session.commit()
