from django.urls import path
import knox.views as knox_views
from . import views
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
)

urlpatterns = [
    path("signup", views.SignupView.as_view(), name="signup"),
    path("login", views.LoginView.as_view(), name="login"),
    path("token/", obtain_jwt_token),
    path("token/refresh/", refresh_jwt_token),
    path("token/verify/", verify_jwt_token)
    # path("logout", knox_views.LogoutView.as_view(), name="knox_logout"),
    # path("logout", views.LogoutView.as_view(), name="logout"),
]
