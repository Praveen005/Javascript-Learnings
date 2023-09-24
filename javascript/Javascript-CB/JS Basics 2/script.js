c= 10; //global scope
var d= 20; //function scope
let e= 34;  //Block scope


function fun(){
    let a= 5;
    // let b= 10;

    if(a===5){
        let b= 10;
        var s= 23;
        f= 100; // has the global scope 
        // console.log('Inside ', b);
        console.log('Inside ', s);
        console.log('Inside ', f);
    }

    // console.log('Outside the Block', b);  //Reference error
    console.log('Outside the Block', s);  //Var has function scope
}
fun();

console.log("In global scope ", f)


function square_root(n){
    return Math.sqrt(n);
}

console.log(square_root(3));


// func2() // uncaught TypeError

var func2= function(){
    console.log("Inside the second function")
}

// func2()
