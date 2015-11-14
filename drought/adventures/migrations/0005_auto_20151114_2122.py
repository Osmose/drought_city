# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adventures', '0004_auto_20151114_2118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adventure',
            name='location',
            field=models.ForeignKey(related_name='adventures', to='adventures.Location'),
        ),
    ]
