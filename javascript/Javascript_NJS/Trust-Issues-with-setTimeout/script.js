

//The delay of 5000ms doesn't always mean a delay of 5s, it may take longer, depending upon the current situation of the call-stack.

console.log("Start!");

setTimeout(function cb(){
    console.log("Inside the callback!")
}, 5000);

console.log("End!");

//one million lines of code.

/*
once setTimeout is encountered, it registers the callback function to the webAPI environment and attaches a timer to it, the interpreter then gos on to execute the other 1 million lines of code, which say takes 10s, but as soon as timer of 5s expires, the callback function is then pushed to the callback queue. But it will be executed only when the remaining 1 million lines of code gets executed.

This is also known as concurrency model in Javascript.

*/
/*
let's smulate blocking the main thread, can't do by writting 1 million lines of code :)
we will use a while loop.
In JavaScript, the Date.getTime() method returns the numeric value representing the number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time), also known as the "Unix epoch."


*/

let startDate= new Date().getTime();
let endDate= startDate;

while(endDate <= startDate + 10000){
    endDate= new Date().getTime();
}

console.log("While Expires Here!");


/*
what if I do setTimeout(0)?

console.log("Start!");

setTimeout(function cb(){
    console.log("Inside the callback!")
}, 0);

console.log("End!");

output:
Start
End
Inside the callback!


same process, continues, it is not that it will be executed immediately without delay, it will also go to webAPI environment and so on.

This can be particularly useful when you want todefer the execution of a particular function.

*/
