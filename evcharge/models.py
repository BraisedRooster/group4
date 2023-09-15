from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Address(models.Model):
    street_address = models.CharField(max_length=20)
    lat = models.DecimalField(decimal_places=5, max_digits=5, null=True)
    lng = models.DecimalField(decimal_places=5, max_digits=5, null=True)
    suburb = models.CharField(max_length=20)
    post_code = models.CharField(max_length=7)
    country = models.CharField(max_length=12)


class Role(models.Model):
    USER = 'USRR'
    RENTER = 'RNTR'
    ADMIN = 'ADMN'
    INSPECTOR = 'INSP'
    ACCOUNT = 'ACNT'
    role_choices = [
        (USER, 'USRR'),
        (RENTER, 'RNTR'),
        (ADMIN, 'ADMN'),
        (INSPECTOR, 'INSP'),
        (ACCOUNT, 'ACNT')
    ]
    role = models.CharField(max_length=4, choices=role_choices, default=USER)


class UserProfile(AbstractUser):
    # address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)
    image = models.CharField(max_length=100, null=True)
    role = models.ForeignKey(
        Role, on_delete=models.CASCADE, null=True)
    address = models.OneToOneField(
        Address, on_delete=models.CASCADE, verbose_name='address', null=True)


class ChargerType(models.Model):
    name = models.CharField(max_length=10)
    image = models.CharField(max_length=50)
    brand = models.CharField(max_length=50)
    power = models.DecimalField(decimal_places=5, max_digits=5)
    port_type = models.CharField(max_length=20)
    amp = models.DecimalField(decimal_places=5, max_digits=5)
    warranty = models.IntegerField()


class Chager(models.Model):
    name = models.CharField(max_length=15, null=True)
    address = models.OneToOneField(
        Address, on_delete=models.CASCADE, verbose_name='location')
    renter = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, null=True)
    charer_type = models.OneToOneField(
        ChargerType, on_delete=models.CASCADE, verbose_name='charger_type')
    number_of_stars = models.IntegerField()
    number_of_rating = models.DecimalField(max_digits=3, decimal_places=1)


class Comment(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True)
    contents = models.CharField(max_length=200, null=True)
    charger = models.ForeignKey(Chager, on_delete=models.CASCADE, null=True)
    parent_comment = models.ForeignKey(
        'self', null=True, blank=True, on_delete=models.CASCADE)


class Chat(models.Model):
    sender = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='%(class)s_sender', verbose_name='sender')
    receiver = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='%(class)s_receiver', verbose_name='receiver')
    message = models.CharField(max_length=10000)


class Payment(models.Model):
    from_user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='%(class)s_sender', verbose_name='sender')
    to_user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='%(class)s_receiver', verbose_name='receiver')


class ChargeActivity(models.Model):
    state = models.CharField(max_length=5)
    start_time = models.DateTimeField(verbose_name='start_time', null=True)
    end_time = models.DateTimeField(verbose_name='end_time', null=True)
    duration = models.DurationField(null=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    charger = models.ForeignKey(Chager, on_delete=models.CASCADE)


class Issue(models.Model):
    issuer = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    related_activity = models.ForeignKey(
        ChargeActivity, on_delete=models.CASCADE)
    description = models.CharField(max_length=500, null=True)
    status = models.CharField(max_length=5, null=True)
