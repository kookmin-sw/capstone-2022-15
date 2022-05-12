from django.urls import path
from . import views
urlpatterns = [
    path("join", views.SignupView.as_view(), name="join"),
    path("login", views.LoginView.as_view(), name="login"),
    # path("logout", knox_views.LogoutView.as_view(), name="knox_logout"),
    # path("logout", views.LogoutView.as_view(), name="logout"),
]
