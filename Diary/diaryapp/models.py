from django.db import models
from django.contrib.auth.models import User

class Diary(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(User,related_name='diaries',on_delete=models.CASCADE, null=True)
