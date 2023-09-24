

function x(){
    for(var i=1; i<= 5; i++){
        setTimeout(function y(){
            console.log(i); //reference to 'i'is  passed and before the wait time expires, for loop ends and by that time 'i' becomes 6
            // can be fixed by passing a new copy of 'i'
        }, i*1000);
    }
}

x()

/*
output:

5 times 6

*/

/*
why? why not, 1 2 3 4 5?

It get resolved when we use, let instead of var.

The key difference between var and let in this context is scoping. 
'let' creates a new block-scoped variable for each iteration, while 'var' creates a single function-scoped variable shared across all iterations. After each iteration, a new reference to i is created for let declaration.
This difference has a significant impact on how the callbacks capture and reference the loop variable when used in asynchronous operations like setTimeout.

*/

/*


function x(){
    for(let i=1; i<= 5; i++){
        setTimeout(function y(){
            console.log(i);
        }, i*1000);
    }
}
x()

Another fix:


function x(){
    for(var i=1; i<= 5; i++){
        function close(i){   //every time a new copy of i will be passed,
            setTimeout(function(){ 
                console.log(i);
            }, i* 1000)
        }
        close(i);
    }
}


*/


function a(){
    var x= 23, z= 25;
    return function b(){
        console.log(x);
    }
}

a()();

//whem execution of a completes, 'x' should have been garbage collected, but b() has closure over it, so can't.
//when there are more such closures, more memory get accumulated.
//'z' is garage collected but not 'x'
//at inner console, ek break-point laga do, execution will stop here, now go to console and log x and z, 'x' can be accessed but not 'z'
