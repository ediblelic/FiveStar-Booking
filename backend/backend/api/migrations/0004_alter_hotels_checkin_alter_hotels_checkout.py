# Generated by Django 4.0.5 on 2022-06-21 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_hotels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotels',
            name='checkin',
            field=models.DateField(default=True),
        ),
        migrations.AlterField(
            model_name='hotels',
            name='checkout',
            field=models.DateField(default=True),
        ),
    ]
