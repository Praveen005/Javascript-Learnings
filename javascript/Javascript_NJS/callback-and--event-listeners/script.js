// call back functions:

// functions that are paases as arguments to another function, those are callack functions 
let s= 56;
let t=98;
setTimeout(function z(){
    console.log("Praveen is a great guy!")
}, 5000)

function func(){
    setTimeout(function p(){
        console.log("Inside 2nd setTimeout.");
    }, 2000)
}

func();

function x(y){
    console.log(this === window);
    console.log("X");
    y();
}

x(function y(){
    console.log("Y");
})


//Blocking the main thread:

//Everything that gets executed, is first stored in call stack

/*
The "thread of execution" in JavaScript refers to the sequence in which statements within a program are executed. 
JavaScript is a single-threaded language, which means it processes one operation at a time in a linear fashion. 
However, JavaScript also supports asynchronous programming through mechanisms like callbacks, promises, 
and async/await, which allows non-blocking execution of code.
*/

/*
suppose there there some functional calls in Js and one of them is taking lot of TimeRanges,
this is refered to as blocking the thread. Try to use ASYNC operation for things which take time,
like setTimeout, they take callback function and execute it some other time, doesn't block the call stack.

*/



//Even Listeners
/*
This gave me the following error:
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener').

stackoverflow says, "It seems that document.getElementById('clickMe'); is returning null because it executes before the DOM fully loads."

This is because the script is executed before the page loads. It can be resolved by placing the script at the bottom of the page.

I placed the script tag, at the bottom of body, and things worked.

*/

document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button clicked");
});

/*
now let's use closure with eventListeners

This one is a famous interview question:
how many times the mouse has been clicked?

one way to use global variable:

var count1 = 0;

document.getElementById("clickMe2").addEventListener("click", function (){
    console.log("Button clicked", ++count1);
})


//above is not a good solution

I don't want anyone to access my count1, so I will create a closure, how? By wrapping it inside a function

*/

function attachEventListeners(){
    var count1 = 0;

    document.getElementById("clickMe2").addEventListener("click", function btnClick(){
        console.log("Button clicked", ++count1);
    })
}

attachEventListeners();
/*
here btnClick() has closure over count1. go to eventListeners tab in dev tool, check scope inside it
click on button2 element in html doc and now in eventListener -> click -> button#clickMe -> handlers -> scopes ->
 here you will see, closure over 'count1'
 */

 //Garbage collector and eventListener:
/*
 Why are evenListeners removed on certain events?
 even if we don’t call attachEventListeners(), it still holds count1 into its closure, this is using extra space/memory. That's why people many a times, remove them to free memory
 */