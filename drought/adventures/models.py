import os

from django.db import models


class Map(models.Model):
    name = models.CharField(max_length=255)
    width = models.PositiveIntegerField()
    height = models.PositiveIntegerField()

    background = models.FileField(upload_to=os.path.join('maps', 'backgrounds'))


class MapItem(models.Model):
    map = models.ForeignKey(Map, related_name='map_items')
    location = models.ForeignKey('Location', related_name='map_items')

    top = models.IntegerField()
    left = models.IntegerField()
    width = models.PositiveIntegerField()
    height = models.PositiveIntegerField()

    image = models.FileField(
        upload_to=os.path.join('maps', 'items'),
        blank=True,
        null=True
    )


class Location(models.Model):
    DUNGEON = 0
    TYPES = (
        (DUNGEON, 'Dungeon'),
    )

    name = models.CharField(max_length=255)
    type = models.PositiveIntegerField(choices=TYPES)


class Adventure(models.Model):
    EVENT = 0
    TYPES = (
        (EVENT, 'Event'),
    )

    location = models.ForeignKey(Location, related_name='adventures')
    type = models.PositiveIntegerField(choices=TYPES)

    text = models.TextField(blank=True)
