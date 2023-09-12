obj1={
    a:10,
    b:20,
    c:34,
}

obj2= Object.create(obj1);

console.log(obj2) //prints an empty object
console.log(obj2.a, obj2.b, obj2.c) // but can acces the values, if these things don't exist in obj2, how are they getting printed?
//This is inheritance


console.log(obj1 == obj2) //false



//never use __proto__ keyword in production code, used only for debugging purposes

console.log(obj2.__proto__) //prints the data in obj1

console.log(obj2.__proto__ == obj1) //true

//__proto__ points to the field jisse obj2 bana, which is obj1

/*
obj2.a --> it will try to find out in obj2
       --> if not found,
       --> will try to find in obj2.__proto__
       --> if not found,
       --> it will try to find out in obj2.__proto__.__proto__
       --> and so on..
       --> till .__proto__ becomes null

       --> har object ki inheritance chain kahin na kahin jakar null ho jati hai
*/


console.log(obj2.__proto__)
console.log(obj2.__proto__.__proto__)
console.log(obj2.__proto__.__proto__.__proto__) //null


obj2.p = 'abd'
obj2.q= 'jku'
obj2.r="dtyu"

let obj3= Object.create(obj2);

console.log(obj2)

console.log(obj3) //it conains nothing but can still access the values of obj1 and obj2
console.log(obj3.a)  //ye isse obj3.__proto__.__proto__ me milta hai
console.log(obj3.p) //ye isse, obj3.__proto__ me milta hai

console.log(obj3.__proto__.__proto__ == obj1)  //true
console.log(obj3.__proto__ == obj2)  //true



/*


if we define 'a' in obj3, will it overshadow 'a' from obj1?
ans: yess

*/


obj1.a++ //makes it 11

console.log(obj1.a)
console.log(obj2.a) //11

//now if we do,
obj2.a++;
// it will do , obj2.a= obj2.a(follows proto searching) +1 //but assignment jo '=' ki wajah se ho raha wo current object me hoga na ki iske proto me
console.log(obj2)
console.log(obj1.a) //still 11
console.log(obj2.a) // 12

// so we follow proto logic only when we are reading and not while writing




//this was Protoype based inheritance: ek object doosre object ka inheritance ban jata hai, kisi object to as a prototype use karke ham doosra object banate hain



