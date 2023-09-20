//await is only used inside an async function
/*
    when you write it ahead of a promise, it resolves it
*/


const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise p1 Resolved Value!");
    }, 5000)
});



//Resolving using .then()
function getData(){

    p1.then((res) => console.log(res));
    console.log("P1 above got resolved using .then() method");
}
// getData(); 


/*
Above JS engine will not wait for the promise to get resolved. It will log into the console and then after 10s, 'res' will be printed.  

In the function down below, JS Engine will wait at line with await.
and as soon as 'val' has a value after promise gets resolved,
both console.log will be printed simultaneously.
*/
//Resolving using await
async function handlePromise(){
    const val= await p1;
    console.log("Hello Bhailog!")
    console.log(val);
}
// handlePromise();


/*
How will the following snippet behave?
Both promises will get executed simultaneously.
*/
//using multiple await
async function handlePromise2(){
    const val= await p1;
    console.log("Inside handlePromise: log 1")
    console.log(val);

    const val2= await p1;
    console.log("Inside handlePromise: log 2")
    console.log(val2);
}
// handlePromise2();

//----------------------------------------------------------


//Using different promises
let p2= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Inside Promise p2: This is Praveen's 2nd promise.")
    }, 10000);
});

let p3= new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Inside Promise p3: This is Praveen's 3rd promise.")
    }, 6000);
});


(() =>{
    setTimeout(() => console.log("inside the IIFE!"), 6000)
})();


//value2 will get logged after 6s
//vale1 after 10s
async function handlePromise3(){
    console.log("1st log inside handlePromise3.")  

    const value2= await p3; //wait 6s
    console.log(value2);

    const value1= await p2;  //wait 10s
    console.log(value1);
}
// handlePromise3();



//value 1 is logged after 10s
//and so will value 2
async function handlePromise3(){
    console.log("1st log inside handlePromise3.")  
    const value1= await p2;  //wait 10s
    console.log(value1);

    const value2= await p3; //wait 6s
    console.log(value2);

}

handlePromise3();