# Generated by Django 5.0.3 on 2024-03-31 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(blank=True, max_length=100)),
                ('designation', models.CharField(blank=True, max_length=100)),
                ('description', models.CharField(blank=True, max_length=100)),
                ('skill', models.CharField(blank=True, max_length=100)),
                ('yoe', models.IntegerField()),
                ('salary', models.IntegerField()),
                ('mail', models.TextField(blank=True, max_length=100)),
            ],
        ),
    ]
