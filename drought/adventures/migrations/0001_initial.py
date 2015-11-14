# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Adventure',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.PositiveIntegerField(choices=[(0, b'Event')])),
                ('text', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.PositiveIntegerField(choices=[(0, b'Dungeon')])),
            ],
        ),
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('width', models.PositiveIntegerField()),
                ('height', models.PositiveIntegerField()),
                ('background', models.ImageField(upload_to=b'maps/backgrounds')),
            ],
        ),
        migrations.CreateModel(
            name='MapItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('top', models.IntegerField()),
                ('left', models.IntegerField()),
                ('width', models.PositiveIntegerField()),
                ('height', models.PositiveIntegerField()),
                ('image', models.ImageField(null=True, upload_to=b'maps/items', blank=True)),
                ('location', models.ForeignKey(related_name='map_items', to='adventures.Location')),
                ('map', models.ForeignKey(related_name='map_items', to='adventures.Map')),
            ],
        ),
        migrations.AddField(
            model_name='adventure',
            name='location',
            field=models.ForeignKey(to='adventures.Location'),
        ),
    ]
