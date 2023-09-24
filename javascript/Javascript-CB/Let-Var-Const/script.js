console.log("Shree Ganeshay Namah!!")

//'Let' and 'Const' keywords were introduced in ES6/ECMASCRIPT 2015

var a= 10;
a++;
console.log(a)

let b= 20;
b++;
console.log(b)


const c= 34;

//const don't allow us to reassign the variable
//c++ =>   c= c+1
// c++;  //cant do this, throws TypeError
console.log(c)

//we can create object as const

const obj={
    k1:"abcd",
    k2: 10,
    k3: true
}

//can't do this, throws TypeError
// obj= {a:19}

//But can do this
obj.k4= 345;
console.log(obj)

delete obj.k1;
console.log(obj.k1)  //Gives Undefined

const arr= [1,2,3]

//Array is also basically an object
arr.push(5);
console.log(arr)


//'const' basically means that we can't keep it on the LHS of an assignment operator







console.log("=======Scopes-> var ======")

var myVal= 10;
function alpha(){
    var myVal= 11;

    if(true){
        var myVal= 21; //remember 'var' has functional scope
        console.log(myVal);
    }
    console.log(myVal)
}

alpha();


console.log("----Let----")
let myVar= 10;
function beta(){
    let myVar= 11;

    if(true){
        let myVar= 21; //remember 'let' has Block scope
        console.log(myVar);
    }
    console.log(myVar)
}

beta();


console.log("-----const------")
const myConst= 10;
function gamma(){
    const myConst= 11;

    if(true){
        console.log(myConst)
    }

    if(true){
        const myConst= 21; //'const' also has Block scope
        console.log(myConst);
    }
    console.log(myConst)
}

gamma();


/*

var: Variables declared with var can be RE-DEFINED and reassigned multiple times within the same scope. If you declare a variable using var multiple times within the same scope, the subsequent declarations will override the previous ones.

*/


/*

let: Variables declared with let can be reassigned new values within the same scope, but you CANNOT redefine them within the same scope. If you attempt to redefine a variable declared with let, it will result in a syntax error.

However, you can declare a new variable with the same name in a different block scope

*/

/*

const: Variables declared with const are constants and cannot be redefined or reassigned once they have been initialized. Any attempt to reassign a const variable will result in a syntax error.

*/