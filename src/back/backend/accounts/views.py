import json
from django.contrib.auth import get_user_model, authenticate, login

from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login as auth_login

from .models import LoginForm
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer


class SignupView(APIView):
    http_method_names = ["post"]

    permission_classes = (permissions.AllowAny,)

    def post(self, *args, **kwargs):
        serializer = CreateUserSerializer(data=self.request.data)
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            return Response(
                status=status.HTTP_201_CREATED,
                data={
                    "success": True,
                },
            )
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "errors": serializer.errors,
            },
        )


class LoginView(APIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = LoginUserSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        user.pop("password")

        return Response(status=status.HTTP_200_OK, data={"success": True, "user": user})
