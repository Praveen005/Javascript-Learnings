// what we achieved in classes section, i.e. constructor and all came only after ECMASCRIPT 2015

//Classes are all Syntactical sugar and we can do away with it without actually hampering the function of JS

//earlier the same used to be achieved using the following way:

//1. jo functions ko ham class ki tarah use karenge unko ham capital letter se likhte the
//jinko function ki tarah unko small letter se

//Javascript is backward compatible, so purana tarika bhi chalta hai abhi

function Person(name, age){
    this.name= name
    this.age= age
}

let p1= new Person("Ganesh Ji", 35);
console.log(p1)

console.log(p1.__proto__== Person.prototype)

console.log(Person)




function Student(){

}


//agar ham chahe ki student ka prototype Person ke prototype se bane to that's not gonna happen unlike in ES6 with classes, check below

//There is a more complex way to achieve that, which is no longer required
Student.prototype= Object.create(Person.prototype)
console.log(Student.prototype.__proto__ == Object.prototype) //will give false.


class Fruit{
    constructor(taste, price){
        this.taste= taste;
        this.price= price;
    }
};


class GoodFruit{
    constructor(){

    }
};

GoodFruit.prototype= Object.create(Fruit.prototype)
console.log(GoodFruit.prototype.__proto__ == Object.prototype)