from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, Sale


############
# Encoders #
############
class AutomobileVODetailEncoder(ModelEncoder):
  model = AutomobileVO
  properties = [
    "vin", 
    "import_href",
  ]

class SalesListEncoder(ModelEncoder):
  model = Sale
  properties = [
    "automobile",
    "sale_price",
  ]

class SalesDetailEncoder(ModelEncoder):
  model = Sale
  properties = [
    "automobile",
    "sales_person",
    "customer",
    "sale_price",
  ]

class CustomerDetailEncoder(ModelEncoder):
  model = Customer
  properties = [
    "name",
    "address",
    "phone_number",
  ]

class SalesPersonDetailEncoder(ModelEncoder):
  model = SalesPerson
  properties = [
    "name",
    "employee_number",
  ]


#################
# Sale REST API #
#################
@require_http_methods(["GET", "POST"])
def api_sales(request):
  if request.method == "GET":
    return JsonResponse({"Sales": "GET"})
  
  else:
    return JsonResponse({"Sales": "POST"})


@require_http_methods(["GET", "PUT", "DELETE"])
def api_sale(request):
  if request.method == "GET":
    return JsonResponse({"Sale": "GET"})

  elif request.method == "PUT":
    return JsonResponse({"Sale": "PUT"})

  else:
    return JsonResponse({"Sale": "DELETE"})


#####################
# Customer REST API #
#####################
@require_http_methods(["PUT"])
def api_customer(request):
  if request.method == "PUT":
    return JsonResponse({"Customer": "PUT"})


#########################
# Sales Person REST API #
#########################
@require_http_methods(["PUT"])
def api_sales_person(request):
  if request.method == "PUT":
    return JsonResponse({"Sales Person": "PUT"})

