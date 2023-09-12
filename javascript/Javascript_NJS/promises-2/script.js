//Intervew ref:

/*
What is a promise object?
It is a placeholder for a certan period of time, untill we receive a value from a Asynchronous operation
or
mdn: A promise is an object representing the eventual completion and failure of an asynchronous opeartion.

*/


//Promise Chaining:
//remember when we are promise chaining, we return it, so that data percolates down

const cart= ["pant", "Thsirt", "shoe"];

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWallet(paymentInfo);
})

//or
/*

createOrder(cart)
.then(orderId => proceedToPayment(orderId)
.then(paymentInfo => showOrderSummary(paymentInfo)
.then(paymentInfo => updateWallet(paymentInfo)
    

*/








//Async functions always return a promise:  YOU DON'T NEED TO GET CONFUSED, IF IT AN ASYNC OPERATION, IT WILL RETURN A PROMISE, AND PROMISES ARE IMMUTABLE


/*
remember, if .then() returns something, then it will be handled by next .then(). don't get confused

Promise.resolve().then(()=>{
    return "Prateek is a good boy";
})
.then((val) =>{
    console.log(val);
})

*/

