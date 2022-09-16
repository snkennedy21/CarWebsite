# CarCar

Team:

- Person 1 - Devin W (Service)
- Person 2 - Sean K (Sales)

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

### Sales microservice

#### Models

    The Sales model includes an is_sold property to enable the broswer to distinguish between inventory items that have been sold and inventory items that have not been sold. This ensures that when a vehicle is sold, it no longer shows up in the list of options for cars to be sold.

    AutomobileVO: AutomobileVO model comes from a poll that was set up between the sales microservice and the inventory microservice

#### REST APIs

    api_sales (GET, POST): Gets a list of sales or creates a new sale

    api_customer (GET, POST): Gets a list of customers or creates a new customer

    api_sales_person (GET, POST): Gets a list of salespeople or creates a new salesperson

#### Inventory Integration

    Making the sales microservice work with the inventory microservice and the service microservice required a few steps

    1) the sales microservice was responsible for telling the service microservice which cars had been sold or not. By using the is_sold property in the Automobiles model, we were able to keep track of whether or not a car being serviced would receive VIP treatment.
    2) A poll was set up to transfer the relevant Automobile information to the sales microservice in order for the sales microservice to have access to which particular car in the inventory was being sold or not.
