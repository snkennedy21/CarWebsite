from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin

class Technician(models.Model):
    name = models.CharField(max_length=200)
    number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return f'{self.name} - {self.number}'

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"number": self.number})

class Appointment(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    customer = models.CharField(max_length=200)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT,
        null=True,
    )

    date = models.DateField()
    time = models.TimeField()

    reason = models.CharField(max_length=200)

    finished = models.BooleanField()

    def __str__(self):
        return f"Appointment for {self.customer} on {self.date} - VIN: {self.automobile}"
    
    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk}) # check this