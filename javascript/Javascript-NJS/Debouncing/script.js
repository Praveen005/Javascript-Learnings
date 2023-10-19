console.log("Shree Ganeshay Namah!!")


//read this for better understanding: https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc


/*

    On each call to the debounce function, a separate timeout variable is created within the scope of that call, and the timeout being cleared is specific to that call.

    To clarify, when the debounce function is called, it returns a new function that encapsulates its own timeout variable. This new function is what you assign to debounceSearch. Each time debounceSearch is called (in response to the keyup event), a new timeout variable is created within that specific call's scope.

    Here's the sequence of events:

        1. First call to debounce:

            Creates a new timeout variable within its own scope.
            Schedules a timeout.

        2. Second call to debounce:

            Creates another new timeout variable within its own scope (completely separate from the previous timeout).
            Schedules a new timeout.
            If the second call to debounce happens before the first timeout fires, calling clearTimeout will only clear the timeout scheduled within the scope of that specific call.


*/

const debounce = (func , delay) =>{
    let timeout;
    
    return function(...args){ //args, stores the key event and its value is, same as that enetered inside the input field at the time keyUp event happens
        // console.log(...args);
        const context= this;
        clearTimeout(timeout);
        //One of the main purposes of .apply() is to specify the this context within a function. 
        timeout= setTimeout(() =>{
            func.apply(context, args) //you're essentially saying, "Hey, onChange, when you run, make sure you have access to the current state of the input entered by the user." Also by paasing the args, we are ensuring that the whole chain of key-event is passed
        }, delay)

    }
}

const onChange= (e) =>{
    console.log(e.target.value);   //mimicking a network call
    // console.log("Api call made!")
}

const debounceSearch= debounce(onChange, 1000); //onChange will be invoked only if the user has stopped typing for say 1000ms, but if the user starts typing again, before 1s expires, it will clear the setTimeout()

const input = document.getElementById("search")
input.addEventListener('keyup', debounceSearch);






/*

    Here are three simple real life examples of debouncing:

        Submit button: When you click a submit button on a website, it doesn’t send the data immediately, but waits for a few milliseconds to see if you click it again. This way, it prevents accidental double submissions and errors.

        Elevator: When you press the button to call the elevator, it doesn’t move immediately, but waits for a few seconds to see if anyone else wants to get on or off. This way, it avoids going up and down too frequently and saves energy and time.

        Search box: When you type something in a search box, it doesn’t show suggestions on every keystroke, but waits until you stop typing for a while. This way, it avoids making too many requests to the server and improves the performance and user experience.


*/
