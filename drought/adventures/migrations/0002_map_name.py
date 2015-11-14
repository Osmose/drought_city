# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adventures', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='map',
            name='name',
            field=models.CharField(default='Map', max_length=255),
            preserve_default=False,
        ),
    ]
