from flask.cli import AppGroup
from .users import seed_users, undo_users
from .makes import seed_makes, undo_makes
from .models import seed_models, undo_models
from .styles import seed_styles, undo_styles
from .trims import seed_trims, undo_trims
from .broker_deals import seed_broker_deals, undo_broker_deals

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_makes()
    seed_models()
    seed_styles()
    seed_trims()
    seed_broker_deals()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_makes()
    undo_models()
    undo_styles()
    undo_trims()
    undo_broker_deals()
    # Add other undo functions here
