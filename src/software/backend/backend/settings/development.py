from .base import *  # noqa

DEBUG = True
ALLOWED_HOSTS = ["*"]
# remove restrictions on passwords
AUTH_PASSWORD_VALIDATORS = []

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = (
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8001",
    "http://localhost:5000",
)
