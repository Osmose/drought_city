# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adventures', '0003_location_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='background',
            field=models.FileField(upload_to=b'maps/backgrounds'),
        ),
        migrations.AlterField(
            model_name='mapitem',
            name='image',
            field=models.FileField(null=True, upload_to=b'maps/items', blank=True),
        ),
    ]
