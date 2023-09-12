//Javascript allows you to create object without defining a class

//This way of creating object is called JSON object : javascript object Notation
//here we directly created the object without creating any class
var bird= {
    x: 100,
    y: 34,
    color:"blue",
    eggs: ["one", "two", "three", "four", "five"],

    fly: function(){
        // console.log("The Bird is flying.", x, y);  // It will throw error
        console.log("The Bird is flying.", this.x, this.y)
    }
};


//For loop
for(let i=0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}

bird.eggs.forEach(function(value, idx){
    console.log(idx, value);
})

bird.eggs.forEach(function(value){
    console.log(value)
})