console.log("Shree Ganeshay Namah!!\n")


// In JavaScript, the setTimeout function is a built-in function that allows you to schedule the execution of a function or the evaluation of an expression after a specified delay.

//syntax:

//setTimeout(function, delay, arg1, arg2, ...);
/*

function: The function or code expression to be executed after the delay.

delay: The time delay, in milliseconds, before the function is executed.

arg1, arg2, ...: (Optional) Arguments that can be passed to the function.

*/

function sayHello(){
    console.log("Hello !")
}

console.log("And the wait starts ...");

setTimeout(sayHello, 1000);
setTimeout(sayHello, 1000);
//both the 'hello' are going to get printed togeteher because we set the timer at the same point of time.
//it just delays the execution of function inside the setTimeout()

/*

Here's the breakdown of the execution timeline:

The line console.log("And the wait starts ..."); is executed, and "And the wait starts ..." is logged to the console.

The first setTimeout is called and schedules the execution of sayHello after a delay of 1000 milliseconds.

The second setTimeout is called immediately after the first one and schedules another execution of sayHello after the same delay of 1000 milliseconds.

The JavaScript event loop waits for the specified delay of 1000 milliseconds to pass.

After approximately 1 second, the first scheduled sayHello function is executed, and "Hello!" is logged to the console.

The event loop does not need to wait any longer since the delay for the second setTimeout has already passed.

Immediately after the first sayHello function execution, the second scheduled sayHello function is executed, and "Hello!" is logged to the console again.

So, the total delay between the initial call and the second execution of the sayHello function is 1 second.

*/


console.log("===========setInterval============")

function sayHello2(){
    console.log("hello ji.")
}
//every 1s, 'hello!" will be printed
console.log("And the wait starts again ...")
// setInterval(sayHello2, 1000);
//it will keep running, how do we cancel it


var intervalId;
var count= 0;

function sayHello3(){
    count++;
    if(count>5){
        clearInterval(intervalId);
    }
    console.log("Hello Prateek!")
}

intervalId= setInterval(sayHello3, 1000);

//we can use anonymous function as well like below or a pre-defined one like earlier
/*
setInterval(function(){
    console.log("This runs after every 1sec")
}, 1000)

*/

