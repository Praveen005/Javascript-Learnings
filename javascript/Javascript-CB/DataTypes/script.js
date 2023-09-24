function a(){
    return 1;
}

let b= function(){
    return 2;
}







console.log(1234, typeof 1234)
console.log(123.456, typeof 123.456)
console.log('a', typeof 'a')
console.log('abcd', typeof 'abcd')
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)
console.log(a(), typeof a())
console.log(a, typeof a)
console.log(b, typeof b)

// Both int and float are of datatype 'number' here 
// Both single character and a string are of data type 'String', one can use both single quote or double quote

//you can send a function as an argument in JS
// Function: JavaScript doesn't have a function data type but when we find the data type of a function using the typeof operator, we find that it returns a function. This is because a function is an object in JavaScript.

//There is no compilation stage in javascript, we may get runtime error but not compilation error

//if in a js file an error is encountered, then uske aage ke code run nahi hote
//but if there are 2 js files linked to a single html file,
// agar ek file me error hai then 2nd file won't get affected, only the code in first file after error-line won't get executed