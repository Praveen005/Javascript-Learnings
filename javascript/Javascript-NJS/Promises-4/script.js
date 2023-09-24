//Let's see promise chaining again

const cart= ["TrackPant", "Shoe", "Kurta"];


createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    console.log(orderId);
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);   
})

/*
here suppose the createOrder()throws an error: Nothing after that in the chain will get executed,
But say, I still want to go for payment, then we'll just put the catch() block above payment.
It will see error, handle it and then execute further.
Rememeber, .catch() handles error produced at any stage of then promise chain.
But emember orderId will have the value 'undefined'

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.catch(function(err){
    console.log(err.message);   
})
.then(function(orderId){
    console.log(orderId);
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})


I mean there are possibilities that, the promise chain is 20 block long, and at one block you get error but still want to continue, executing the rest.


Any .then() method after .catch() will get executed.

//remember we don't pass the call back function, we attach them

*/



function createOrder(cart){
    
    const pr= new Promise(function(resolve, reject){        

        if(!validateCart(cart)){  
            const err= new Error("Cart is not Valid!");
            reject(err);
        }       
        const orderId= "12345";      

        if(orderId){
            setTimeout(() =>{
                resolve(orderId);
            }, 1000);            
        }

    });    
    return pr;

}


function proceedToPayment(orderId){
    //Payment Logic
    //It will return a promise

    return new Promise(function(resolve, reject){
        resolve("Payment Succesful!")
    })
}


function validateCart(cart){
    return false;  
}