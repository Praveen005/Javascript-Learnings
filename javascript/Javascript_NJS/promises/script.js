
const cart= ["Pant", "Kurta", "Tie"];

//let's have createOrder() api, which takes the cart and return the order details or an order id

//createOrder(cart); //returns order id
//the api below will take the order id and proceed to payment
//proceedToPayment(orderId);

//Both the two APIs are asynchronous, we don't know how much time will they take.And they are dependent on each other

//check the callback hell folder to see, how we used to handle, async ops. using callbacks

//we will handle the issue of Inversion of control(giving control of one to other) using PROMISES



/*
The createOrder API will take inside the cart details and return a promise.
Let's capture it in a variable named promise
consider promise as an object, that holds some data value in it(whatever the createOrder API will return)
Remember this createOrder API is an async operation and will take its own sweet time.

But as soon the line is executed it will return us an empty object, say undefined value. and once the cllback is executed, it will reurn back the data and fill the promise.

we will then attach a callback function to it using '.then'
onCe we have data from the createOrder() api, and promise gets populated with detail, the call back function inside it to proceed for payment will automatically get called.

one thing you would have noticed is, createOrder API just creates the order details and have no control over others.

and for proceedToPayment(), we are just attaching it to the promise object.And we will have the control of our program with us. It will call the proceedToPayment() only when promise object has the data it needs.
One more guarantee you get is, it will call the proceedToPayment() just only once
*/

// const promise = createOrder(cart);

// Promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

const GITHUB_API = "https://api.github.com/users/praveen005";

// fetch()  used to make Api calls to the github server
//And by design, fetch() returns us a promise
//let's capture that promise in an object named, 'user'
const user= fetch(GITHUB_API)

console.log(user);
console.log("Ho gaya!")

/*
Go put breakpoint on above fetch() statement, check the scope() section and you will find undefined stored in 'user' object.

now when the fetch() is executed, you'll see a promise object stored in the 'user' object

But inside this promise you see 3 things:

prototype: Promise
promiseState: "pending"
promiseResult: undefined  



promiseResult, stores whatever data it receives by the fetch()
promiseState, tells in what state your promise is. Initially the promise will be in pending state, but once this async operation is completed, it will change to fullfilled state.


Now after the console.log() is executed, it throws the following on console:

Promise {<pending>}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Response

"says promise is pending but promiseState is fullfilled, how can promise be pending and state be fullfilled?"
see, fetch returns a promise, but it takes some time to get the date and fill it back, but since JS doesn't wait, it prints promise, and at this point, promise is still pending i.e. hasn't gotten the data, but after sometime when it gets the data, it updates the PromiseState to fullfilled, but the promise still shows the pending state on console(since it got printed before the updation of PromiseState)

    summary: when it was logged, it was pending, later state got updated to fullfilled when data was received.

*/

//attaching callbacks to the above promise:

user.then(function(data){
    console.log(data);
});

/*

Promise brings a lot of trust in the transaction:
JS guarantees, that the promises can only be resolved once, either it will be a success or a failure
three states of a promise:
1. fullfilled
2. pending
3. rejected

Promise objects are immutable(can't be changed over time), you just can't edit the user data
*/