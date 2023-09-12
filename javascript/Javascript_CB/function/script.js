console.log(beta())

function alpha(){
    return 'A'
}

function beta(){
    return 'B'
}

let gamma= function(){
    return "C"
}

// console.log(zeta())   //reference error

let zeta= function(){
    return 'Prateek'   
}



//In some languages calling a function before defining it works in some it doesn't 
//In JS, you can call it before
//why?

//when Javascript is executed, it happens in a two pass way,
// Interpreter will go through this code once, your function definitions are stored and then it will 
//actually execute the lines.

//Until and unless, function definition is stored in the memory, you can't call the the beta() obviously

//This concept is called hoisting, interpreter takes all the function defitions and stores them at the top


//Var based declarations (not functions) are hoisted, other executable lines stored in queue

//Hoisting does affect the performance


//if a function has been declared using let keyword then you can't use it before declaration.
// it will give Uncaught ReferenceError




//Polymorphism
//In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism. 

function area(height, width){
    if(!width){
        return Math.PI*height*height;
    }

    //or

    if(width === undefined){
        return Math.PI*height*height
    }
    return height*width
}


console.log('Area 3, 4', area(3, 4))

console.log('Area= ', area(4)) //height will be passed =4 and width= undefined, code will run fine though

//0 null undefined also act as false


//if you redefine the function, the earlier one gets redefined

//if I define a function with two arguments and I pass two arguments, then can I access the 2nd argument?
//all the arguments that are passed in a function are available in a array called arguments



function hello(){
    console.log('Hello World! ' + arguments[0] +arguments[1]);
}


hello(1,2)



//Arrow function:

/*

In JavaScript, an arrow function is a concise syntax for creating functions. It was introduced in ECMAScript 2015 (ES6) as a shorthand alternative to traditional function expressions.

The syntax for an arrow function looks like this:

(parameter1, parameter2, ...) => { 
  // function body 
};




*/


function sum(a, b){
    console.log(a+b)
}

sum(4, 5);

//equivalent arrow function:

var sum2= (a, b) => {
    console.log(a+b)
}

sum2(8, 7)

//or

var sum3 = (a, b) => console.log(a+b)
sum3(99, 23)

function isPositive(n){
    console.log(n >=0)
}
isPositive(45)

//equivalent arrow function

let isPositive2 = (n) => {
    console.log(n >=0)
}

isPositive2(-76);

let isPositive3 = (n) => n>=0;
console.log(isPositive3(67))
//when you have just 1 parameter, you can remove the parenthesis

let isPositive4 = n => n>=0;
console.log(isPositive4(-65))



function randomNumber(){
    console.log(Math.random());

}

randomNumber();

let randomNumber2 = () => {
    console.log(Math.random())
}

randomNumber2();





class Book{
    constructor(name){
        this.name= name;
    }


    printArrow(){
        setTimeout(()=> {
            console.log("Arrow function: " + this.name) //this points to Book object, one advantage of Arrow function
        }, 100)
    }

    printFunction(){
        setTimeout(function(){
            console.log("Function: " + this.name)  //redefines this, and hence no longer refering to Book object
        })
    }
};

let book1= new Book("HCV")

//below, printArrow() prints whereas, printFunction() doesn't
//Unlike regular functions, arrow functions do not redefine their own 'this' value. Instead, they inherit the 'this' value from the enclosing scope.

book1.printArrow();
book1.printFunction();

const obj = {
    name: 'John',
    regularFunc: function() {
      console.log('Regular function: ' + this.name); // 'this' refers to the 'obj' object
    },
    arrowFunc: () => {
      console.log('Arrow function: ' + this.name); // 'this' refers to the global object (e.g., 'window')
    }
  };
  
  obj.regularFunc(); // Output: Regular function: John
  obj.arrowFunc();   // Output: Arrow function: undefined
  