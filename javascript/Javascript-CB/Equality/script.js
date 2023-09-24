console.log(1== '1') //True //abstract equality comparison
console.log(1=== '1') //False //strict equality comparison, checks whether they are of same datatype and values or not

//check the article on mdn about equality and sameness
//in abstract equality comparison, Type Conversion takes place, here '1' will get converted to number

console.log(0 == '') //True //when you convert an empty string to a number you get 0


console.log('false' === false) //converts both to number and compares, gives false

console.log(Number('false')) //Gives NaN(not a number)
console.log(Number(false)) // 0

console.log('' == false) //True, both typecasts to zero

// any whitespace when typecasted is equal to zero

console.log('\n' == 0) //true
console.log('\t' == 0) //true
console.log(' ' == 0) //true



console.log('\n' == '\t') //false
//following doesn't hold good for abstract comparison
// a==b, b==c ==> c==a


console.log([1,2] == [1,2]) //false , values inside might be same but they both refer to different arrays, no typecasting and shit happens here
// reason: 
//In js it is 'Pass by value' in case of primitive data(string number boolean)
// but is passed by reference in non-primitive data like array and objects

let arr= [1,2];

let arr2= arr;

let arr3= [1,2];
console.log(arr2 == arr)//true
console.log(arr == arr3) //false


//so, if two non-primitive data (say object) are coming equal, means they are the same object and has the same reference