from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, AuthViewSet
# from .views import UserCreateView, UserByIdView, UserListView
router = routers.DefaultRouter()
router.register(r'', UserViewSet, basename='user')
router.register(r'auth', AuthViewSet, basename='auth')
urlpatterns = router.urls
