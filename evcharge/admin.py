from django.contrib import admin
from .models import Address, UserProfile, Role, Chager, ChargeActivity, ChargerType, Chat, Comment, Issue, Payment
# Register your models here.
admin.site.register(Address)
admin.site.register(UserProfile)
admin.site.register(Role)
admin.site.register(Chager)
admin.site.register(ChargeActivity)
admin.site.register(ChargerType)
admin.site.register(Chat)
admin.site.register(Comment)
admin.site.register(Issue)
admin.site.register(Payment)
