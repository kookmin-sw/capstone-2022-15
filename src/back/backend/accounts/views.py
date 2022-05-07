from django.contrib.auth import get_user_model, authenticate, login

from rest_framework import permissions, authentication

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreateUserSerializer, LoginUserSerializer
from rest_framework.authtoken.models import Token

User = get_user_model()


class SignupView(APIView):
    http_method_names = ["post"]

    permission_classes = [
        permissions.AllowAny,
    ]

    def post(self, *args, **kwargs):
        serializer = CreateUserSerializer(data=self.request.data)
        if serializer.is_valid():
            user = User.objects.create_user(**serializer.validated_data)
            token = Token.objects.create(user=user)  # token create
            return Response(
                status=status.HTTP_201_CREATED,
                data={
                    "success": True,
                    "token": token.key,
                },
            )
        # already id exists etc..
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "errors": serializer.errors,
            },
        )


class LoginView(APIView):
    authentication_classes=[
        authentication.TokenAuthentication
    ]

    permission_classes = [
        #permissions.IsAuthenticated,
        permissions.AllowAny
    ]
    def post(self, request, *args, **kwargs):
        serializer = LoginUserSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        user_data = serializer.validated_data
        user_id = user_data["user_id"]
        password = user_data["password"]

        # wrong request
        if user_id is None or password is None:
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"error": "user id/password required"},
            )
        user = User.objects.filter(user_id=user_id).first()
        # not founded user
        if user is None:
            return Response(
                {"error": "user is not founded"}, status=status.HTTP_404_NOT_FOUND
            )
        # wrong password
        if not user.check_password(password):
            return Response(
                {"error": "wrong password"}, status=status.HTTP_400_BAD_REQUEST
            )
        # success
        token = Token.objects.get(user=user)  # token get
        return Response(
            status=status.HTTP_200_OK,
            data={"success": True, "user": user_id, "token":token.key},
        )
