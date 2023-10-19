// (check Execution context thing in google doc)





//The complete function will get stored during the memory creation phase
getName();
//getName4();  //gives TypeError, when hoisted, it is treated as variable only na, if 'let' used: reference error
console.log("Printing getName4: " + getName4);

// console.log(y) //Both will throw Reference error
// console.log(z)



//It prints, 'undefined' for 'x' because during memory allocation phase, x is assigned Undefined(check Execution context thing in google doc)
console.log("Printing x: " + x);


var x= 7;

//Function Declaration : this way of defining function : Hoisted
function getName(){
    console.log("Praveen is a great guy!")
}


//Will be treated ike a variable and assigned 'Undefined' during the memory creation.
//go to sources beside console in dev tool, put a breakpoint/debugger at line 2 , refresh the page and in the global scope, check for the getName and getName2 function


//Function Expression:  Not Hoisted


//used arrow function
var getName2 = () =>{
    console.log("Rom Rom Bhaiyon :)");
}


//it will also be treated like a variable. Mind you memory will defiitely be allocated, a key:value pair will be stored but, but value gainst getName3 would be 'undefined'
var getName3 = function(){
    console.log("Systemm paar denge!!");
}

let y= 56;
const z= 34;


// let getName4 = () =>{
   var getName4 = () =>{
    console.log("I have huge crush on Monali Thakur!!")
}


/*

see when you declare something using 'var' keyword.Be it function or variable, the name will be hoisted on the top, but the value assigned
to it would be 'undefined'

You will be able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. This is called "Declaration hoisting"


But if you define them using let or const or class and use it in its scope but before declaration will give you Reference error


*/



