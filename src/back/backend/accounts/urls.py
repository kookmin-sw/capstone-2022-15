from django.urls import path
#from rest_auth.views import LoginView, LogoutView
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', views.loginView, name='login'),
]