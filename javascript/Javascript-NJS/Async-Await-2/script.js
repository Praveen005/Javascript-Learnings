const tick= Date.now();

const log= (v) => console.log(`${v} \n Elapsed: ${Date.now()-tick}`);

//Basic

const getFruit= async(name) =>{
    const fruits = {
        Pineapple: '🍍',
        Peach: '🍑',
        Strawberry: '🍓'
    }
    return fruits[name];
    
}
/*

Had we not used async keyword, we would have the following way to return a promise:

return Promise.resolve(fruits[name]);

But async doesn't do only that, but also sets the context to use await keyword.
The real power of async keyword comes when you combine it with Await keywrd to pause the execution of a function.

*/


//Async + Await
//Await is like: "Pause the execution of the fucntion until the getFruit promise resolves to a value, in which case we can use it as variable 'a'"


const makeSmoothie = async() => {
    const a= await getFruit('Pineapple');
    const b= await getFruit('Strawberry');

    return [a, b];
}

makeSmoothie().then(console.log);
makeSmoothie().then(log);


//It is kind of difficult to share result values between multiple steps in the promise chain
//Using Promises, the above will look like below
//we are waiting for the pineapple to resolve and waiting for Strawberry afterwards
//But we could get both these things at the same time, using await


const makeSmoothie2 = () =>{
    let a;
    return getFruit('Pineapple')
    .then( v =>{
        a= v;
        return getFruit('Strawberry');
    })
    .then( v => [a, v]);
}

makeSmoothie2().then(console.log);



/*

var S= ['a', 'b'];
console.log(S);      //Gives: (2) ['a', 'b']
console.log(`${S}`)  // a,b

why are the outputs, different ?


Reason:

When you use console.log(S), it directly logs the array S to the console as an array.

When you use template literals (the ${} syntax) to embed an array into a string, JavaScript implicitly calls the toString() method of the array to convert it to a string.




*/