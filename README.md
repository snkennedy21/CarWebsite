# CarCar

                                  _________
                           _.--""'-----,   `"--.._
                        .-''   _/_      ; .'"----,`-,
                      .'      :___:     ; :      ;;`.`.
                     .      _.- _.-    .' :      ::  `..
                  __;..----------------' :: ___  ::   ;;
             .--"". '           ___.....`:=(___)-' :--'`.
           .'   .'         .--''__       :       ==:    ;
       .--/    /        .'.''     ``-,   :         :   '`-.
    ."', :    /       .'-`\\       .--.\ :         :  ,   _\
   ;   ; |   ;       /:'  ;;      /__  \\:         :  :  /_\\
   |\_/  |   |      / \__//      /"--\\ \:         :  : ;|`\|
   : "  /\__/\____//   """      /     \\ :         :  : :|'||
 ["""""""""--------........._  /      || ;      __.:--' :|//|
  "------....______         ].'|      // |--"""'__...-'`\ \//
    `| CARCAR  |__;_...--'": :  \    //  |---"""      \_ \_/
      """""""""'            \ \  \_.//  /
        `---'                \ \_     _'
                              `--'---'  


Team:

* Person 1 - Devin W (Service)
* Person 2 - Sean K (Sales)

## Design

### Service microservice

Explain your models and integration with the inventory
microservice, here.

#### Models

    The Technician model contains attributes for the employee's name and ID called "number". Because no arithmetic is done with "number", I used a CharField to store the ID as a string.

    The Appointment model contains attributes for the VIN, customer name, a ForeignKey to the Technician responsible for the service, the service date & time, the reason for service, and a BooleanField for whether the appointment has been finished. Because a customer need not have bought a car from our dealership, I made the VIN a CharField rather than use a ForeignKey to link it to the AutomobileVO objects obtained from the Inventory microservice.

#### Inventory Integration

    In order to communicate with the Inventory microservice, I implemented an Automobile Value Object containing the "import_href" and "vin" attributes. I devised a poller (service/poll/poller.py) which would update the Service microservice container with any new vehicles added to inventory as AutomobileVO objects.
    
    The Service microservice only needs the VINs for these vehicles in order to confirm whether a service appointment VIN is that of a car that was once sold by us. To that end, we added an "is_sold" boolean attribute to the Automobile model in Inventory that gets flipped from False to True whenever that instance of Automobile is sold.

### Sales microservice

#### Models

    The Sales model includes an is_sold property to enable the broswer to distinguish between inventory items that have been sold and inventory items that have not been sold. This ensures that when a vehicle is sold, it no longer shows up in the list of options for cars to be sold.

    AutomobileVO: AutomobileVO model comes from a poll that was set up between the sales microservice and the inventory microservice

#### REST APIs

    api_sales (GET, POST): Gets a list of sales or creates a new sale

    api_customer (GET, POST): Gets a list of customers or creates a new customer

    api_sales_person (GET, POST): Gets a list of salespeople or creates a new salesperson

#### Inventory Integration
