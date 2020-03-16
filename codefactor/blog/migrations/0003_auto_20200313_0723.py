# Generated by Django 2.2.11 on 2020-03-13 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20200313_0521'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='main_image',
            field=models.ImageField(default='images/big.png', upload_to='blog_images'),
        ),
        migrations.AddField(
            model_name='blog',
            name='thumbnail_image',
            field=models.ImageField(default='images/dummy.png', upload_to='blog_thumb_images'),
        ),
    ]