
//Async / Await:

//If you want to use await in a function, you need to declare the function async
//await just waits for the asynchronous function to complete

async function func(){
    //one way to declare async
}

//or

const func2= async function(){
    //2nd way to declare a function async
}



let tick= Date.now();

const log= (v) => console.log(`${v} \n Elapsed: ${Date.now()-tick}`);  //'v' is the parameter of the log function

/*
This is what will happen below: 
1. 1st log() will be called i.e. 'Synchronous 1' will be printed.
2. Then the main thread will be blocked, as the while loop will be getting executed.
3. Then 3rd log will be called and 'Synchronous 2' will be printed immediately.

*/

function codeBlocker() {
    let i = 0;
    while (i < 1000000000) {
        i++;
    }
    return 'Billion moves done ✅';
}


log('Synchronous 1');

log(codeBlocker());  //Blocking the thread.

log('Synchronous 2');




//Let's wrap the codeBlocker in a promise, get it off the main thread and put it into the microTask Queue
//Here is what will happen:
/*

1. 1st log() will be called i.e. 'Synchronous 2.1' will be printed.
2. Promise will be moved to the microTask queue
3. 'Synchronous 2.2' will be printed : But notice one thing, even it was a synchronous task time elaped is almost same as the time taken for the execution of the promise. why? 
    Because, the while loop is still unning on the main thread, only the resolve happens on the microtask queue

4. microTask queued promise will get executed and will print 'Billion lines Executed ✅' to the console.


Note: Only the resolve() and reject() tasks in a promise is queued in the microtask queue, rest other codes in the promise are executed in the main thread, so, while loop down below is executed on the main thread only.(console.log dal kar dekh lo andar :P)


*/


console.log("*********************************");

const codeBlocker2= () =>{

    return new Promise((resolve, reject) =>{
        let i=0;
        while(i<1000000000){
            i++;
        }
        resolve('Billion lines Executed ✅' ); 
    })
}


log('Synchronous 2.1');

codeBlocker2().then(log);

log('Synchronous 2.2');



console.log("<<<<<<<<<<*********************************>>>>>>>>>>");

const codeBlocker3 = () =>{

    return Promise.resolve().then((v) =>{
        let i=0;
        while(i<1000000000){
            i++;
        }
        return "Billion lines executed yet again!"
    })

}



log('Synchronous 3.1');

codeBlocker3().then(log)

log('Synchronous 3.2');








/*

Sometimes having a long chain of promise can be hard to read and follow, To take care of that, Async/Await is used, it is more of a syntactic sugar to make your asynchronous code read like synchronous code

*/








/*
 try...catch and .then()...catch() are different mechanisms for handling errors in JavaScript, and they are used in different contexts.


try...catch:

try...catch is used for handling exceptions (errors) in synchronous code.

It is primarily used when you have a block of code that might throw an exception, and you want to gracefully handle that exception.

If an exception occurs inside the try block, control is transferred to the catch block where you can handle the error.

*******************
try {
    // Code that might throw an exception
} catch (error) {
    // Code to handle the exception
}


*****************

.then()...catch():

.then() and .catch() are used for handling Promises and asynchronous code.

They are part of the Promise API and are used when you are dealing with asynchronous operations that return Promises.

The .then() method is used to handle the resolved (fulfilled) state of a Promise, and the .catch() method is used to handle the rejected (error) state of a Promise.




https://stackoverflow.com/questions/69362121/when-should-i-use-try-catch-instead-of-then-catch: 

If you're using await to handle the Promise then you wrap it in a try/catch. Think of await as a way to make asynchronous operations semantically similar to synchronous operations.

But if you're not using await and are instead handling the Promise by appending .then() to it then you'd append a .catch() to that chain to catch failures from within the asynchronous operation.

Because a try/catch isn't going to catch an exception that happens from within the asynchronous operation if that operation isn't awaited.

*/

