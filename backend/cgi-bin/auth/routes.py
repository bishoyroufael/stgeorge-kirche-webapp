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


@auth_bp.post('/sign_up')
@auth_bp.input(SignUp, location='form')
@auth_bp.input(SignUpToken, location='query')
def sign_up(form_data, query_data):
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


@auth_bp.post('/sign_in')
@auth_bp.input(SignIn, location='form')
def sign_in(form_data):
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

@auth_bp.post('/sign_out')
@login_required
def sign_out():
    session.pop('user_id', None)
    session.pop('user_storage_folder', None)
    return jsonify(message='Ok!')