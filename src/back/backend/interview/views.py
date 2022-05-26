from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404

from .models import Interview, InterviewInfo

# s3
import boto3
from .file_manage import select
s3 = boto3.client('s3')

# interview preactice
class PracticeView(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    # interviewer url response
    def get(self, request, field_id, *args, **kwargs):
        # s3 presigned url
        bucket = 'virtual-interview-video'

        interviewer_id, question_id, key = select(field_id)  # select video randomly
        print(interviewer_id)
        if question_n == 0:
            interview = Interview()
            # 유저 정보 / 인터뷰 날짜 / 면접관 번호 / 분야
            interview.author = request.user
            interview.interviewer_id = interviewer_id
            interview.field_id = field_id
            interview.save()

        interviewer_url = s3.generate_presigned_url(ClientMethod='get_object', Params={'Bucket':bucket, 'Key':key})

        print(f'{request.user} interviewer url success')
        return Response(status=status.HTTP_200_OK, data={"success":True, 'interviewer_url':interviewer_url})

    # interviewee url response
    def post(self, request, *args, **kwargs):
        user_id = request.user
        question_n = request.data['question_n']
        field_id = request.data['field_id']

        interview_id = len(Interview.objects.filter(author_id=request.user))

        # s3 presigned url
        bucket = 'user-interview-video-bucket'
        key = 'user_id_{}/interview_id_{}/interview_video/interview_{}.mp4'.format(user_id, interview_id, question_n)
        interviewee_url = s3.generate_presigned_url(ClientMethod='put_object', Params={'Bucket':bucket, 'Key':key})


        # InterviewInfo db save
        # 유저 정보 / 인터뷰 번호 / 질문 번호 / 분야
        interviewInfo = InterviewInfo()
        interviewInfo.author = request.user
        #interviewInfo.interviewer_id =
        interviewInfo.interview_id = interview_id
        interviewInfo.question_n = question_n
        interviewInfo.field_id = field_id
        interviewInfo.save()


        print(f'{request.user} interviewee url success')
        return Response(
            status=status.HTTP_200_OK,
            data={"success":True, "interviewee_url":interviewee_url}
        )