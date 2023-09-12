console.log("Shree Ganeshay Namah!!\n")

//Async and Defer are boolean attributes which are used along with script tags to load the external scripts efficiently into our webpage 

//It basically deals with how Javscript code loads

//how does Html parsing happens?
//It executes top to bottom, as soon as it encounters a file (say an image) that needs to be downloaded
//it immediately sends that file to be downloaded and continues the parsing of HTML


//But what happens when while parsing it encounters a script file?
//It immediately stops parsing and starts downloading the script file
//and wait untill the script is downloaded and executed.

//that is why most of the time you see the script src tag at the bottom of the HTML, jsut so it reders all the html and images etc.


/*
Normally this happens:

-->--Parsing HTML--->--Encounters Javascript file ---->HTML Parsing stops --->---Script file starts Downloading--->--Script file execution starts after its download--->--after completion, HTML Parsing again resumes-->--

*/

/*
with Async:

-->-- Parsing HTML --->-- Encounters Javascript file ---->-- HTML Parsing continues, Script file also starts Downloading --->-- once downloaded, HTML Parsing stops --->-- Script file execution starts --->-- after execution of script file completes ---->-- HTML Parsing again resumes -->--


If there are multiple script files, then it downloads in a random order, which you may not always want, hence there is a third way.

*/

/*

with Defer:

1. Html parsing starts
2. Script file download starts as soon as it is encounteredd, in parallel the parsing continues.

3. Once script downloaded, it waits for the html redering to complete

4. once HTML parsing stops, execution of the script file starts


it is the most useful one, as it allows to run the javascript files in order

*/


/*
so, when we put script file at the bottom of the html body, we intend to, load the html content first and then reder the script.

because normally, when the script files are encountered, html redering stops untill the script is downloaded, parsed and executed which may take lot of time.

so using defer is generally wise, as it is best of both worlds.

*/