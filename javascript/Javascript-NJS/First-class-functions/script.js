//Function statement  , also called, function declaration : hoisted

function a(){
    console.log("a called!");
}

//function expression  : not hoisted

var b= function(){
    console.log("b called!")
}

//anonymous function: have no name
//these are used where functions are used as values

//Named function expression:

var c= function xyz(){
    console.log("Inside Named Function Expression!")
    console.log(xyz);
}

c(); //this works fine

//xyz(); //will throw an error, reference error: xyz not defined
//xyz() can't be used in global scope, it has not been defined in global scope.
//you can access it inside the scope it has been defined, like written inside.


function stu(a, b, c){   // a,b,c are parameters
    console.log(a, b, c);
}

stu(1,2,3) // 1,2,3 are arguments


//Fist Class Functions
/*
The ability of functions to be treaas a value and passed as parameters in another function or 
passed as an argument to another function or returned from another function. 
This is called first calss functions in JS.

*/



//Functions are first class citizens == Fisrst class function : means the same