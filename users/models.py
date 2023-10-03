from django.db import models
from django.contrib.auth.models import AbstractUser


class Role(models.Model):
    role = models.CharField(max_length=10)


class Address(models.Model):
    street_address = models.CharField(max_length=20)
    lat = models.DecimalField(decimal_places=5, max_digits=10, null=True)
    lng = models.DecimalField(decimal_places=5, max_digits=10, null=True)
    suburb = models.CharField(max_length=20)
    post_code = models.CharField(max_length=7)
    country = models.CharField(max_length=12)


class UserProfile(AbstractUser):
    # address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)
    image = models.CharField(max_length=100, null=True)
    address = models.OneToOneField(
        Address, on_delete=models.CASCADE, verbose_name='address', null=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)
