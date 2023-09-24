//check this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

let p1= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Inside Promise p1: This is Praveen's 1st promise.")
    }, 5000);
});


let p2= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Inside Promise p2: This is Praveen's 2nd promise.")
    }, 10000);
});




// const tick= Date.now();
// const log= (v) => console.log(`${v()} \n Elapsed: ${Date.now()- tick}`);


async function handlePromise3(){
    console.log("1st log inside handlePromise3.") 

    let tick= Date.now();
    const value1= await p1;
    console.log("Welcome Back!")
    console.log(value1);
    console.log(`Elapsed1: ${Date.now() - tick}`);

    tick= Date.now();
    const value2= await p2; 
    console.log("Hello ji!")
    console.log(value2);
    console.log(`Elapsed2: ${Date.now() - tick}`);


}
handlePromise3();




/*
Let's see how the execution of above probram happens behind the scene:

1. as soon as handlePromise3() is hit, the function moves to the call stack for execution.

2. execution will start line by line

3. 1st console.log() will be executed.

4. now soon as the 'await p1' is hit, the execution of the function is suspended and handlePromise3() is moved out of the call stack, since it can't block the main thread.
It will wait till promise p1 is resolved. 

5. as soon as p1 gets resolved, the function is again moved to the call stack, and remember the execution starts fron where it left i.e. the next `console.log("1st log inside handlePromise3.")` and then `console.log(value1)`

6. It again encounters `await p2`, and same thing repeats


You must be having a question, what is the total wait time, when two awaits are written like above, or if both awaits are written one right after the other and console.log()s after both?

Answer: If both are written like above, 1 executes 2nd waits, then 2nd executes

if both are written right next to each other: both runs parallely, but one which finishes first, and wait for the last one to finish and then further processing like logging to console etc is performed like ususal.

Chek bottom or link at the top for more.

*/



/*
Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError.

await can be used on its own with JavaScript modules.


*/





/*
Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

async function foo() {
  return 1;
}

It is similar to:

function foo() {
  return Promise.resolve(1);
}

Note:

Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

It can be a problem when you want to check the equality of a promise and a return value of an async function.



const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false

*/


/*

async function foo() {
  await 1;
}

It is also equivalent to:

function foo() {
  return Promise.resolve(1).then(() => undefined);
}

*/

/*
 In the following code an unhandled promise rejection error will be thrown, even if a .catch handler has been configured further along the promise chain. This is because p2 will not be "wired into" the promise chain until control returns from p1.

 Now, let's break down what happens:

p1 is created and scheduled to resolve after a 1-second delay.
p2 is created and scheduled to reject after a 500-millisecond delay.


 async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...


Here's the issue: p2 is not "wired into" the promise chain until p1 has completed. This means that even though p2 might reject earlier, the rejection error will not be handled immediately, and there's a brief period during which the rejection goes unhandled.

*/

/*
async function declarations behave similar to function declarations — they are hoisted to the top of their scope and can be called anywhere in their scope.

*/


function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log("== sequentialStart starts ==");
  
    // 1. Start a timer, log after it's done
    const slow = resolveAfter2Seconds();
    console.log(await slow);
  
    // 2. Start the next timer after waiting for the previous one
    const fast = resolveAfter1Second();
    console.log(await fast);
  
    console.log("== sequentialStart done ==");
  }
  
  async function sequentialWait() {
    console.log("== sequentialWait starts ==");
  
    // 1. Start two timers without waiting for each other
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
  
    // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast);
  
    console.log("== sequentialWait done ==");
  }
  
  async function concurrent1() {
    console.log("== concurrent1 starts ==");
  
    // 1. Start two timers concurrently and wait for both to complete
    const results = await Promise.all([
      resolveAfter2Seconds(),
      resolveAfter1Second(),
    ]);
    // 2. Log the results together
    console.log(results[0]);
    console.log(results[1]);
  
    console.log("== concurrent1 done ==");
  }
  
  async function concurrent2() {
    console.log("== concurrent2 starts ==");
  
    // 1. Start two timers concurrently, log immediately after each one is done
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
    console.log("== concurrent2 done ==");
  }
  
  sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
  setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"
  
  // wait again
  setTimeout(concurrent1, 7000); // same as sequentialWait
  
  // wait again
  setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"


/*

In sequentialStart, execution suspends 2 seconds for the first await, and then another second for the second await. The second timer is not created until the first has already fired, so the code finishes after 3 seconds.

In sequentialWait, both timers are created and then awaited. The timers run concurrently, which means the code finishes in 2 rather than 3 seconds, i.e. the slowest timer. However, the await calls still run in series, which means the second await will wait for the first one to finish. In this case, the result of the fastest timer is processed after the slowest.


If you wish to safely perform other jobs after two or more jobs run concurrently and are complete, you must await a call to Promise.all() or Promise.allSettled() before that job.


Warning: The functions sequentialWait and concurrent1 are not functionally equivalent.

In sequentialWait, if promise fast rejects before promise slow is fulfilled, then an unhandled promise rejection error will be raised, regardless of whether the caller has configured a catch clause.

In concurrent1, Promise.all wires up the promise chain in one go, meaning that the operation will fail-fast regardless of the order of rejection of the promises, and the error will always occur within the configured promise chain, enabling it to be caught in the normal way.

*/
  

