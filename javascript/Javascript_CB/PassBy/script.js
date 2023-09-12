// In JavaScript, primitive types such as numbers, booleans, and strings are passed by value, while objects (including arrays) are passed by reference(not exactly, check below.).
var quidditchWinner= "Harry Potter"

function changeWinner(winner){
    winner = 'Draco Malfoy'
}

console.log("The winner is " + quidditchWinner);

changeWinner(quidditchWinner);

console.log('The winner is ' + quidditchWinner)

//note above, the value of the variable 'quidditchWinner' didn't change as it was passed by value.


var quidditchWinners= ['Harry', 'Ron', 'Hermoine']

function changeWinners(winners){
    winners[0]= 'Draco'
    winners[1]= 'Crabble'
    winners[2]= 'Pansy'
}


console.log('The winners were ' + quidditchWinners);
changeWinners(quidditchWinners);
console.log('Now the winners are ' + quidditchWinners);

//this may look like it has been passed by reference, but no Javascript always passes by value.
//quidditchWiners refers to some 'x' which in turn points to the values of the array
//when we pass the 'quidditchWiners' as argument, it actually passes the value of 'x'
//'x' is reference to array
