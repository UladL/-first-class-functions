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

/*
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
        }
    }else if (passenger.ticket === "bussness"){
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
*/


 /*---------------SORT, SORT, SORT ,SORT-------------------------*/
 var products = [ 
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(colaA, colaB){
    if (colaA.sold > colaB.sold){
        return 1;
    }else if(colaA.sold === colaB.sold){
        return 0;
    }else{
        return -1;
    }
}
function printProducts(products){
    for (var i = 0; i < products.length; i++){
        console.log("Name: " + products[i].name + 
        ", Calories: " + products[i].calories +
        ", Color: " + products[i].color +
        ", Sold: " + products[i].sold);
    }
}

function compareCalories(colaA, colaB){
    if (colaA.calories > colaB.calories){
        return 1;
    }else if(colaA.calories === colaB.calories){
        return 0;
    }else{
        return -1;
    }
}

function compareNames(colaA, colaB){
    if (colaA.name > colaB.name){
        return 1;
    }else if(colaA.name === colaB.name){
        return 0;
    }else{
        return -1;
    }
}


function compareColor(colaA, colaB){
    if (colaA.color > colaB.color){
        return 1;
    }else if(colaA.color === colaB.color){
        return 0;
    }else{
        return -1;
    }
}


products.sort(compareSold);
console.log("Amount Sold:")
printProducts(products);
products.sort(compareCalories)
console.log("Amoung of calories:")
printProducts(products)
products.sort(compareNames)
console.log("name:")
printProducts(products)
products.sort(compareColor)
console.log("Color:")
printProducts(products)