// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

/*

Promise.race():
--------------
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.


The Promise.race() method is one of the promise concurrency methods. It's useful when you want the first async task to complete, but do not care about its eventual state (i.e. it can either succeed or fail).


Promise.race is always asynchronous: it never settles synchronously, even when the iterable is empty.

*/


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // Expected output: "two"


  /*

Examples:

This example shows how Promise.race() can be used to race several timers implemented with setTimeout(). The timer with the shortest time always wins the race and becomes the resulting promise's state.

  */
  

function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfill") {
          return resolve(value);
        } else {
          return reject(new Error(value));
        }
      }, time);
    });
  }
  
  const p1 = sleep(500, "one", "fulfill");
  const p2 = sleep(100, "two", "fulfill");
  
  Promise.race([p1, p2]).then((value) => {
    console.log(value); // "two"
    // Both fulfill, but p2 is faster
  });
  
  const p3 = sleep(100, "three", "fulfill");
  const p4 = sleep(500, "four", "reject");
  
  Promise.race([p3, p4]).then(
    (value) => {
      console.log(value); // "three"
      // p3 is faster, so it fulfills
    },
    (error) => {
      // Not called
    },
  );
  
  const p5 = sleep(500, "five", "fulfill");
  const p6 = sleep(100, "six", "reject");
  
  Promise.race([p5, p6]).then(
    (value) => {
      // Not called
    },
    (error) => {
      console.error(error.message); // "six"
      // p6 is faster, so it rejects
    },
  );
  


  //An empty iterable causes the returned promise to be forever pending:

  const foreverPendingPromise = Promise.race([]);
  console.log(foreverPendingPromise);
  setTimeout(() => {
    console.log("the stack is now empty");
    console.log(foreverPendingPromise);
  });
  
  // Logs, in order:
  // Promise { <state>: "pending" }
  // the stack is now empty
  // Promise { <state>: "pending" }

  
  /*
If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race will settle to the first of these values found in the array:

  */

const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
const arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the stack is now empty");
  console.log(p);
  console.log(p2);
});

// Logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }


/*
Using Promise.race() to implement request timeout:
-------------------------------------------------
You can race a potentially long-lasting request with a timer that rejects, so that when the time limit has elapsed, the resulting promise automatically rejects.

*/

const data = Promise.race([
    fetch("/api"),
    new Promise((resolve, reject) => {
      // Reject after 5 seconds
      setTimeout(() => reject(new Error("Request timed out")), 5000);
    }),
  ])
    .then((res) => res.json())
    .catch((err) => displayError(err));

/*
If the data promise fulfills, it will contain the data fetched from /api; otherwise, it will reject if fetch remains pending for 5 seconds and loses the race with the setTimeout timer.

*/


/*

Using Promise.race() to detect the status of a promise:
------------------------------------------------------
Because Promise.race() resolves to the first non-pending promise in the iterable, we can check a promise's state, including if it's pending. 

*/

function promiseState(promise) {
    const pendingState = { status: "pending" };
  
    return Promise.race([promise, pendingState]).then(
      (value) =>
        value === pendingState ? value : { status: "fulfilled", value },
      (reason) => ({ status: "rejected", reason }),
    );
  }

  

/*

Comparison with Promise.any():
-----------------------------
Promise.race takes the first settled Promise.
Promise.any takes the first fulfilled Promise.

*/