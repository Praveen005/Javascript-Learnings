console.log("Shree Ganeshay Namah!!\n\n")


function sayHello(){
    console.log("Hello!")
}

sayHello();

// this function can be executed immediately as soon as it is created
//we encapsulate the function into an object and then immediately call that function
// By surrounding the function declaration with parentheses (function() {...}), it becomes an expression.
//Adding the trailing parentheses (function() {...})() immediately invokes the function expression.
(function sayHello2(){
    console.log("Hello Ji!")
})();

//it means sayHello2 doesn't exist as a variable anymore
//can be like the following as well
(function (){
    console.log("Hello World!!")
})();
//upon not giving the semicolon above the code below gave TypeError, it shouldn't but it did, idk why

//Benefits of IIFE:

// 1. It can create global scopes without polluting the global scope

(function () {
    var a = 10;
    var b = a / 5;
    console.log(a + b);
  })();

  //variable 'a' is not available in the window or global scope
  //we are not polluting the global scope
//   console.log(a)

//const and let have block scope


//2. Helps in Minification

/*
function doMath(){
    console.log("3^4 = " + Math.pow(3,4));
    console.log("4^5 = ", + Math.pow(4, 5));
    console.log("square root of 2: ", Math.sqrt(2))
    console.log("sine(10):  " + Math.sin(10))
}

doMath();

*/

// above  can be reduced like this

(function(l,p,r,s){
    l("3^4 = " + p(3,4));
    l("4^5 = ", + p(4, 5));
    l("square root of 2: ", r(2))
    l("sine(10):  " + s(10))
})(console.log, Math.pow, Math.sqrt, Math.sin)

//3. in for loop setTimeout problem

for(var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}

//In above snippet, you might be expecting it to print 0 to 9 but it prints 10, 10 times
//but what happens is, there is a timer of 100ms, before 100ms, the for loop runs 10 times, but because of closure
//the value of i= 10 remains for use
//so setTimeout function will run 10 times every 100ms

//remember setTimeout is an asynchronous function in javascript, means it runs independently notwithstanding the main program flow

//this issue can be solved using an IIFE
//don't get confused, j takes the value of i
for(var i=0; i<10; i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        }, 100)
    })(i)
}


//the same can be overcome using the 'let' keyword as well

//let creates an internal closure
//the value of 'i' gets tied to the function in every iteration
for(let i=0; i<10; i++){
    setTimeout(function(){
        console.log(i)
    },100)
}

//when not using ES6

for(var i=0; i<10; i++){
    setTimeout(console.log, 100, i);
}


// In JavaScript, the setTimeout function is a built-in function that allows you to schedule the execution of a callback function after a specified delay. 

//The syntax of the setTimeout function is as follows:

// setTimeout(callback, delay, arg1, arg2, ...)

// callback: A function that will be executed after the specified delay.

// delay: The delay in milliseconds (ms) before executing the callback.

// arg1, arg2, ...: Optional arguments that can be passed to the callback function.
