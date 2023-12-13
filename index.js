// Write your solution in this file!
var customerName = `bob`;

// f(x) converts customerName variable to upper cases  

function upperCaseCustomerName(){

    customerName  = customerName.toUpperCase();

    return customerName;
}

/*      setBestCustomer()
        it should:
    1.when called, declares a variable called bestCustomer in 
    global scope and assigns it to be 'not bob'


*/

var bestCustomer;
 function setBestCustomer(){

    bestCustomer = 'not bob'

    return bestCustomer;

    
}

function overwriteBestCustomer(){

    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = `initialValue`;


function changeLeastFavoriteCustomer(){

    leastFavoriteCustomer = `newValue`;

    return leastFavoriteCustomer
}

