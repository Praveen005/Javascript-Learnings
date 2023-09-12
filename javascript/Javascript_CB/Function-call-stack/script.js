console.log("Shree Ganeshay Namah!!\n")

function ceo(){
    console.log("Let's make a dent in the Universe.")
    cto();
}

function cto(){
    console.log("Let's make a game changing product.")
    vpEngg();
}

function vpEngg(){
    console.log("Let's make a Javascript framework.")
    techLead();
}


function techLead(){
    console.log("Let's port Angular to Typescript.")
    developer();
}

function developer(){
    console.log("Let's copy some code from StackOverflow.")
    throw new Error("The code didn't work as expected.")
}

ceo()

//call stack:

//ceo() at the bottom, then cto(), then vpEngg(), then techLead(), then developer()

//In JavaScript, the throw keyword is used to manually generate an exception or error. It allows you to throw custom error objects or built-in error objects to handle exceptional situations in your code.

//by throwing custom error in developer(), from the error message we can see the call stack.

//baki you know well about the call stack