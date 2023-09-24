
//We are shopping

const cart = ["shoes", "pants", "kurta"];

/*
we can't proceed to payment, unless the order is created.
so there is a dependency of one on the other.
so we will the proceedToPayment() into a callback function.
*/

api.CreateOrder();
api.proceedToPayment();



/*
Below we can see that, we have wrapped the proceedToPayment() inside the CreateOrder() api, now it will create an order and call back the payment api for execution.

This is how we handle Async operations in JAVASCRIPT
*/

api.CreateOrder(cart, function(){

    api.proceedToPayment();

});

/*
Now suppose you have made the payment, now you need to show the order summary page.

suppose there is another api called showOrderSummary, we'll again wrap it inside a callback function and pass it to the proceedToPayment() api. like below:

*/

api.CreateOrder(cart, function(){

    api.proceedToPayment(function(){
        api.showOrderSummary();
    });

});

/*
Now suppose we want to update the wallet as well.
you would be tempted to do as follows:
*/
api.CreateOrder(cart, 
    function(){

    api.proceedToPayment(
        function(){
            api.showOrderSummary(
                function(){
                    api.updateWallet();
        });
    });

});
/*
so basically, callback hell is, api inside api inside api....
this kind of code structure is highly unmaintainable.
and this structure is also called as pyramid of doom.

*/


// /Inversion of control:
/*
you loose control of your code, when you use callbacks: says Kyle Simpson

see the below code, we just gave the control of a very important job of payment to CreateOrder api. Didn't we?

Now suppose there's some issue with the CreateOrder() api, say it calls the callback function twice. then?
*/

api.CreateOrder(cart, 
    function(){

    api.proceedToPayment();

});