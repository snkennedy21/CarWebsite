from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, Sale


#######################
# Automobile Encoders #
#######################
class AutomobileVODetailEncoder(ModelEncoder):
  model = AutomobileVO
  properties = [
    "vin", 
    "import_href",
  ]


##################
# Sales Encoders #
##################
class SalesListEncoder(ModelEncoder):
  model = Sale
  properties = [
    "automobile",
    "sale_price",
  ]

  encoders = {
    "automobile": AutomobileVODetailEncoder(),
  }

class SaleDetailEncoder(ModelEncoder):
  model = Sale
  properties = [
    "automobile",
    "sales_person",
    "customer",
    "sale_price",
    "id",
  ]

  def get_extra_data(self, o):
    return {
      "sales_person": o.sales_person.name,
      "customer": o.customer.name
    }

  encoders = {
    "automobile": AutomobileVODetailEncoder(),
  }


#####################
# Customer Encoders #
#####################
class CustomerDetailEncoder(ModelEncoder):
  model = Customer
  properties = [
    "name",
    "address",
    "phone_number",
    "id",
  ]

class CustomersListencoder(ModelEncoder):
  model = Customer
  properties = [
    "name",
    "id",
  ]


#########################
# Sales People Encoders #
#########################
class SalesPersonDetailEncoder(ModelEncoder):
  model = SalesPerson
  properties = [
    "name",
    "employee_number",
    "id",
  ]

class SalesPeopleListEncoder(ModelEncoder):
  model = SalesPerson
  properties = [
    "name",
    "employee_number",
    "id",
  ]


#################
# Sale REST API #
#################
@require_http_methods(["GET", "POST"])
def api_sales(request, automobile_vo_id=None, employee_number=None,):
  if request.method == "GET":
    if automobile_vo_id is not None:
      automobile_href = f'/api/automobiles/{automobile_vo_id}/'
      automobile = AutomobileVO.objects.get(import_href=automobile_href)
      sales = Sale.objects.filter(automobile=automobile)
    elif employee_number is not None:
      sales_person = SalesPerson.objects.get(employee_number=employee_number)
      sales = Sale.objects.filter(sales_person=sales_person)
    else:
      sales = Sale.objects.all()

    return JsonResponse(
      sales,
      encoder=SaleDetailEncoder,
      safe=False,
    )
  else:
    content = json.loads(request.body)
    automobile_href = f'/api/automobiles/{automobile_vo_id}/'
    automobile = AutomobileVO.objects.get(import_href=automobile_href)
    content["automobile"] = automobile
    content["sales_person"] = SalesPerson.objects.get(id=content["sales_person"])
    content["customer"] = Customer.objects.get(id=content["customer"])

    sale = Sale.objects.create(**content)

    return JsonResponse(
      sale,
      encoder=SaleDetailEncoder,
      safe=False,
    )


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
@require_http_methods(["GET", "POST"])
def api_customer(request):
  if request.method == "GET":
    customers = Customer.objects.all()
    return JsonResponse(
      customers,
      encoder=CustomersListencoder,
      safe=False,
    )
  else:
    content = json.loads(request.body)
    customer = Customer.objects.create(**content)

    return JsonResponse(
      customer,
      encoder=CustomerDetailEncoder,
      safe=False,
    )



#########################
# Sales Person REST API #
#########################
@require_http_methods(["GET", "POST"])
def api_sales_person(request):
  if request.method == "GET":
    sales_people = SalesPerson.objects.all()
    return JsonResponse(
      sales_people,
      encoder=SalesPeopleListEncoder,
      safe=False,
    )
  else:
    content = json.loads(request.body)
    sales_person = SalesPerson.objects.create(**content)

    return JsonResponse(
      sales_person,
      encoder=SalesPersonDetailEncoder,
      safe=False,
    )

