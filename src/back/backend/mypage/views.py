from django.shortcuts import render

from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

# Create your views here.
class MyapageView(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get(self, request, *args, **kwargs):

        return Response(status=status.HTTP_200_OK,
                        data={"success":True,
                              })

class FeedbackView(APIView):
    def post(self, request, *args, **kwargs):

        return Response(status=status.HTTP_200_OK,
                        data={"success":True,
                              })
