# Provides a simple auth mechanism using sessions
from flask import Blueprint, render_template, request, redirect, url_for, session, abort, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.user import User
from models.base import db
import re
from auth.decor import login_required

auth_bp = Blueprint('auth_routes', __name__)

def is_valid_email(email):
    # Regular expression for a basic email validation
    email_pattern = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

    return bool(re.match(email_pattern, email))

def validate_email_and_password(email, password):
    if not email or not password:
        # Bad request
        abort(400)
    if not is_valid_email(email):
        abort(400)


@auth_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        validate_email_and_password(email, password)

        _user = db.session.query(User).filter(User.email == email).first()
        if _user:
            # Conflict
            abort(409)

        hashed_password = generate_password_hash(password)

        new_user = User(email=email, password_hash=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify('Ok!')

    abort(400)

@auth_bp.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        validate_email_and_password(email, password)

        user = User.query.filter(User.email == email).first()

    if user and check_password_hash(user.password_hash, password):
        session['user_id'] = user.id
        session['user_storage_folder'] = user.email.split('@')[0]

        return jsonify('Ok!')
    else:
        # Bad user
        abort(400)

@auth_bp.route('/signout')
def signout():
    session.pop('user_id', None)
    session.pop('user_storage_folder', None)
    return redirect(url_for('home'))