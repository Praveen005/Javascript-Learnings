//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any


/*

Promise.any():
------------
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an 'AggregateError' containing an array of rejection reasons.

This method rejects upon receiving an empty iterable.

This method ignores all rejected promises up until the first promise that fulfills.

*/

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"




const failure = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  Promise.any([failure]).catch((err) => {
    console.log(err);
  });

  // AggregateError: All promises were rejected







  const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
  });
  // Logs:
  // Done quick
  



/*
Displaying the first image loaded:
------------------------------------
In this example, we have a function that fetches an image and returns a blob. We use Promise.any() to fetch a couple of images and display the first one available (i.e. whose promise has resolved).

*/

async function fetchAndDecode(url, description) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.blob();
    return [data, description];
  }
  
  const coffee = fetchAndDecode("coffee.jpg", "Coffee");
  const tea = fetchAndDecode("tea.jpg", "Tea");
  
  Promise.any([coffee, tea])
    .then(([blob, description]) => {
      const objectURL = URL.createObjectURL(blob);
      const image = document.createElement("img");
      image.src = objectURL;
      image.alt = description;
      document.body.appendChild(image);
    })
    .catch((e) => {
      console.error(e);
    });
  