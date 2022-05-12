from django.urls import path
from . import views

urlpatterns = [
    path("preparation", views.PreparationView.as_view(), name="preparation"),
    path("practice", views.PracticeView.as_view(), name="practice"),

]