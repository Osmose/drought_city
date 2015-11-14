from rest_framework import serializers

from drought.adventures import models


class MapItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.MapItem
        fields = ('location', 'top', 'left', 'width', 'height', 'image')


class MapSerializer(serializers.HyperlinkedModelSerializer):
    map_items = MapItemSerializer(many=True)

    class Meta:
        model = models.Map
        fields = ('name', 'width', 'height', 'background', 'map_items')


class AdventureSerializer(serializers.HyperlinkedModelSerializer):
    type = serializers.SerializerMethodField()

    def get_type(self, adventure):
        return adventure.get_type_display()

    class Meta:
        model = models.Adventure
        fields = ('type', 'text')


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    adventures = AdventureSerializer(many=True)
    type = serializers.SerializerMethodField()

    def get_type(self, location):
        return location.get_type_display()

    class Meta:
        model = models.Location
        fields = ('name', 'type', 'adventures')
