import io

from django.contrib.auth import get_user_model, authenticate, login

from rest_framework import permissions, authentication

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import CreateUserSerializer, LoginUserSerializer
from rest_framework.authtoken.models import Token

from interview.models import Interview
from django.core import serializers
import numpy as np

# s3
import boto3
from .file_manage import select
s3 = boto3.resource('s3')
s3_interviewee = boto3.client('s3')

INTERVAL = 30

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
            print(f'{user} signup success')
            return Response(
                status=status.HTTP_201_CREATED,
                data={
                    "success": True,
                    "token": token.key,
                },
            )
        # already id exists etc..
        print(f'error: {serializer.errors}')
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
            print("user id/pw required")
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={"isLogin": False, "error": "user id/password required"},
            )
        user = User.objects.filter(user_id=user_id).first()
        # not founded user
        if user is None:
            print("user is not founded")
            return Response(
                {"isLogin": False, "error": "user is not founded"}, status=status.HTTP_404_NOT_FOUND
            )
        # wrong password
        if not user.check_password(password):
            print("wrong password")
            return Response(
                {"isLogin": False, "error": "wrong password"}, status=status.HTTP_400_BAD_REQUEST
            )
        # success
        token = Token.objects.get(user=user)  # token get
        print("success login", user_id)
        return Response(
            status=status.HTTP_200_OK,
            data={"isLogin": True, "user_id": user_id, "token":token.key},
        )


class MypageView(APIView):
    permission_class=[
        permissions.IsAuthenticated
    ]

    def get(self, request, *args, **kwargs):
        query = Interview.objects.filter(author_id=request.user)
        query_data = serializers.serialize('json', query)
        print(f"{request.user}: mypage success")
        return HttpResponse(query_data, content_type="text/json-comment-filtered")


class FeedbackView(APIView):
    permission_class=[
        permissions.IsAuthenticated
    ]

    def get(self, request, interview_id, question_n, *args, **kwargs):
        data = []

        # s3 presigned url
        bucket = 'user-feedback-bucket'

        key_list = select(request.user, interview_id, question_n)
        print(key_list)
        #key_list = select('haha', 2, 0)

        for (i, key) in zip(range(4), key_list):
            obj = s3.Object(bucket, key)
            body = obj.get()['Body'].read()

            # iris movement
            if i == 0:
                with io.BytesIO(body) as f:
                    f.seek(0)
                    XY, center = np.load(f).values()
                    INTERVAL = int(XY[0][-1] / len(XY[0]))

                d_ = []
                for j in range(0, len(XY[0]), INTERVAL):
                    d = dict()
                    d['name'] = np.round(XY[0][j], 1)
                    d['x'] = XY[0][j]
                    d['y'] = XY[1][j]
                    d_.append(d)
                data.append(d_)
                print(center)

            # volume interview
            if i == 1:
                with io.BytesIO(body) as f:
                    f.seek(0)
                    X, Y = np.load(f).values()

                d_ = []
                for j in range(0, len(X), INTERVAL):
                    d = dict()
                    d['name'] = np.round(X[j], 1)
                    d['x'] = X[j]
                    d['y'] = Y[j]
                    d_.append(d)
                data.append(d_)

                # for face movement
                time_min = X[0]
                time_max = int(len(X) // INTERVAL * INTERVAL)

            # face movement
            if i == 2:
                with io.BytesIO(body) as f:
                    f.seek(0)
                    XY = np.load(f)['data']

                d_ = []
                time = np.linspace(time_min, time_max, len(XY))
                for j in range(0, len(XY), INTERVAL):
                    d = dict()
                    d['x'] = time[j]
                    d['y'] = XY[j]
                    d_.append(d)
                data.append(d_)
            
            # stt interview
            if i == 3:
                data.append(body)
                
        # presigned url 추가
        bucket = 'user-interview-video-bucket'
        key = 'user_id_{}/interview_id_{}/interview_video/interview_{}.mp4'.format(request.user, interview_id, question_n)
        interviewee_url = s3_interviewee.generate_presigned_url(ClientMethod='get_object',
                                                                Params={'Bucket': bucket, 'Key': key})

        return Response(status=status.HTTP_200_OK, data={
                                "iris_movement": data[0],
                                "volume_interview": data[1],
                                "face_movement": data[2],
                                "stt_interview": data[3],
                                "interviewee_url": interviewee_url
        })



