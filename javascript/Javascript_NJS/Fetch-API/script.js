/*
Recommended Read:

Cross Origin Resourse Sharing(CORS): https://aws.amazon.com/what-is/cross-origin-resource-sharing/

https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

For more on CORS: check MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

Want to read more on Cross-Site Request Forgery(CSRF) which CORS aims to mitigate: https://owasp.org/www-community/attacks/csrf 

Check, what is Same Origin & Cross Origin ?: https://developer.mozilla.org/en-US/docs/Glossary/Origin

Also Check JSONP: https://stackoverflow.com/a/60258838     : History Janna jaruri hai bhai :P

*/
/*
Fetch API error handling: https://web.dev/fetch-api-error-handling/#when-the-fetch-api-throws-errors

https://www.youtube.com/watch?v=2sQ9xiEAXNo&ab_channel=SteveGriffith-Prof3ssorSt3v3

https://github.com/prof3ssorSt3v3/all-the-fetch/tree/main

*/


/*

Response.ok: A boolean indicating whether the response was successful (status in the range 200 – 299) or not.

Response.status: The status code of the response. (This will be 200 for a success, 404 if the resource could not be found).

Note: A 404 status, does not return a network error but instead resolves normally, But to the user this error must be displayed, which normally won't, since it won't get caught by .catch(). For this we use boolean response.ok to check if the response is successful or not. only status code between 200-299 are successful, others throw error, but only network error are caught by .catch() and 404 isn't network error.

*/

/*
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/

/*
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options

The Fetch API provides an interface for fetching resources (including across the network).

The Fetch API uses Request and Response objects, as well as related concepts such as CORS(see above) and the HTTP Origin header semantics.

It is available in pretty much any context(window or otherwise) you might want to fetch resources in.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

The term "headers" refers to the HTTP headers associated with a request or response. HTTP headers are key-value pairs of metadata that provide additional information about the data being sent or received over the network. These headers are included in the HTTP request sent by the client and the HTTP response sent by the server.

They enable you to communicate various details about the data being transferred and authenticate requests when necessary.



*/

const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
  //
  //fetch().then().then().catch()

  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error('not a valid response');
    let dataobj = await response.json();
    console.log(dataobj);
  } catch (err) {
    console.warn(err.message);
  }
}

getData();





// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});


/*
postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});


The .then((data) => { console.log(data); }) code block is used to handle the response from the server once the asynchronous fetch operation is complete. 

*/




/*
The JSON.stringify() static method converts a JavaScript object to a JSON string

This process converts the JavaScript object into a string representation that can be easily transmitted over HTTP.

Many web services and APIs expect data to be sent in a specific format, By using JSON.stringify, you ensure that your data is formatted consistently according to these expectations.

*/






/*
Extra:

`?.` in javascript?
The ?. (optional chaining) operator in JavaScript is a feature introduced in ECMAScript 2020 (ES11) that allows you to safely access properties and methods of objects without having to explicitly check if intermediate values are null or undefined.

It's especially useful when working with nested objects or when you want to avoid "TypeError" exceptions that can occur when trying to access properties or methods on non-existent or null values.

const person = {
  name: 'John',
  address: {
    city: 'New York',
  },
};

const city = person.address?.city; // Safely access 'city' property


const person = {
  name: 'John',
  address: null,
};

const city = person.address?.city; // won't throw error
const city = person.address.city; // will throw Typrerror: "Uncaught TypeError: Cannot read properties of null (reading 'city')"


const person = {
  name: 'John',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello?.(); // Safely call 'sayHello' method
If person.sayHello is null or undefined, the method call is silently skipped, and no error is thrown.

*/

/*
Why do TypeErrors occur in Javascript?

In JavaScript, a `TypeError` occurs when you attempt to perform an operation on a value that is not of the expected type. There are several common scenarios that can lead to `TypeError`:

1. **Undefined or Null Value**: Trying to access properties or call methods on `undefined` or `null` values can result in a `TypeError`. For example:

   ```javascript
   let x; // undefined
   x.foo(); // TypeError: x is undefined

   let y = null;
   y.bar(); // TypeError: Cannot read property 'bar' of null
   ```

2. **Function Calls on Non-Functions**: If you try to call something as a function that is not a function, you'll get a `TypeError`. For example:

   ```javascript
   let num = 42;
   num(); // TypeError: num is not a function
   ```

3. **Invalid Argument Types**: When you pass arguments of the wrong type to a function, it can lead to a `TypeError`. For instance:

   ```javascript
   function add(a, b) {
     return a + b;
   }

   add('2', 3); // TypeError: Cannot convert string to number
   ```

4. **Accessing Properties on Primitive Values**: Attempting to access properties or methods on primitive values (like numbers or strings) can result in a `TypeError` because they are not objects by default. For example:

   ```javascript
   let str = 'Hello, world!';
   str.length; // No error, returns the length

   let num = 42;
   num.toFixed(2); // TypeError: Cannot read property 'toFixed' of 42
   ```

5. **Invalid Use of `this`**: In certain cases, attempting to use `this` inappropriately can result in a `TypeError`. For instance:

   ```javascript
   const obj = {
     value: 42,
     getValue: function () {
       return this.value;
     },
   };

   const getValue = obj.getValue;
   getValue(); // TypeError: Cannot read property 'value' of undefined
   ```


*/

/*




*/