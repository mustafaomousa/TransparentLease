"""created the leaseinfo table

Revision ID: 18f81c56c0e4
Revises: 92e922bb6d6d
Create Date: 2021-03-02 14:04:17.760365

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '18f81c56c0e4'
down_revision = '92e922bb6d6d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('lease_infos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('broker_id', sa.Integer(), nullable=False),
    sa.Column('trim_id', sa.Integer(), nullable=False),
    sa.Column('months', sa.Integer(), nullable=False),
    sa.Column('miles_yearly', sa.Integer(), nullable=False),
    sa.Column('money_factor', sa.Integer(), nullable=False),
    sa.Column('residual', sa.Integer(), nullable=False),
    sa.Column('msrp', sa.Float(), nullable=False),
    sa.Column('discount', sa.Float(), nullable=False),
    sa.Column('loyalty', sa.Float(), nullable=False),
    sa.Column('lease_cash', sa.Float(), nullable=False),
    sa.Column('conquest', sa.Float(), nullable=False),
    sa.Column('additional_fees', sa.Float(), nullable=False),
    sa.Column('payment', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['broker_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['trim_id'], ['trims.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('lease_infos')
    # ### end Alembic commands ###
