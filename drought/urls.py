from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'', include('drought.base.urls')),

    url(r'^admin/', include(admin.site.urls)),
]
