//Variables
const nextQuote= document.querySelector('.newQuoteBtn');
const quoteText= document.querySelector('.blockquote-text');
const speakerName= document.querySelector('.speaker-name');
const newQuoteBtn= document.querySelector('.newQuoteBtn');
const tweetBtn= document.querySelector('.tweetBtn');
const whatsAppShareBtn= document.querySelector('.whatsAppShareBtn');
const instagramShareBtn= document.querySelector('.instagramShareBtn');


nextQuote.onclick = function(){

    const randomIndex= Math.floor(Math.random()*quotes.length);
    console.log(randomIndex, quotes[randomIndex].author);
    
    quoteText.innerText = '"' + quotes[randomIndex].text + '"';
    

    speakerName.innerText = '-' + quotes[randomIndex].author;
}



/*
The Math.floor() function in JavaScript is used to round a number down to the nearest integer that is less than or equal to the original number. 

*/