//suppose we want to create multiple fruits, so we will have to create a Fruit class
//second way
 function fruit(taste, color){
    this.color= color;
    this.taste= taste; 
 }

 //creating fruit using 'new' Keyword
 let mango = new fruit("sweet", "yellow")
 let orange= new fruit("sour", "orange")


 //one way
var apple={
    taste:"Sweet",
    color:"Red",
};

//Third Way: using 'class' keyword(ECMA, 2015)
//Class Declaration
class fruitClass{
    constructor(taste, color){
        this.color= color;
        this.taste= taste;
    }
};

let kiwi= new fruitClass("sour", "green");

//Class Expression
let fruitClass2 = class{
    constructor(taste, color){
        this.taste= taste;
        this.color= color;
    }
};

let avocado= new fruitClass2("sour", "blue");

