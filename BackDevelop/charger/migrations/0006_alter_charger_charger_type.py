# Generated by Django 4.2.4 on 2023-10-04 02:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('charger', '0005_rename_charer_type_charger_charger_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='charger',
            name='charger_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='charger.chargertype', verbose_name='charger_type'),
        ),
    ]
