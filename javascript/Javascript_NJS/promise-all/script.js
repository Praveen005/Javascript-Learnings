//If there are multiple promises and we are to group them together, we can do as follows:
//if you don't want to keep using the .then() .then() ...
//The third(or more) parameter in setTimeout() is optional and allows you to pass arguments to the function specified in the first parameter when it is executed. 

//we'll use Promise.all();
const promise1= Promise.resolve("Hello World!");

const promise2= 12;
const promise3= new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "GoodBye");   
})

const promise4= fetch("https://jsonplaceholder.typicode.com/users"). then((res) =>{
    return res.json();
});

Promise.all([promise1, promise2, promise3, promise4]).then((values)=>{
    console.log(values);
});
