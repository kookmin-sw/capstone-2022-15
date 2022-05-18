from django.urls import path
from . import views

urlpatterns = [
    #path("mypage", views.MypageView.as_view(), name="mypage"),
    path("feedback", views.FeedbackView.as_view(), name="feedback"),
]