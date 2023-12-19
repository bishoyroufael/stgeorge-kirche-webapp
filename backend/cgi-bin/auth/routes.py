# Provides a simple auth mechanism using sessions
from flask import session, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from models.user import User
from models.base import db
import re
from apiflask import APIBlueprint, abort
from schemas.auth import *
from auth.decor import login_required

auth_bp = APIBlueprint('auth_routes', __name__)


@auth_bp.route('/register', methods=['OPTION', 'POST'])
@auth_bp.input(Register, location='form')
@auth_bp.input(RegisterToken, location='query')
def register(form_data, query_data):
    email = form_data['email']
    password = form_data['password']

    token = query_data.get('token')
    if token != current_app.config['SECURE_ACCOUNT_MANAGMENT_TOKEN']:
        abort(401, message='unauthorized')


    _user = db.session.query(User).filter(User.email == email).first()
    if _user:
        # Conflict
        abort(409, message='user already exists, try to signin')

    hashed_password = generate_password_hash(password)

    new_user = User(email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='Ok!')


@auth_bp.route('/log_in', methods=['OPTION', 'POST'])
@auth_bp.input(LogIn, location='form')
def log_in(form_data):
    email = form_data['email']
    password = form_data['password']

    user = User.query.filter(User.email == email).first()

    if user and check_password_hash(user.password_hash, password):
        session['user_id'] = user.id
        session['user_storage_folder'] = user.email.split('@')[0]

        return jsonify(message='Ok!')
    else:
        # Bad user
        abort(400, message='wrong email or password')


# Based on: https://www.youtube.com/watch?v=EbUNgXQIqrk
# todo: investigate security?
@auth_bp.route('/is_logged', methods=['OPTION', 'GET'])
@login_required
def is_logged():
    return jsonify(message='Ok!')


@auth_bp.route('/log_out', methods=['OPTION', 'POST'])
@login_required
def log_out():
    session.pop('user_id', None)
    session.pop('user_storage_folder', None)
    return jsonify(message='Ok!')