console.log("Jai Shree Ram")

var a=10;
function print(){
    var b= 19;
    console.log(a)
}
// console.log(b)    //can't access here
print();

function count(){
    var initial= 1;

    return function(){
        console.log(++initial)
    }
}

var c= count()
c();
c();

//when any function is define inside any other function
//all the variables which are available in the local scope of the outer function
//is going to be available to the inner functions

//when the functions get the scope of its outer function is called closure scope





//It means any argument that I give to this outer function is also available to the closure scope
function counter(val){
    function plus(){
        console.log(++val)
    }

    return plus;
}

var d= counter(5);
d();
d();



function createCounter(initVal, deltaVal){
    //returning an object
    return {
        //defining functions inside the object
        up(){
            initVal += deltaVal;
            console.log(initVal)
        },

        down(){
            initVal -= deltaVal;
            console.log(initVal);
        }
    }
}

var c= createCounter(10,2);
c.up();
c.down();



