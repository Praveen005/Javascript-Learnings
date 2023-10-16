console.log("Shree Ganeshay Namah!!")

//we will learn two ways to curry our function
//1. using bind()
//2. using closure

/*
    Function currying in JavaScript is a technique where a function that takes multiple arguments is transformed into a series of functions, each of which takes a single argument. It's named after the mathematician Haskell Curry

    The process of function currying involves breaking down a function that expects multiple arguments into a sequence of functions, each accepting one argument, and returning another function that takes the next argument until all arguments have been provided. When all arguments are supplied, the final function in the sequence performs the intended operation and returns the result.

    In simple terms, in currying we return a function for each function invoked which excepts next argument inline. With the help of currying we can transform a function with multiple arguments into a sequence of nesting functions.

    sum(1, 2, 3, 4)
    sum(1, 2, 3)(4)
    sum(1, 2)(3, 4)
    sum(1)(2)(3)(4)

    All should return 10

*/


let multiply = function(x, y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2) //x will assume the value 2

multiplyByTwo(5) // y will become 5


let multiply2 = function(x){
    return function(y){
        console.log(x*y)
    }
}

multiply2(2)(3);

//implement the currying function for 4 arguments.
/*

    sum(1, 2, 3, 4)
    sum(1)(2)(3)(4)
    sum(1, 2)(3, 4)
    sum(1, 2, 3)(4)
    sum(1)(2, 3, 4)

    all should return 10
*/

const sum =(...args) => {
    const storage = [...args];

    if(storage.length === 4){
        return storage.reduce((a, b) => a+b , 0);
    }
    else{
        const temp = function(...args2) {
            storage.push(...args2); // don't do storage.push(args2), will psh all combines as string
            if(storage.length === 4){
                return storage.reduce((a, b) => a+b , 0);
            }
            else{
                return temp;
            }
        }
        return temp;
    }
}

const res1 = sum(1, 2, 3, 4);
const res2 = sum(1)(2)(3)(4);
const res3 = sum(1, 2, 3)(4);

console.log(res1, res2, res3)


//update the code to return the value when invoked with empty arguments.

const sum2 = (...args) => {
    //spread the arguments in storage array
    const storage = [...args];
    
    //base case
    //if we have reached the limit
    // if(storage.length === 4){
    //   return storage.reduce((a, b) => a + b, 0);
    // }

    if(storage.length === 0){
        return 0;
    }
    //other wise return a function
    else{
       const temp = function(...args2){
            storage.push(...args2);
            if(args2.length === 0){
                return storage.reduce((a, b) => a + b, 0);
            }
            else{
                return temp;
            }
      }

      return temp;
    }
  }

  let result = sum2(1)(2)(3)();
  let result2 = sum2(1, 2)(3)(14)();
  let result3 = sum2(1, 2, 3)(14)();
  console.log(result, result2, result3)

  const val= 1 + '2'
  console.log(val, typeof val)