from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers
from django_rest_passwordreset.views import ResetPasswordValidateTokenViewSet, ResetPasswordConfirmViewSet, ResetPasswordRequestTokenViewSet
from .views import UserViewSet, AuthViewSet
from .views import *

router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='user')  # Comment this out temporarily
router.register(r'auth', AuthViewSet, basename='auth')
router.register(r'auth/passwordreset/validate_token', ResetPasswordValidateTokenViewSet, basename='reset-password-validate')
router.register(r'auth/passwordreset/confirm', ResetPasswordConfirmViewSet, basename='reset-password-confirm'),
router.register(r'auth/passwordreset/request', ResetPasswordRequestTokenViewSet, basename='reset-password-request')
urlpatterns = router.urls
urlpatterns += [
    path(r'auth/passwordreset/confirm', TemplateView.as_view(template_name='password_reset.html'), name='passwordreset_confirm')
]

