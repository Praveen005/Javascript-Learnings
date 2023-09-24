let arr= ['Apple', 'Mango', 'guava']

//can access the length like, arr.length    or arr['length']


for (let i=0; i<3; i++){
    console.log(arr[i])
}
arr.push('Kiwi')
console.log('Printing the array using for loop: ')
for(let i=0; i<4; i++){
    console.log(arr[i]);
}

arr.pop();
console.log(arr.length)

//adding element to the front

arr.unshift("Kela")

//remove from the front

console.log(arr.shift()) 

//find index of a particular element

console.log(arr.indexOf('Apple') )


// The indexOf return the very first index where the element matched. On the other hand lastIndexOf returns the last index where the element matched.




// In JavaScript, == and === are comparison operators used to compare two values.

// == performs type coercion, meaning that it converts the operands to the same type before making the comparison. For example:


// 5 == "5" // true , 5 will be coerced to a string
// === performs strict equality comparison, meaning that it compares the operands without type coercion. It only returns true if the operands are of the same type and have the same value. For example:


// 5 === "5" // false
// It's recommended to use === over == whenever possible, as == can lead to unexpected results due to type coercion. However, in some cases, such as when checking for null or undefined, == might be appropriate.




console.log("way 1: Exploring For each loop")

arr2= [1,2,3]

//one way:
//to loop through an array by using the forEach method, you need a callback function (or anonymous function):
arr2.forEach(function(val){
    console.log(val)
});


console.log("way 2: Exploring For each loop")


arr2.forEach(element => {
    console.log(element);
});

console.log("OR")

arr2.forEach(number => console.log(number));

//Optional Parameters
//1: index
//2: The array itself

arr2.forEach((value, index, arr2)=> {
    console.log("Index: " + index + " value: " + value);
})