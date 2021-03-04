"""added demo row to broker deal

Revision ID: d79bf3df89c5
Revises: eb2cfa7c7a83
Create Date: 2021-03-04 12:14:32.631004

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd79bf3df89c5'
down_revision = 'eb2cfa7c7a83'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('broker_deals', sa.Column('demo', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('broker_deals', 'demo')
    # ### end Alembic commands ###
