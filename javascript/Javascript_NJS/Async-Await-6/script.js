
const API_URL= "https://api.github.com/users/Praveen005"

async function handlePromise(){

    const data= await fetch(API_URL);

    const jsonValue= await data.json();

    console.log(jsonValue);
}
// handlePromise();

/*
Fetch is promise-based API
Fetch return a response object, which returns a readable stream and want to convert to JSON, we use .json() nad this .jason() again return a promise, when this gets resolved, it gives us the json value
*/


//Error handling:
const API_URL2= "https://api.github.com/users/Pr-aveen005"

async function handlePromise2(){

    try{
        const data= await fetch(API_URL2);
        const jsonValue= await data.json();
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
}
handlePromise2();


//another way of handling error
const API_URL3= "https://invalidHost/users/Praveen005"

async function handlePromise3(){
    
    const data= await fetch(API_URL3);
    const jsonValue= await data.json();
    console.log(jsonValue);    

}
handlePromise3().catch(err => console.log(err));



// response.ok checks if the HTTP status falls within the range of 200-299, indicating a successful response.


//async-await vs promise.then().catch()
//asyn-await is just a syntactic sugar