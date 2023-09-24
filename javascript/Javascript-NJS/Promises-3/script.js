//Let's create our own promise

const cart= ["TrackPant", "Shoe", "Kurta"];


const promise= createOrder(cart); //returns order ID
// console.log(promise);
//Below we have written, what happens when everything goes okay, what if things fail? let's handle he error, for that promise, comes with  sth called catch, we can atach a failure callback to it as well.
// .then is called when we resolve a promise and .catch when we reject a promise
promise.then(function(orderId){
    console.log(orderId);
    //proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);   //now we don't get a red error
})


//let's create our own createOrder Function:
//we know by design that this function will return a promise

function createOrder(cart){

    //creating a promise: we use a promise constructor
    const pr= new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId

        if(!validateCart(cart)){  //if validation fails, we'll reject the promise, with some error
            //we create an error
            const err= new Error("Cart is not Valid!");
            reject(err);
        }

        //logic to create order: if successful, we will send orderId
        const orderId= "12345";
        //if order id is valid, we'll just resolve the promise

        if(orderId){
            setTimeout(() =>{
                resolve(orderId);
            }, 5000);            
        }

    });


    //return a promise
    return pr;

}

function validateCart(cart){
    //Not going into the details of it.
    // return true;
    return false;  
}


//after promise, doesn't get resoled, we get a red-coloured error, means we have not handled the error properly.
//This should never be done, we should always write codes to handle these errors. why?
//when this is pushed to the production, we will get this this error in his CONSOLE and will not actually know, what happened