

let str= 'Asdp' //3 steps from null
let num= 233    //3 steps from null
let bool = true;    //3 steps from null
let arr= [1,2,3,4,5];   //3 steps from null
let obj= {a:20, b: 'ASERT'}  //2 steps from null
let fun= function(){console.log('asdf')}    //3 steps from null

//if x and y are non-primitive datatypes
// x== y : true   <-- what does this mean?
//This means they are the reference to the same object in the memory


// It is a function that converts to string
//All the following are functions that can be called to make instances of diffent data types
console.log("=======types=======")
console.log('Typeof String', typeof String);
console.log('Typeof Number', typeof Number);
console.log('Typeof Array', typeof Array);
console.log('Typeof Object', typeof Object);
console.log('Typeof Boolean', typeof Boolean);
console.log('Typeof Function', typeof Function);


console.log(Array('true')) //creates an array
console.log(Array('asdf'))
console.log(Array(1)) // creates an array of size 1, will be an empty array unlike above

let x= Array(1);
x[0]= 'prateek'
console.log(x)

console.log("=======proto chain=======")
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

//from above we can say, everything inherits from the same thing as the obj is inherited from
// => everything in javascript is esentially an object

console.log("=======prototypes=======")
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(fun.__proto__ == Function.prototype)

//String.prototype inherits from string.protoype


console.log(typeof Object.create(Boolean.prototype))

//Two items can have the same proto but their typeof won't be same
//yahan, x bhi Boolean.prototype se inherit hua hai
//and bool bhi Boolean.prototype se inherit hua hai
//but 'x' object hai and 'bool' is a 'Boolean', beacuse x has been created using Object.create()

let y= Object.create(Boolean.prototype)

console.log(y.__proto__ == bool.__proto__)

console.log(typeof x.__proto__)
console.log(typeof bool.__proto__)

console.log(typeof x)
console.log(typeof bool)

//Object.create() ke andar jo bhi daalo, objects hi bante hain


//like in c++ classes are a blue print to make objects, here
//prototypes are used as blueprints to make things.
//like String.prototype is the blueprint using which we make strings
//similarly for Numbers, Boolean etc.

// __proto__ is the hidden pointer which points to the blueprint from which it was created 


//aap ek object to dusre object ke blueprint ki tarah bhi use kar sakte ho, using Object.create()



str= "abcd";
str2= "prateek"

console.log(str.charAt == str2.charAt) //true
//above true means, they are getting inherited from the same place.

str.charAt = function(){ return 'x'} //can't be re-defined in JS


console.log(str.__proto__.charAt)

console.log(String.prototype.charAt)


//means, .protype pe jake default definition alter kar sakte ho.
String.prototype.charAt = function(){return 'x'}  //now possible

console.log(str.charAt(3))  //prints 'x'
console.log(str.charAt(2))  //print 'x'


//String.prototype contains all the default string functions
//like charAt, slice, indexOf etc.


Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join= function(){
    console.log("Join called on ", this)
    return this.joinOriginal(...arguments)
}
