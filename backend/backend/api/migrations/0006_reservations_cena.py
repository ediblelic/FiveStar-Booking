# Generated by Django 4.0.5 on 2022-08-01 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_hotels_checkin_remove_hotels_checkout_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservations',
            name='cena',
            field=models.SmallIntegerField(null=True),
        ),
    ]
