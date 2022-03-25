from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUserManager(BaseUserManager):
    def create_user(self, user_id, user_pw, **extra_fields):
        if not user_id:
            raise ValueError('Users must have an user id')
        if not user_pw:
            raise ValueError('Users must have an user password')

        user = self.model(user_id, **extra_fields)
        user.set_password(user_pw)
        user.save()
        return user

    def create_superuser(self, user_id, user_pw, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(user_id, user_pw, **extra_fields)


class User(AbstractUser):
    username = None
    user_id = models.CharField(primary_key=True, unique=True, max_length=50, null=False, default='')
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = ['user_pw']


    objects = CustomUserManager()

    def __str__(self):
        return self.user_id