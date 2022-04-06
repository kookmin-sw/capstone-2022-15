from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

# signup
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("user_id", "password", "user_name", "user_interest")

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["user_id"],
            validated_data["password"],
            validated_data["user_name"],
            validated_data["user_interest"],
        )
        return user


# login
class LoginUserSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    password = serializers.CharField()
