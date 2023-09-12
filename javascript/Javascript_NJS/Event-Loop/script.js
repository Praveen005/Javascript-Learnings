
// Javascript is a synchronous single threaded language
//See whatever goes inside the call stack is executed iietly, it doesn't wait, 
//so what if I want somethg to be executed after sometime and not immedietly?
//Call stack doesn'thave any timer thing.

//You know, Call stack comes under the JS engine(v8 in case of chrome) and engine is inside the browser.

//Browser has local storage, can have timer as well, can access to Bluetooth, access to remote servers etc
//But for these you need something called WEB API

//some web API's: (these are part of browser)

//setTimeout  : yes it is not a part of JS
//DOM APIs
//fetch()
//console
//location

//In call stack we access these because of global object('window' to be precise)
//to access them we use window.sth  //we normally, don't use window keyword, it is implied
//so browser, wraps all the web APIs into 'window' object and call stack is given accessto this object


console.log("Start");

setTimeout(function cb(){
    console.log("Call Back!");
}, 5000)

console.log("End")

/*
every this gets executed, GEC also gets popped out, but timer in browser of 5000ms is still running, as sn as it expires
callback function should be sent inside the call stack, but here comes the callback ques and event loop.

CB function doesn't go directly to the call stack but instead goes to the callback queue, here comes the event loop, it
acts like a gatekeeper, and responsible for the CB functions to be pushed to call stack from the callback
queue.
event loop keep checking the callback queue if there is something inside, if there is, it sends to the call stack.
*/


console.log("Start");

document.getElementById("btn").addEventListener("click", function cb(){
    console.log("Callback");
});

console.log("End");

//here getElementById & addEventListener are DOM APIs
//getElementById gives you access to the html element whose id is "btn"
//addEventListener is used to record the event performed by the user, like click

//addEventListener job is to register a callback and attach an event to it, 
// CB is stored in web API environment and a click event is attached to it.

//sequence of events:
// GEC is formed
// execution starts line by line
// addEventListener registers a cancelIdleCallback, it is stored in web API environment     at an event is attached to it.
//last line executes
// /now when the button is clicked, callback is sent to the callback queue, event loop checks, pushes to the
//call stack, a new execution context is created and the function is executed

//what is callback queue?
/*
The callback queue (or task queue) is used to maintain the orderly execution of multiple callbacks that complete 
at the same time, ensuring that they are executed in the order they were generated. 
This scenario commonly occurs when multiple asynchronous operations, such as timers, complete simultaneously.


suppose, 5 callbacks are done waiting for their timer or other events at the sametime, and now they have to be 
executed, so to maintain the orderly execution, they are pushed to the callstack
*/






/*
The Event Loop keeps an eye on the call stack and callback queue.
only when the call stack is empty, it pushes the callback function.

call stack not empty means: kuchh already execute h raha, cz call back never sits idle,
so event loop can't just say, bhai mere call vback mko execute kar do, it has to wait for the call stack to 
go empty.



from chatgpt:

The event loop pushes a callback from the callback queue to the call stack only when the call stack is empty. The event loop's primary responsibility is to manage the order of execution and prevent blocking of the main thread.

Here's how it works:

Checking the Call Stack: The event loop first checks whether the call stack (the stack of functions being executed) is empty. If the call stack is not empty, it means that there are functions currently being executed, and the event loop waits until the call stack becomes empty.

Pushing Callbacks: Once the call stack is empty, the event loop fetches the first callback from the callback queue and pushes it onto the call stack for execution. This callback represents the next task that needs to be performed, and it might be associated with an event like a timer completing, an HTTP response arriving, or an event listener triggering.

Execution: The callback is then executed within its own execution context on the call stack. Once the callback completes, it's removed from the call stack.

Repeat: The event loop repeats this process, continuously checking the call stack and callback queue to ensure that tasks are executed in a non-blocking and sequential manner.

The event loop's behavior ensures that asynchronous tasks (callbacks) are executed in a controlled way and do not interfere with the main thread's execution. By only pushing a callback to the call stack when it's empty, the event loop ensures that tasks are executed one by one, maintaining the desired order and preventing concurrency issues.

*/






//Fetch():
// It goes and request for API calls.
// The Fetch API is a built-in web API in JavaScript that provides a way to make network requests (HTTP requests) to fetch resources, such as data from a server.

//fetch whin hit during execution is also registers the function cbF inside the web API environment
//cbT is also stored in web api env. waiting for timer to expire, 
//cbF is waiting for data to be fetched

//you might think, after the cbF function gets the data from the NETFLIX server, it would move to callback queue
//but NO,
//It moves to microTasks queue.
//microtask queue is same as callback queue, but has higher priority, and event loop keeps checking call stack and microtask queue as well

//question comes: what all can go inside a microask queue?
//All the callback functions that comes through promises and mutation observer goes to microtask queue others go to 
//callback queue/ Task Queue.

//when the muicrotask queue goes empty, then only callback/task queue is pushed to th call stack.

//Starvation of the callback queue:
/*
suppose when a mirotask queue suppose creates another microtask queue, and it creates another and so on..
in such case callback queue won't get the chance of execution, this is what Starvation of callback queue is

*/
console.log("Start");

setTimeout(function cbT(){
    console.log("cb setTimeout");
},5000);


fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix.");
});

console.log("End")




//Mutation observer
/*
A MutationObserver is a JavaScript interface that provides a way to asynchronously observe changes in the DOM (Document Object Model) and receive notifications when mutations (changes) occur. This is particularly useful when you want to track changes made to the structure or attributes of elements within an HTML document without actively polling for changes.


Think of a MutationObserver as a watcher for changes in a web page. It quietly observes the page's elements and tells you when something changes. This can be useful if you want to know when an element's content or attributes change without constantly checking.

*/