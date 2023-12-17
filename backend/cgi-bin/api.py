import dependencies
from flask import jsonify
from pathlib import Path
from models.base import db
from auth.routes import auth_bp
from storage.routes import storage_bp
from dotenv import load_dotenv
status = load_dotenv('.env')
assert status, 'env file is missing'
import os
from datetime import timedelta
from apiflask import APIFlask

app = APIFlask(__name__, spec_path='/spec')

# Set the session timeout to 15 minutes
app.permanent_session_lifetime = timedelta(minutes=15)

app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DB_URL']
app.config['SECURE_ACCOUNT_MANAGMENT_TOKEN'] = os.environ['SECURE_ACCOUNT_MANAGMENT_TOKEN']


# Set the maximum content length for requests (10 MB)
# i.e used to limit large file uploads
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024  # 10 MB
app.config['MAX_STORAGE_SIZE_PER_USER'] = 10 * 1024 * 1024 * 1024 # 10 GB

db.init_app(app)

with app.app_context():
    db.create_all()

storage_library = Path('../bibliotek_storage')
storage_library.mkdir(exist_ok=True, parents=True)

app.config.storage_library = storage_library

# Auth routes
app.register_blueprint(auth_bp, url_prefix='/api/v1/auth/')
app.register_blueprint(storage_bp, url_prefix='/api/v1/storage/')

# @app.route('/protected')
# @login_required
# def protected():
#     return jsonify(message='Accepted request!')

@app.route("/")
def entry():
    return jsonify(message='Ok!') 