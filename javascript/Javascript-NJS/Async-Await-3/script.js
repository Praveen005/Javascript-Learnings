/*
Async is a keyword used before a function to create a async function.

Async fucntions always return a Promise.

Suppose instead of returning a Promise, you return a value(number, string, array etc.), what it does is, it will automatically wrap the value inside a promise and return a Promise, means this fucntion will always return a promise.

see, getData2() is return 'p', 'p' is already a promise, it won't further be wrapped or sth.
*/

async function getData(){
    return "Praveen is a good guy!";
}

const dataPromise= getData();
console.log(dataPromise);

dataPromise.then(res => console.log(res));

///////////////////////////////////

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!");
});

async function getData2(){
    return p;
}
const dataPromise2= getData2();
dataPromise2.then(res => console.log(res));



/*

Async and Await combo is used to handle promises.

'val' below will contain the value of the resolved promise

await keyword can only be used inside an async function.

Must Read these: 
https://dev.to/codeprototype/async-without-await-await-without-async--oom
https://stackoverflow.com/questions/43832490/is-it-possible-to-use-await-without-async-in-js
https://stackoverflow.com/questions/45594596/async-function-without-await-in-javascript
https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke


*/

//Will throw syntax error
const getPromise = async (s) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(s), 500);
    });
}

//
(() => { //no async keyword here, `use async () =>{`  to rectify
  try {
    const result = await getPromise("a");   //used await without async
    console.log('async/await -> ', result);
  } catch (err) {
    console.log(err);
  }
})();


/////////////////////////////////////

const getPromise2 = async (s) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(s), 500);
  });
}

(async() => {
    try {
        const result = getPromise2("a"); //no await, result(a promise) has not been unwrapped(prints: async/await ->  Promise {<pending>} in console, to unwrap use .then() or await before getPromise2())  
        console.log('async/await2 -> ', result);
    } catch (err) {
        console.log(err);
    }
})();


//This would throw error: Error : SyntaxError: await is only valid in async functions and the top level bodies of modules
//But if you put this code in chrome dev console, it will work. weird na? Hahaha
// check: https://stackoverflow.com/questions/57459959/await-work-in-chrome-console-without-async-wrapper
async function fetchData() {
    // Simulate an asynchronous operation
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data from moduleB'), 1000);
    });
  }
  
  const data = await fetchData();
  console.log(data);
