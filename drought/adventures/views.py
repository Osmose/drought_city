from rest_framework import viewsets

from drought.adventures.models import Location, Map
from drought.adventures.serializers import LocationSerializer, MapSerializer


class MapViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Map.objects.all()
    serializer_class = MapSerializer


class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
