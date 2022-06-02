from .common import *


INTERNAL_IPS = ["127.0.0.1"]

CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "IN4U",
        "USER": "admin",
        "PASSWORD": "",
        "HOST": "in4u.c19xl02x9epy.ap-northeast-2.rds.amazonaws.com",
        "PORT": "3306"
    }
}