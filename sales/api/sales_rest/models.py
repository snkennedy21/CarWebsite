from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
  import_href = models.CharField(max_length=200)
  vin = models.CharField(max_length=200, null=True)
  color = models.CharField(max_length=50, null=True)
  year = models.PositiveSmallIntegerField(null=True)
  is_sold = models.BooleanField(default=False, null=True)


class SalesPerson(models.Model):
  name = models.CharField(max_length=200)
  employee_number = models.CharField(max_length=200, unique=True)

class Customer(models.Model):
  name = models.CharField(max_length=200)
  address = models.CharField(max_length=200)
  phone_number = models.CharField(max_length=200)

class Sale(models.Model):
  automobile = models.ForeignKey(
    AutomobileVO,
    related_name="sales",
    on_delete=models.CASCADE
  )
  sales_person = models.ForeignKey(
    SalesPerson,
    related_name="sales",
    on_delete=models.CASCADE,
  )
  customer = models.ForeignKey(
    Customer,
    related_name="potential_customer",
    on_delete=models.CASCADE,
  )
  sale_price = models.PositiveBigIntegerField()

