console.log("Shree Ganeshay Namah!!\n")

let nameObj= {
    firstName: "Praveen",
    lastName: "Kumar",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

nameObj.printFullName();


//here also we want to print the full name
//but we won't use define a seperate function oin this object again
//but we will use the function in fist object defined above

//this concept is called function borrowing
//we can borrow objects from other objects and use the data of some other object
let nameObj2= {
    firstName: "Sachin",
    lastName: "Kumar",
    
}

//the argument inside 'call' is the object to which 'this' keyword in printFullName() will point to
nameObj.printFullName.call(nameObj2);


//generally, when there is any reusable function, we keep it outside the object definition as follows

let nameObj3= {
    firstName: "Aryant",
    lastName: "Raj"    
}

let printFullName2= function(){
    console.log(this.firstName + " " + this.lastName)
}

printFullName2.call(nameObj)
printFullName2.call(nameObj2)
printFullName2.call(nameObj3)

//In the call(obj, arg1, arg2... )
//the first argument is the reference to the 'this' keyword.

//other arguments are the arguments of the functions that we are calling to do the job.


let printFullName3= function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from: " + hometown + ", " + state)
    
}

printFullName3.call(nameObj, "Patna", "Bihar")




console.log(">----------Apply method--------<")

//The only difference between the call() and the apply() is the way we pass the arguments

//the first argument is the refence to the object to which 'this' points to

//the second argument is the list of the arguments to the function
printFullName3.apply(nameObj3, ["Bihta", "Bihar"])





console.log(">----------Bind method--------<")

//Looks exactly as the call method
//but it binds printFullName with the object and returns a copy of that method

let printMyNmae= printFullName3.bind(nameObj2, "Panji", "Goa")

//It creates a copy of printFullName and binds it to the nameObj2 and return a copy of the function

//you can see unlike call() which executes directly, it returns a function which is stored in printMyName

printMyNmae()

//only difference between call() and Bind() is that, call() executes directly whereas Bind() binds to the object and returns a copy of the function, which you can use latter.



