from rest_framework import routers
from .views import ChargerViewSet

router = routers.DefaultRouter()
router.register(r'charger', ChargerViewSet, basename='charger')

urlpatterns = router.urls
