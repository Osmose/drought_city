from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),

    url(r'', include('drought.adventures.urls')),

    # Must do this last because it has a catchall.
    url(r'', include('drought.base.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
