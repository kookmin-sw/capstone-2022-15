from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.serializers import UserSerializer

from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib.auth.forms import AuthenticationForm


class SignupView(APIView):
    http_method_names = ["post"]

    permission_classes = (permissions.AllowAny,)

    def post(self, *args, **kwargs):
        serializer = UserSerializer(data=self.request.data)
        print(serializer)
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            return Response(status=status.HTTP_201_CREATED)
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={
                "errors": serializer.errors,
            },
        )


def loginView(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            # return redirect("articles:index")
            return Response(status=status.HTTP)
    else:
        form = AuthenticationForm()

    context = {
        "form": form,
    }
