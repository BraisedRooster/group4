# Generated by Django 4.2.4 on 2023-10-03 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='lat',
            field=models.DecimalField(decimal_places=5, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='address',
            name='lng',
            field=models.DecimalField(decimal_places=5, max_digits=10, null=True),
        ),
    ]