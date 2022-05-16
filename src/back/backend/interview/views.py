from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404

from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model

from .serializers import InterviewSerializer

# s3
import boto3
from .file_manage import select
s3 = boto3.client('s3')

User = get_user_model()

# interview preactice
class PracticeView(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    # interviewer url response
    def get(self, request, field_id, *args, **kwargs):
        print(request.user, field_id)

        # s3 presigned url
        bucket = 'virtual-interview-video'
        question_id, key = select(field_id)
        interviewer_url = s3.generate_presigned_url(ClientMethod='get_object', Params={'Bucket':bucket, 'Key':key})
        print(interviewer_url)

        return Response(status=status.HTTP_200_OK, data={"success":True, 'interviewer_url':interviewer_url})

    # interviewee url response
    def post(self, request, *args, **kwargs):
        print(request.user)
        # 토큰 / 유저 아이디 / 몇번째 질문인지 / 인터뷰 날짜 / 분야 / 면접자 영상 저장 url
        user_id = request.user
        interview_id = 1
        question_n = request.data['question_n']
        field_id = request.data['field_id']
        interview_id = 1
        print(user_id, field_id, question_n)
        # s3 presigned url
        bucket = 'user-interview-video-bucket'
        key = 'user_id_{}/interview_id_{}/interview_video/interview_{}.mp4'.format(user_id, interview_id, question_n)
        interviewee_url = s3.generate_presigned_url(ClientMethod='put_object', Params={'Bucket':bucket, 'Key':key})
        print(interviewee_url)
        #interviewee_url = 'http://'

        # json error
        #data = {'user':request.user}

        return Response(
            status=status.HTTP_200_OK,
            data={"success":True, "interviewee_url":interviewee_url}
        )


