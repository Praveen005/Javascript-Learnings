//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all






//If there are multiple promises and we are to group them together, we can do as follows:
//if you don't want to keep using the .then() .then() ...
//The third(or more) parameter in setTimeout() is optional and allows you to pass arguments to the function specified in the first parameter when it is executed. 

//we'll use Promise.all();
const promise1= Promise.resolve("Hello World!");

const promise2= 12;
const promise3= new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "GoodBye");   
})

const promise4= fetch("https://jsonplaceholder.typicode.com/users"). then((res) =>{
    return res.json();
});

Promise.all([promise1, promise2, promise3, promise4]).then((values)=>{
    // console.log(values);
});



// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }



// Asynchronicity or synchronicity of Promise.all:
// ------------------------------------------------

// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }


/*
see here, we have two console.log(p), but their output is different, remember, promise waits in microtask queue?
the first onr logs the promise synchronously which is in pending state,
In second one it contains the resolved value as well.

*/



//Note:   Promise.all resolves synchronously if and only if the iterable passed is empty

const p = Promise.all([]); // Will be immediately resolved
const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p2);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }


/*

Promise.all fail-fast behavior:
------------------------------
Promise.all is rejected if any of the elements are rejected. For example, if you pass in four promises that resolve after a timeout and one promise that rejects immediately, then Promise.all will reject immediately.

*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const p5 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });
  
  // Using .catch:
  Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  // Logs:
  // "reject"

  
//It is possible to change this behavior by handling possible rejections:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1_delayed_resolution"), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    reject(new Error("p2_immediate_rejection"));
  });
  
  Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
    (values) => {
      console.log(values[0]); // "p1_delayed_resolution"
      console.error(values[1]); // "Error: p2_immediate_rejection"
    },
  );
  

