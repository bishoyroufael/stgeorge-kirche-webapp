from functools import wraps
from flask import abort, session

# Decorator to check if the user is authenticated
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            abort(401)  # Unauthorized
        return f(*args, **kwargs)
    return decorated_function