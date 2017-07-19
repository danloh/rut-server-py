"""initial migration

Revision ID: 702635f267be
Revises: 
Create Date: 2017-07-06 19:34:44.174640

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '702635f267be'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('demands',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.Text(), nullable=False),
    sa.Column('vote', sa.Integer(), nullable=True),
    sa.Column('dtag_str', sa.String(length=512), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('requestor_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['requestor_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tag_demand',
    sa.Column('tag_id', sa.Integer(), nullable=True),
    sa.Column('demand_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['demand_id'], ['demands.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tag_demand')
    op.drop_table('demands')
    # ### end Alembic commands ###
