# Generated by Django 2.2.11 on 2020-03-13 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='slug_title',
            field=models.SlugField(),
        ),
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.TextField(unique=True),
        ),
    ]