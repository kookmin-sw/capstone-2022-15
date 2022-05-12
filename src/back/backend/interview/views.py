from django.shortcuts import render
from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class PreparationView(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get(self, request, *args, **kwargs):
        print(request.user)
        print(request.auth)
        data = {'user':request.user}
        return Response(
            status=status.HTTP_200_OK,
            data={"success":True}
        )

class PracticeView(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    def get(self, *args, **kwargs):
        print(args, kwargs)
        return Response(
            status=status.HTTP_200_OK,
            data={"success":True,}
        )

