from rest_framework import serializers
from django.contrib.auth import get_user_model
from interview.models import Interview

class InterviewSerializer(serializers.ModelSerializer):
    author = get_user_model()
    class Meta:
        model = Interview
        field = '__all__'

