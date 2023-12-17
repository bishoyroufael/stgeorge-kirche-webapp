from functools import wraps
from flask import session, current_app
from datetime import timedelta
from apiflask import abort

# Decorator to check if the user is authenticated
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            abort(401, message='unauthorized')  # Unauthorized
        # Update session expiration time
        session.permanent = True
        current_app.permanent_session_lifetime = timedelta(minutes=15)
        session.modified = True
        return f(*args, **kwargs)
    return decorated_function