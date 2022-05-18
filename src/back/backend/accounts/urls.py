from django.urls import path
from . import views

urlpatterns = [
    path("join", views.SignupView.as_view(), name="join"),
    path("login", views.LoginView.as_view(), name="login"),
    path("mypage", views.MypageView.as_view(), name="mypage"),
    path("feedback/<int:interview_id>/<int:question_n>", views.FeedbackView.as_view(), name="feedback"),
]
