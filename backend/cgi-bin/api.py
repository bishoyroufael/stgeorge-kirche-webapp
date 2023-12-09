import dependencies
from flask import Flask, jsonify
from pathlib import Path
from models.base import db
from auth.routes import auth_bp
from storage.routes import storage_bp
from dotenv import load_dotenv
status = load_dotenv('.env')
assert status, 'env file is missing'
import os

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DB_URL']

# Set the maximum content length for requests (10 MB)
# i.e used to limit large file uploads
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024  # 10 MB

db.init_app(app)

with app.app_context():
    db.create_all()

storage_library = Path('../bibliotek_storage')
storage_library.mkdir(exist_ok=True, parents=True)

app.config.storage_library = storage_library

# Auth routes
app.register_blueprint(auth_bp)
app.register_blueprint(storage_bp)

@app.route("/")
def entry():
    return jsonify(message='Ok!') 