#!/usr/bin/python3

try:
    from wsgiref.handlers import CGIHandler
    from api import app
    import os    
    from pathlib import Path

    CGIHandler().run(app)
except Exception as err:
    print("Content-Type: text/html\n\n")
    print(err)
