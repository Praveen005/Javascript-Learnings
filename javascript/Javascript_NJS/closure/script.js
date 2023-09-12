

function x(){
    var a= 12;

    function y(){
        console.log(a);
    }
    return y;
}

//when x() is executed, everything related to x is deleted, how does it still print 'a' outside?
//not just the function is returned, but is lexical environment is also returned.

//being able to access 'a' inside 'y' is nothing but closure.
/*
    Closures allow inner functions to maintain access to their outer 
    function's lexical environment even after the outer function has finished executing.

    Closures create a chain of scope references, allowing inner functions to access variables from multiple levels of containing scopes. 
*/



var z= x();

console.log(z());