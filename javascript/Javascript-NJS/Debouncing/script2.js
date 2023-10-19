//variation of the simple debounce function: implement it with leading and trailing options
//leading mean: invoked immediatetly
//Trailing mean: work as usual
//if both the flags are enabled, then both will happen, immediate invocation and after the specified delay, i.e. Twice

const onChange= (e) =>{
    console.log(e.target.value);
}



const debounce2 = (func, delay, option = {leading: false, trailing: true}) =>{
    let timer;
    let isLeadingInvoked = false;

    return function(...args){
        const context= this;

        if(timer){
            clearTimeout(timer)  //remember, it onl cancels the on going set timeout, the timer is still holding a reference to the timeout 
        }


        if(option.leading && !timer){
            // console.log("Leading triggered!!")
            func.apply(context, args) //function will get invoked immediately
            isLeadingInvoked= true;
        }
        else{
            isLeadingInvoked= false;
        }

        timer = setTimeout(() => {
            if(option.trailing && !isLeadingInvoked){
                // console.log("Trailing Trigered!!")
                func.apply(context, args)
            }
            timer = null;  //once setTimeout is executed, must set it to null, otherwise it will keep pointing to the setTimeout Function, try commenting out and see for yourself

        }, delay);

    }
}

const debounceSearch2= debounce2(onChange, 3000);
const input = document.getElementById("search")
input.addEventListener('keyup', debounceSearch2);