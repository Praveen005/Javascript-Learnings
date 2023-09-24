









//suppose there's nothing in this program, still when you run it, a GEC is created,
//And not only this, a window object and this keyword is created
//and are added to the global space.

//on the global level/context, 'this' points to windows object

//every Javascript engine anywhere, be it in Node or chrome or safari or firefox creates a global object,

//In Chrome: 'window' keyword
// In Safari: 'window'
//in firefox: 'window'
//in Node: 'global'


// if you do, this === window in console, it throws true 

//'this' inside a functional scope, points to something
// inside that scope, in GEC, 'this' refers to Windows



// when you declare a variable or function in the global scope (outside of any function or block), 
// it becomes a property of the global "window" object by default. 
// This means that you can access those variables and functions using the "window" object.


var myVar= 35;

function func(){
    console.log("Hello Bhai log!")
}

console.log(window.myVar);
console.log(this.myVar)
console.log(myVar)
console.log(this === window)


//shadowing

let x= 45;

{
    // var x= 56; // an't do this, cz here var is not inside a function, so here its scope is global,
    // and inside same scope, can't re-define a 'let' variable
}

{
    let x= 54;   // can do this
}




