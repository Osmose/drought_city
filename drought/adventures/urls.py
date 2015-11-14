from django.conf.urls import include, patterns, url

from rest_framework import routers

from drought.adventures import views


router = routers.DefaultRouter()
router.register('maps', views.MapViewSet)
router.register('locations', views.LocationViewSet)


urlpatterns = patterns(
    '',

    # API
    url(r'^api/', include(router.urls)),
)
