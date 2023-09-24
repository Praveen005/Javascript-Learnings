
//A function that takes another function as argument and/or return another function from it.

function x(){
    console.log("Higher Order Function");
}

//'y' is a higher order fucntion, 'x' is the callback function
function y(x){
    x();
}


//Given radius of 4 circles, find their areas:
//This could have been your traditional approach.
const radius = [3,1,2,4];
const calculateArea= function(radius){
    const output = [];

    for(let i=0; i< radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
/*
Now suppose you have to calculate the circumference of the circle
You would have the done the following:
*/
const calculateCircumference= function(radius){
    const output = [];

    for(let i=0; i< radius.length; i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));
/*
Now suppose you have to calculate the diameter of the circle
You would have the done the following:
*/

const calculateDiameter= function(radius){
    const output = [];

    for(let i=0; i< radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));

/*
But This approach isn't good, will likely piss your interviewer off.
You gotta write reusable code

Problem areas:
we are repeating ourselves a lot: instead follow DRY(Don't Repeat Yourself) Principle
This is how your interviewer would want you to write.
*/
const area= function(radius){
    return Math.PI*radius*radius;
}

const circumference= function(radius){
    return 2*Math.PI*radius;
}

const diameter= function(radius){
    return 2*radius;
}

const calculate= function(radius, logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
/*
One thing you might have noticed is, the function calculate() above looks very similar to function map();
see the magic of map() down below: you'll get the exact same output.
So, map does a similar job to what the calculate() above is doing, 
*/

console.log(radius.map(area));
/*
One might argue, that the calculate() takes radius as argument, but map() does, radius.map().
Let's make calculate similar to the map();

Array.prototype.calculate = function(radius, logic){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

now the calculate function will be available to all the Arrays, and we can do:
radius.calucate(area)

*/