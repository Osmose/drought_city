from django.contrib import admin

from drought.adventures import models


class MapItemInline(admin.StackedInline):
    model = models.MapItem
    fields = ('location', 'top', 'left', 'width', 'height', 'image')


@admin.register(models.Map)
class MapAdmin(admin.ModelAdmin):
    fieldsets = [
        [None, {
            'fields': ['name', 'background', 'width', 'height']
        }]
    ]

    inlines = [MapItemInline]


class AdventureInline(admin.StackedInline):
    model = models.Adventure
    fields = ['type', 'text']


@admin.register(models.Location)
class LocationAdmin(admin.ModelAdmin):
    fieldsets = [
        [None, {
            'fields': ['name', 'type']
        }]
    ]

    inlines = [AdventureInline]
