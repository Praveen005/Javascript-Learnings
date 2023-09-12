function outer(arg1){
    let var1= 10;

    function inner(arg2){
        let var2= 23;

        console.log(arg1, var1, arg2, var2)
        console.log(arguments[0])
    }

    return inner
}

let x= outer('Param1')

x('Param2')


// here first line 13 is executed, then 15 then 7.
// after line 13, the scope of arg1 and var1 should have been finished but after line 15 i.e. in 7, arg1 and var1 also 
// gets printed. why? it should have been deleted na?

// Ans: Whenever a function is born, all the scopes that were available at the birth place of the function are captured by the function and available inside the function till the function exists inside the memory, this is the concept of closure.   

//and this is infinitely nestable, inner function will capture the scope of middle and outer function




// A closure in JavaScript is a function that has access to variables in its outer scope even after the outer function has returned. It is created by returning an inner function from an outer function. The inner function can access variables in the outer function's scope even after the outer function has returned.


console.log('2nd instance: ');

function outer2(arg){
    var1= 10;

    function middle(arg2){
        var2= 23;
        function inner2(arg3){
            var3= 34;
            console.log(arg1, var1, arg2, var2, arg3, var3);
        }
        console.log(arg1, var1, arg2, var2);
        return inner2;
    }
    return middle;
}

let y= outer2('Param-1');
let z= y('Param-2')
z('Param-3')
