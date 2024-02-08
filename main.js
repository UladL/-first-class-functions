var passengers = [
    {name: "Jane Doloop", paid: true, ticket: "coach"},
    {name: "Dr.Evel", paid: true, ticket: "firstclass"},
    {name: "Sue Propertly", paid: false, ticket: "bussness"},
    {name: "John Funcall", paid: true, ticket: "coach"}
];
/*
function processPassengers(passengers, testFunction){
    for(var i = 0; i < passengers.length; i++){
        if (testFunction(passengers[i])){
            return false;
        }
    } 
    return true;
}
function checkNoFlyList(passenger){
    return (passenger.name === "Dr.Evel");
}
function checkNotPaid(passenger){
    return (!passenger.paid);
}
var allCanFly = processPassengers(passengers,checkNoFlyList);
    if (!allCanFly){
        console.log("The plance cant take off: we have a passenger on the no fly list.")
    }
var allPaid = processPassengers(passengers,checkNotPaid);
    if (!allPaid){
        console.log("The plane ant take off not everyone has paid")
    }
    function printPassenger(passenger) {
        for(var i = 0; i < passengers.length; i++){
           if(passengers[i].paid === true){
            console.log(passengers[i].name + " has paid")
           }else{
            console.log(passengers[i].name + " has not paid")
           }
        }
    }
    processPassengers(passengers, printPassenger);
 */   


function serverPassengers(passengers){
    for (var i = 0; i < passengers.length; i++){
        serveCustomer(passengers[i])
    }
}

function createFoodOrder(passenger){
    var orderFunction2
    if (passenger.ticket === "firstclass"){
        orderFunction2 = function(){
        alert("Would you chicken or bbq?")
        }
    }else if (passenger.ticket === "bussness"){
            orderFunction2 = function(){
                alert("Would you like pasta or soup?")
        }
    }else{
        orderFunction2 = function(){
            alert("Nuts or hot lunch?")
        
        }
    }
    return orderFunction2
}

    function createDrinkOrder(passenger){
        var orderFunction
        if (passenger.ticket === "firstclass"){
            orderFunction = function(){
            alert("Would you like ocktail ot wine?")
            }}
        
            else if (passenger.ticket === "bussness"){
                orderFunction = function(){
                    alert("Would you like premuim wine or anything else?")
            }
        }else{
            orderFunction = function(){
                alert("Water of cola?")
            
            }
        }
        return orderFunction
    }

    function serveCustomer(passenger){
       var getDrinkOrderFunction = createDrinkOrder(passenger)
       var getFoodOrderFunction = createFoodOrder(passenger)
        getDrinkOrderFunction();
        getFoodOrderFunction();
    }
    serverPassengers(passengers)