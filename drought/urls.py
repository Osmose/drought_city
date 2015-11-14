from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    # Must do this last because it has a catchall.
    url(r'', include('drought.base.urls')),
]
