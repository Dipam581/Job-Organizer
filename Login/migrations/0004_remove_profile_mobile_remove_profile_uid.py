# Generated by Django 5.0.3 on 2024-03-10 10:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0003_alter_profile_uid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='mobile',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='uid',
        ),
    ]
