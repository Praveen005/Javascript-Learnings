console.log("Shree Ganeshay Namah!!\n")
/*

In JavaScript, an arrow function is a concise way to define a function using the arrow (`=>`) syntax. It provides a shorter and more expressive syntax compared to traditional function expressions. Arrow functions have a few distinct characteristics:

1. Syntax: The basic syntax of an arrow function is `(parameters) => { expression }` or `(parameters) => expression`. The parentheses around the parameters are optional for a single parameter, but required for multiple parameters.

2. Shorter Function Definition: Arrow functions are useful for creating functions with a shorter and more readable syntax, especially for simple, one-line functions.

3. Lexical `this` Binding: One of the significant features of arrow functions is that they lexically bind the value of `this`. It means that the value of `this` inside an arrow function is determined by the surrounding scope where the function is defined, rather than how it is invoked.
*/

function Person() {
    this.name = 'John';
  
    // Regular function
    this.sayHelloRegular = function() {
      setTimeout(function() {
        console.log('Hello, ' + this.name); // 'this' refers to the global object (e.g., 'window')
      }, 100);
    };
  
    // Arrow function
    this.sayHelloArrow = function() {
      setTimeout(() => {
        console.log('Hello, ' + this.name); // 'this' refers to the 'Person' object
      }, 100);
    };
  }
  
  const person = new Person();
  person.sayHelloRegular(); // Output: Hello, undefined
  person.sayHelloArrow();   // Output: Hello, John

  /*


In the above example, we have a Person constructor function that defines two methods: sayHelloRegular and sayHelloArrow.

sayHelloRegular: This method uses a regular function as the callback for the setTimeout function. When the setTimeout callback is executed, the this value inside the callback refers to the global object (e.g., window in a browser environment) instead of the Person object. Therefore, the output will be "Hello, undefined". This happens because the regular function has its own execution context and this is determined by the caller or the way the function is invoked.

sayHelloArrow: This method uses an arrow function as the callback for the setTimeout function. Since arrow functions lexically bind this, the this value inside the arrow function refers to the surrounding scope, which is the Person object. Therefore, the output will be "Hello, John".

The difference in behavior arises because regular functions have their own this binding, which can change depending on how the function is invoked. On the other hand, arrow functions do not have their own this binding and instead inherit the this value from their surrounding scope.

In the example, the sayHelloRegular method demonstrates the common issue of losing the desired this context within nested functions. In contrast, the sayHelloArrow method solves this problem by using an arrow function, which captures the this value from the surrounding scope, maintaining the correct context.

This illustrates how arrow functions provide lexical this binding, allowing you to access the desired this value based on the surrounding scope in which the arrow function is defined, rather than how it is invoked.




*/


/*
4. Implicit Return: If an arrow function consists of a single expression, the curly braces and `return` keyword can be omitted. The result of the expression will be automatically returned.


Arrow functions are particularly useful in scenarios where you want to write concise, single-purpose functions or when you need to preserve the lexical scope of `this`. However, it's important to note that arrow functions also have some limitations, such as not having their own `arguments` object and not being suitable for methods that require access to their own `this` value.

*/


// for more check the function folder ********





//scope:

//lexical means hierarchical.


function a(){
    function c(){
        function b(){
            console.log("Bahut andar aa ageye Bhai!");
        }

    }
}

// a() is lexically inside the global scope, whereas the function c() is lexically inside a()
//c() will get access to the lexical environment of a() also
//lexical environment of c() is a(), or say lexical parent 
//Lexical environment or parent of a() is the global context
//lexical environment or parent of the global context is NULL

//Lexical enviroment: local context + lexical environment of the parent


// arrow functions can take other functions as arguments, just like regular functions.


// ******************


// VVI:::  arrow functions do not have their own arguments object. The arguments object is only available in regular functions, not in arrow functions.

// If you need to access the arguments passed to an arrow function, you can use the Rest Parameter, syntax (...args) to gather all the arguments into an array-like object.

const myArrowFunction = (...args) => {
  console.log(args); // Output: [1, 2, 3]
};

myArrowFunction(1, 2, 3);

// The  Rest Parameter 'args' is an array-like object that contains all the arguments as elements.






//watch this for more :  https://www.youtube.com/watch?v=uH-tVP8MUs8&ab_channel=AkshaySaini
