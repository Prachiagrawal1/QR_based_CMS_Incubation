# Generated by Django 2.1.7 on 2019-02-17 05:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cafe', '0004_auto_20190217_0503'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order_items',
            name='itemid',
        ),
    ]