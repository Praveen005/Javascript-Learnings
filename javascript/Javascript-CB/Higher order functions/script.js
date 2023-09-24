//If a language allows you to pass another function as argument or/and allows you to return another function,
//then you can say the language supports higer order fucntions


//in c/c++ you can create a function and use it inside another function but can't return or pass it as argument



function createGreeter(greeting){


    function greet(name){
        console.log(greeting, name())
    }

    return greet;
}

let g1= createGreeter('Good Morning')
let g2= createGreeter('Good Evening')


console.log(typeof g1)

// console.log(g1('Prateek Ji'))
// console.log(g2('Prateek Bhai'))


function getName(){
    return document.getElementById('namebox').value ;
}