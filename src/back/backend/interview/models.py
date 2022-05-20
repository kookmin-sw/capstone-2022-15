from django.db import models
from django.conf import settings
#from accounts.models import User

# Create your models here.
class Interview(models.Model):
    # 유저 정보 / 인터뷰 번호 / #질문 번호 / 인터뷰 날짜 / #분야
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, help_text="유저 정보")
    #interview_id = models.IntegerField(help_text="인터뷰 번호")
    #question_n = models.CharField(max_length=2, help_text="질문 번호")
    interview_date = models.DateTimeField(auto_now_add=True, help_text="인터뷰 날짜")
    field_id = models.IntegerField(help_text="분야")

class InterviewInfo(models.Model):
    # 유저 정보 / 인터뷰 번호 / 질문 번호 / 분야
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, help_text="유저 정보")
    interview_id = models.IntegerField(help_text="인터뷰 번호")
    question_n = models.CharField(max_length=2, help_text="질문 번호")
    field_id = models.IntegerField(help_text="분야")