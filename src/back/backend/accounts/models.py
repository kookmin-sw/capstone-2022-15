from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUserManager(BaseUserManager):
    def create_user(self, user_id, password, user_name, user_interest):
        if not user_id:
            raise ValueError("Users must have an user id")
        if not user_name:
            raise ValueError("Users must have an user name")
        if not user_interest:
            raise ValueError("Users must have an user interest")

        user = self.model(
            user_id=user_id,
            user_name=user_name,
            user_interest=user_interest,
            # password=user_pw,
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, user_id, password, user_name, user_interest):
        user = self.create_user(
            user_id=user_id,
            password=password,
            user_name=user_name,
            user_interest=user_interest,
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return


class User(AbstractUser):
    username = None
    user_id = models.CharField(
        primary_key=True, unique=True, max_length=50, null=False, default=""
    )
    user_name = models.CharField(max_length=30, default=False)
    user_interest = models.TextField(default=False)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = "user_id"
    REQUIRED_FIELDS = ["user_name", "user_interest"]

    objects = CustomUserManager()

    def __str__(self):
        return self.user_id
