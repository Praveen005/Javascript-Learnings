console.log("Hello world!")

//Javascript was introduced in EcmaScript 2015
//it is just a syntactical sugar, to make things easier to comprehend and read, even if it is removed it won't have any affect on the functioning of the language

//Unlike c++/Java, in JS, all inheritance happens through prototype and not classes

//classes just make it look like c++, but the underlying behaviour will not change


class person{
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    //we don't use function keyword when creating a function inside

    isAdult(){
        return this.age >= 18;
    }
};

let p1= new person("Ram", 14);
let p2= new person("Shyam", 34);

//there's no type called 'class'
console.log(typeof person)   //it will be function

//classes are implemented internally in Javascript as function


console.log(p1.__proto__ == person.prototype)
console.log(p1.__proto__)
console.log(person.prototype)
console.log(p1.__proto__.__proto__ == Object.prototype)

//person is a special kind of Object and p inherits from person prototype

//when we create a class, uske sath ek prototype bhi ban jata hai, wo prototype Object.prototype se inherit karta hai,
//and uss class ke jab bhi ham object banante hain to wo uss class ke prototype se inherit karta hai


//Both referencing to the same function
console.log(p1.isAdult == p2.isAdult)

// isAdult() is defined inside person.prototype

//there is no concept of Access Modifier in Js, since there is no concept of class to class inheritance, everything inside constructor is 'public'
//and not private or protected




//super keyword allows you to call the constructor of the superclass and access its methods or properties. 

//can't write this.grade before calling super()

//extends ka matlab inherit karwana hota hai
class student extends person {
    constructor(name, age, grade){
        super(name, age) 
        this.grade= grade;
    }
    
}

let s1= new student("Prateek", 23, "A+")
let s2= new student("Sushant", 21, "B+")

console.log(s1)
console.log(s2)
console.log(s2.isAdult())

console.log("===========")
//how are we able to access s1.isAdult() even though there is no class to class inheritance?
//Answer:

console.log(s1.__proto__ == student.prototype)
console.log(s1.__proto__.__proto__ == person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

//inheritance chain
// Object.prototype  -> person.prototype  -> student.prototype


//keep in mind, object person and student ke bich koi inheritance nahi hai
//i.e no inheritance between the classes(they are functions actually)

// Object -x-> person -x-> student

//So remember the inheritance chain is at prototype level and not class to class inheritance
