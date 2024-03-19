from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.
#KXR6NU8M2RSEG2F9XPF3V1BJ

class Profile(models.Model):
    user = models.OneToOneField(User ,on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20,default=0)
    otp=models.CharField(max_length=100,default=-1)
    uid=models.CharField(default=f'{uuid.uuid4}',max_length=200)
    
    