from apiflask import Schema
from apiflask.fields import String, Email
from apiflask.validators import Length, Regexp
import re

class Register(Schema):
    email = Email(required=True, validate=[Regexp(regex=re.compile(r'^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'))])
    password = String(required=True, validate=[Length(min=8, max=24)])

class LogIn(Schema):
    email = Email(required=True, validate=[Regexp(regex=re.compile(r'^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'))])
    password = String(required=True, validate=[Length(min=8, max=24)])

class RegisterToken(Schema):
    token = String()