# Generated by Django 4.0.3 on 2022-09-13 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_rest', '0002_automobile_is_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobile',
            name='is_sold',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
