from django.conf.urls import patterns, url

from drought.base import views


urlpatterns = patterns(
    '',

    # Home
    url(r'^$', views.index, name='drought.index'),
)
