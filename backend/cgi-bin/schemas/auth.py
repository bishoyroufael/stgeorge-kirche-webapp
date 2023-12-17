from apiflask import Schema
from apiflask.fields import String, Email
from apiflask.validators import Length, Regexp
import re

class SignUp(Schema):
    email = Email(required=True, validate=[Regexp(regex=re.compile(r'^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'))])
    password = String(required=True, validate=[Length(min=8, max=24)])

class SignIn(Schema):
    email = Email(required=True, validate=[Regexp(regex=re.compile(r'^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'))])
    password = String(required=True, validate=[Length(min=8, max=24)])

class SignUpToken(Schema):
    token = String()