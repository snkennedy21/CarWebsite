from django.urls import path
from .api_views import api_sales, api_customer, api_sale, api_sales_person

urlpatterns = [
  path("sales/", api_sales, name="api_list_all_sales"),
  path("automobiles/<int:automobile_vo_id>/sales/", api_sales, name="api_list_sales"),
  path("sales/<int:pk>", api_sale, name="api_show_sale"),
  path('customer/', api_customer, name="api_create_customer"),
  path('sales-person/', api_sales_person, name="api_create_sales_person"),
]