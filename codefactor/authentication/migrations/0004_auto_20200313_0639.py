# Generated by Django 2.2.11 on 2020-03-13 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_remove_customuser_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='about_me',
            field=models.TextField(blank=True),
        ),
    ]