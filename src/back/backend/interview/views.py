from django.shortcuts import render
from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class PreparationView(APIView):
    # 로그인했을 경우만 접근 가능하게 하는 거로 수정 필요
    permission_classes = [
        #permissions.AllowAny,
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

