# Generated by Django 4.2.4 on 2023-10-18 12:52

from django.db import migrations, models
import django_s3_storage.storage


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_alter_address_lat_alter_address_lng'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(null=True, storage=django_s3_storage.storage.S3Storage(aws_s3_bucket_name='evcharger-bucket-eren'), upload_to=''),
        ),
    ]