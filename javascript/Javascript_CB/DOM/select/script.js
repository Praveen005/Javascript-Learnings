console.log("Shree Ganeshay Namah!!\n")



console.log(document.getElementsByTagName('p'))

console.log(document.getElementsByClassName('para'))


console.log(document.getElementById('inpbox'))

let p2= document.getElementsByClassName('para')[1];

console.log("---> ", p2.innerHTML);
console.log("---> ", p2.outerHTML);
console.log("---> ", p2.innerText);

//can change the data inside the p2.
p2.innerText="Some other data for our Paragraph";
console.log("---> ", p2.innerText);

p2.innerText="Some other <b>data</b> for our Paragraph";
console.log("---> ", p2.innerText);   //wont turn bold

p2.innerHTML= "The text <b>is Bold</b> here.";
console.log(p2.innerText);  //<b></b> converts to bold text.

console.log(p2.getAttribute('class')); //gives you the class name of p2
console.log(p2.getAttribute('id')); //gives you the id of p2

p2.setAttribute('contenteditable', true); //p2 will bece editable
p2.setAttribute('spellcheck', false);

console.log(p2.outerHTML);


let i= document.getElementById('inpbox');

console.log(i.innerText);   //if you type inside the input box, it won't get printed this way.

console.log(i.value)

i.value="Enter the text here!"

i.setAttribute('type', 'email');

console.log(i.validity); //if its not email, it will show, type mismatch: true

console.log(i.validity.typeMismatch);


let btn= document.getElementById('btn');

btn.innerHTML= "<i>Italic Button!</i>"
