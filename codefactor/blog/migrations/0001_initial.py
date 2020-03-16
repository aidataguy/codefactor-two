# Generated by Django 3.0.3 on 2020-02-28 12:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import markdownx.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
                ('slug_title', models.SlugField(max_length=5, unique=True)),
                ('location', models.CharField(blank=True, max_length=100)),
                ('status', models.BooleanField(default=True)),
                ('content', markdownx.models.MarkdownxField(help_text=True)),
                ('archived', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('author_image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Avatar', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', markdownx.models.MarkdownxField()),
                ('blog_title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.Blog')),
                ('comment_user_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
