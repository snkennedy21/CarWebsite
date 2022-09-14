from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Appointment, Technician

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "number",
    ]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "customer",
        "vin",
        "technician",
        "date",
        "time",
        "reason",
        "finished",
    ]

    encoders = {
        "technician": TechnicianDetailEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET": # lists all technicians
        print("TEST")
        technicians = Technician.objects.all()

        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianDetailEncoder,
        )

    elif request.method == "POST": # creates new technician
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
        except:
            return JsonResponse(
                {"message": "Could not create technician (is employee ID unique?)"},
                status=400,
            )
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_technician(request, number):
    if request.method == "GET": # gets specific technician
        try:
            technician = Technician.objects.get(number=number)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "employee ID number not found"},
                status=400,
            )
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request, vin=None):
    if request.method == "GET": # lists all appointments for given VIN
        if vin is not None:
            appointments = Appointment.objects.filter(vin=vin).order_by("date", "time")
        else:
            appointments = Appointment.objects.all().order_by("date", "time")
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentDetailEncoder,
        )
    elif request.method == "POST": # adds appointment for given VIN
        content = json.loads(request.body)
        content["vin"] = vin
        try: # looks for technician by name in content
            technician = Technician.objects.get(number=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician not found"},
                status=400,
            )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_appointment(request, pk):
    if request.method == "GET": # shows specific appointment
        try:
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    elif request.method == "PUT": # edits appointment
        content = json.loads(request.body)
        try: # first check whether pk in URL matches an appointment id
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )
        if "technician" in content: # handle changing technicians
            try:
                technician = Technician.objects.get(number=content["technician"])
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Technician does not exist"},
                    status=400,
                )
            content["technician"] = technician
        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    else: # handles appointment cancellation (DELETE)
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
