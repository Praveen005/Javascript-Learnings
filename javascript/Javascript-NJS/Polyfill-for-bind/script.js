console.log("Shree Ganeshay Namah!!")

//Polyfill is a sort of browser fallback
//if bind is not supported in a particular version or browser, we write our own bind() method
/*

    A polyfill, short for "polymer fill," is a piece of code (usually JavaScript) that provides functionality that is not natively supported by a web browser or an environment. Polyfills are used to bridge the gap between older and newer web standards or JavaScript features, allowing developers to use new features in environments that lack native support.

*/

let name1 ={
    firstName: "Prateek",
    lastNmae: "Mishra"
}

function printFullName(homeTown, state, country){
    console.log(this.firstName + " " + this.lastNmae + " from " + homeTown + ", " + state + ", " + country);
}

let printMyName= printFullName.bind(name1);

printMyName();

/*
    writing my own implementation of the bind method

    let's observe something:
        every function in javascript has the access to the inbuilt bind method, so myBind() should also be available to all
        so, we will keep attach it with Function.prototype

        This means that you can add properties or methods to Function.prototype, and they will be available to all functions in your JavaScript code. 

        The myBind() must return a function

    ...args: rest parameter: used in function definitions to collect a variable number of arguments into an array

    [...params , ...args2] will create an array with elements of both concatenated
*/
Function.prototype.myBind = function(...args){
    let obj = this;  //`this` here points to the printFullName function
    let params= args.slice(1); //will remove the first element and return the rest of elements
    return function(...args2){

        obj.apply(args[0], [...params , ...args2]);

        //another way of concatenating
        //let params2= params.concat(args2)
        //obj.apply(args[0], params2);

        //const concatenatedArray = Array.from(array1).concat(array2);
    }
}

let printMyName2 = printFullName.myBind(name1, "Varanasi")
printMyName2("UP", "India");  //this "UP" will go to ..args2

//there are a lot of checks that can be done:
//like if printFullName is a valid method() or not
//if the arguments passed are valid or not