import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

# Import models from sales_rest, here.
# from sales_rest.models import Something

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=automobile["href"],
            defaults={"vin": automobile["vin"]}
        )

def poll():
    while True:
        print('Sales poller polling for data')
        get_automobiles()
        time.sleep(10)


if __name__ == "__main__":
    poll()
