/*
map:

map() is used to transform an array: like, doube, tripple, Binary form
double: [10,2,6,4,12]
tripple: [15,3,9,6,18]
Binary: ["101", "1", "11", "10", "110"]

*/
const arr= [5,1,3,2,6];

function double(x){
    return x*2;
}

function tripple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const output= arr.map(double);  //it will run the function on each and every value of the array
console.log(output);

const output2= arr.map(tripple);
console.log(output2);


const output3= arr.map(function binary(x){
    return x.toString(2);
});
console.log(output3);

/*
Filter function is used to filter values in an array.

like you have to filter even/odd values from an array or say >4, say divisible by 3 etc..

*/

const arr2= [5, 1, 3, 2, 6];
//filter odd values

function isOdd(x){
    return x%2;
}

const output4= arr2.filter(isOdd);
console.log(output4);   


const output5= arr2.filter(function isEven(x){
    return x%2 === 0;
});
console.log(output5);  

const output6= arr2.filter((x) => x >4 );  //used arrow function, can remove return as well if it is single line.
console.log(output6);


/*
reduce();

It actually doesn't reduce anything.

It is used in a place where you have to take all the values from an array, and come up with a single value out of them.
    sum of all the elements in the array
    Max inside this array

*/

//Non-functional way to do:

function findSum(arr){
    let sum= 0;
    for(let i=0; i<arr.length; i++){
        sum= sum+ arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output7= arr.reduce(function(acc, curr){ //Parameters are: accumulator and current
    acc = acc+ curr;
    return acc;
}, 0);
console.log(output7);
/*
reduce() function iterates over every element of the array, 'curr' or current represents the values of the array
and 'acc' the accumulator accumulates the values present in the array
acc :: sum
curr :: arr[i]

see, accumulator(acc) here is mimicking 'sum' variable, so it must also be initialized with a value, this is what the 2nd parameter to the reduce() does. 
*/

//find max inside the array
//traditional/non-functional way:

function findMax(arr){
    let max= 0;
    for(let i= 0; i< arr.length; i++){
        if(arr[i]> max){
            max= arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

//Using reduce():
//the 2nd argument of the reduce() is the initial value of the accumulator
//let's assume hat, all the values in array are grater than 0;
//'acc' will act as max now
//remeber 'acc' and 'curr' are just names, can write anything
const output8= arr.reduce(function(acc, curr){
    if(curr > acc){
        acc= curr;
    }
    return acc;
}, 0);

console.log(output8);



//more examples of map()

//suppose this is some data coming from an API:
// an array called users, where each element in the array is an object representing a user with properties like firstName, lastName, and age. 
//TASK IS TO FIND OUT THE LIST OF FULL NAMES OF ALL THE USERS
//List of full names:
// ["Prateek Kumar", "Praveen Mishra", "Pratyush Babu", "Tunu Bhaiya"]
const users= [
    {firstName: "Prateek", lastName: "Kumar", age:24},
    {firstName: "Praveen", lastName: "Mishra", age:23},
    {firstName: "Pratyush", lastName: "Babu", age:24},
    {firstName: "Tunu", lastName: "Bhaiya", age:25},
];

const output9= users.map((x) => x.firstName+ " " + x.lastName);

console.log(output9);

/*
Now suppose for the above users array, if we are required to find out how many different age is there and how many users belong to that age.

output: {24: 2, 23: 1, 25: 1}

We will be using reduce(). why?
Given input in an array of objects, and out of the array of objects, we have reduce to just single output object,which would contain, age & count

for the second argument of the reduce fucntion, we will give an empty object, when there is no data present, there would be an empty object.
for 1st user: 
if(acc[curr.age]): means 24 age is present in accumulator or not. If this age is present, increase its count, else initialize to 1
*/


const output10= users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]= 1;
    }
    return acc;
}, {})

console.log(output10);
/*

suppose you have to iterate through an array and you have to come out with a single value, most likely reduce() would be used

*/

/*

Now suppose we have to find out, the first name of all the users whose age is less than 25

*/
//all the users with age less than 25
const output11= users.filter(user => user.age < 25);

console.log(output11);

//first name of all the users with age < 25
//remember we can chain map, filter and reduce, see below
//after getting all the users with age less than 25, we iterated over each one of them using map and printed the first name
const output12= users.filter(user => user.age < 25).map(user => user.firstName);

console.log(output12);


/*

we will normally use map when something is to be done on each element of the array

*/

//The above can also be achieved using reduce();
const output13= users.reduce(function(acc, curr){
    if(curr.age< 25){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output13);