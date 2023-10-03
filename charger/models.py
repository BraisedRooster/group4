from django.db import models
from users.models import Address, UserProfile


class ChargerType(models.Model):
    name = models.CharField(max_length=10)
    image = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    power = models.DecimalField(decimal_places=5, max_digits=5)
    port_type = models.CharField(max_length=20)
    amp = models.DecimalField(decimal_places=5, max_digits=5)
    warranty = models.IntegerField()


class Charger(models.Model):
    name = models.CharField(max_length=15, null=True)
    address = models.OneToOneField(
        Address, on_delete=models.CASCADE, verbose_name='location')
    renter = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, null=True)
    charer_type = models.OneToOneField(
        ChargerType, on_delete=models.CASCADE, verbose_name='charger_type')
    number_of_stars = models.IntegerField()
    number_of_rating = models.DecimalField(max_digits=3, decimal_places=1)
