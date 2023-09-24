let s1= 'He said, "This is awesome"'

let s2= "He said, \"This is awesome\"" //escaping is necessary if you're using double quotes

let s3= "He said, 'This is awesome'"

let s4= `He said, "This is awesome"`

let s5="This is a \nmultiple line comment"

let s6= `This is another
multiple line comment`

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)


let name= 'Prateek'

let g1= 'good morning ' + name  ;
console.log("Printing g1: " + g1)

let g2= `good morning ${name}`

console.log("Printing g2: " + g2)

let s7= `10 + 2 = ${10+2}`  //you can write a valid js code inside the ${}
console.log(s7)


// ${} will work only with the backticks ``