# Generated by Django 5.0.3 on 2024-03-31 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Login', '0008_alter_profile_otp_alter_profile_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='uid',
            field=models.CharField(default='<function uuid4 at 0x0000020E24A640E0>', max_length=200),
        ),
    ]
