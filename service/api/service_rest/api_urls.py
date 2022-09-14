from django.urls import path
from .api_views import api_list_technicians, api_show_technician, api_list_appointments, api_show_appointment

urlpatterns = [
    path( # list all technicians
        "technicians/",
        api_list_technicians,
        name="api_list_technicians",
    ),
    path( # show specific technician
        "technicians/<int:number>/",
        api_show_technician,
        name="api_show_technician",
    ),
    path( # list ALL appointments
        "appointments/",
        api_list_appointments,
        name="api_list_all_appointments",
    ),
    path( # list appointments by VIN
        "appointments/<str:vin>/",
        api_list_appointments,
        name="api_list_appointments",
    ),
    path( # show specific appointment
        "appointments/id/<int:pk>/",
        api_show_appointment,
        name="api_show_appointment",
    ),
]