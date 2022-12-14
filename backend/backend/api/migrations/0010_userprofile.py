# Generated by Django 4.0.5 on 2022-08-25 15:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0009_alter_reservations_checkin_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=200, null=True, unique=True)),
                ('profile_pic', models.ImageField(blank=True, default='default.png', null=True, upload_to='profile_images')),
                ('bio', models.CharField(blank=True, max_length=100, null=True)),
                ('client', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
