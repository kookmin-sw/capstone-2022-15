from django.db import models
from django.conf import settings
#from accounts.models import User

# Create your models here.
class Interview(models.Model):
    # 토큰 / 유저 아이디 / 몇번째 질문인지 / 인터뷰 날짜 / 분야 / 면접자 영상 저장 url
    #token = models.AutoField(db_column='token', primary_key=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    question_id = models.IntegerField(blank=True)
    interview_time = models.DateTimeField(auto_now_add=True, blank=True)
    field_id = models.IntegerField(blank=True)
    interviewee_url = models.URLField(blank=True)
    # interview_id