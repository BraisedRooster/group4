from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Address(models.Model):
    street_address = models.CharField(max_length=20)
    suburb = models.CharField(max_length=20)
    post_code = models.CharField(max_length=7)
    country = models.CharField(max_length=12)


class UserProfile(AbstractUser):
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)
