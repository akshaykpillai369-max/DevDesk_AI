from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    github_id = models.CharField(max_length=255, unique=True,)
    avatar_url = models.URLField()