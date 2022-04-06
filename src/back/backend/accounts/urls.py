from django.urls import path

# from rest_auth.views import LoginView, LogoutView
from . import views

urlpatterns = [
    path("signup", views.SignupView.as_view(), name="signup"),
    path("login", views.LoginView.as_view(), name="login"),
    # path("logout", views.LogoutView.as_view(), name="logout)
]
