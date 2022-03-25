from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.serializers import UserSerializer

from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login # login함수와 이름이 겹쳐서
from django.contrib.auth.forms import AuthenticationForm


class SignupView(APIView):
    http_method_names = ['post']

    permission_classes = (permissions.AllowAny,) # 회원가입은 인증 필요없다

    def post(self, *args, **kwargs):
        serializer = UserSerializer(data=self.request.data)
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data={'errors': serializer.errors})

def loginView(request) :
    if request.method=='POST' :
        # data는 forms.form 두번쨰 인자이므로 data = 은 생략 가능
        form = AuthenticationForm(request, data = request.POST) # 먼저 request 인자를 받아야함
        if form.is_valid() :
            # 세션 CREATE/ form.get_user는 User 객체 반환
            auth_login(request, form.get_user())
            return redirect('articles:index') # 로그인 성공시 메인페이지 이동
    else :
        form = AuthenticationForm()

    context = {
        'form' : form,
    }
    return render(request, 'accounts/login.html', context)
