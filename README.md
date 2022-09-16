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

Explain your models and integration with the inventory
microservice, here.
