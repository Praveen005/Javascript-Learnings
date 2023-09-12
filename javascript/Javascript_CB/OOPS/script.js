//Javascript allows you to create object without creating any class

//One way of creating Javascript object (JASON: Javascript object Notation)
let car = {} //empty car object
let bird= {
    x: 100,
    y: 20,
    color: "Blue",
    eggs:["One", "Two", "Three"],  

    //It can also have some methods

    fly: function(){
        console.log('The Bird is Flying at ', this.x, this.y);  // This refers to the current object
    }
};  

//iterating over the birds array

//for loop
for(let i=0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i])
}


//for each loop

bird.eggs.forEach(function(value, idx){
    console.log(idx, value);
});



//this way of declaring a function is called function declaration
function func(){
    console.log('Hello World!')
}

//Function expression : Not Hoisted
let func2= function(){
    console.log("Hello Ji!")
}



//ANother way to create an object

//another way
function Fruit(taste, color){
    this.color= color;
    this.taste= taste;
}

//new keyword
let mango= new Fruit("Sweet", "Yellow");
let orange= new Fruit("Sour", "Orange");  


//one way
var apple={
    taste: "Sweet",
    color: 'Green',
}


//In ECMAScript 2015, another way was introduced, using class keyword

//Class Declaration: Hoisted
class FruitClass{
    constructor(taste, color){
        this.color= color;
        this.taste= taste;
    }
}; 

let kiwi= new FruitClass("Sour", "Brown");

//Class expression : won't get Hoisted
let FruitClass2= class{
    constructor(taste, color){
        this.taste= taste;
        this.color= color;
    }
};

let kiwi2= new FruitClass2("Sour", "Green");