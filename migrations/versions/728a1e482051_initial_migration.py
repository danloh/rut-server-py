"""initial migration

Revision ID: 728a1e482051
Revises: a29a92d4ae02
Create Date: 2017-07-08 17:36:12.032378

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '728a1e482051'
down_revision = 'a29a92d4ae02'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('vote', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('comments', 'vote')
    # ### end Alembic commands ###