let name1 ={
    firstName: "Praveen",
    lastName: "Kumar",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

name1.printFullName();

//Suppose we have another object say 'name2'


let name2 = {
    firstName: "Prateek",
    lastName: "Kumar"

    //now suppose, we want to print full name again like above, so it's not prudent to define the function again, but rather we can use the above defined function

    //we can do function borrowing: borrow functions from other objects
}

// function borrowing

name1.printFullName.call(name2) // `this` inside the name1 is pointing to the name2

//we normally don't keep the function that is to be reused inside an object

function printFullName2(){
    console.log(this.firstName + " " + this.lastName)
}

printFullName2.call(name1)
printFullName2.call(name2)

//now suppose we have some parameters that are to be passed to the fucntion

//the first parameter will always be the this reference to the function and all other would be the parameters for the fucntion

function printFullName3(homeTown, state){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state)
}

printFullName3.call(name1, 'Gaya', 'Bihar');



//apply() method:

//Only difference between the call and the apply method is the way we pass arguments

printFullName3.apply(name2, ['Varanasi', 'UP'])  //we are using list to pass the arguments



//bind method()

//looks the same as the call() method, but instead of calling the printFullName4() method directly, it binds the method with the object and rerturns as the copy of that method

let printMyname = printFullName3.bind(name2, 'Kota', 'rajasthan') //it will bind the fucntion printFullName3 with the name2 object a return a copy of the function
//catch here is, it doesn't directly calls the function but rather returns the method to be called later
console.log(printMyname)

printMyname();


//do read about: polyfill for bind, function currying