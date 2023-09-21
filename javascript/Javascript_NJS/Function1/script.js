

var x= 1;
a();
b();
console.log(x);

function a(){
    var x= 10;
    console.log(x);
}

function b(){
    var x= 56;
    console.log(x);
}



/*

Concurrency in JavaScript refers to the ability of a JavaScript program to manage and execute multiple tasks simultaneously. JavaScript is single-threaded, meaning it has only one main thread of execution, but it can achieve concurrency through various mechanisms, such as asynchronous programming, web workers, and modern features like async/await. 

*/