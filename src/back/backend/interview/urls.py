from django.urls import path
from . import views

urlpatterns = [
    #path("preparation", views.PreparationView.as_view(), name="preparation"),
    path("practice/<int:field_id>", views.PracticeView.as_view(), name="practice"),
    path('practice/save', views.PracticeView.as_view())


]