console.log("======Hello World!=========")

//let's call a fake download function
//Done is a callback function here

//What exactly happens here:
// 1. fakeDownload function is called
//2. timer of 1 sec is set
// 3. after a sec, Done() function is called
//4. It prints the console message and then logs the downloaded data to the console.
function fakeDownload(Done){
    setTimeout(function(){
        let downloadedData= "some data that we ripped off the web"

        Done(downloadedData)
    }, 1000)
}

fakeDownload(function(data){
    console.log("we have downloaded the following data --->")

    console.log(data)
})


//this function returns a promise
//'correct' is aboolean here to handle the resolve and reject cases
function fakeDownloadPromise(correct){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let downloadedData= "Downloaded some data from the Internet";
            console.info("The downloading has completed!")
            if(correct){
                resolve(downloadedData)
            }
            else{
                reject(new Error("Couldn't download the file"))
            }
        }, 1000)    
    })
}



//when the 'resolve' function is called the function inside the then() function is called when the 'reject' function is called then the 
//function iside the catch() fucntion is executed
fakeDownloadPromise(false).then(function(data){
    console.log("Here is the data that we downloaded:  \n")
    console.log(data)
}).catch(function(err){
    console.log(err)
})

//see, catch function you always have to execute as error can occur anytime and you have to flash an error message.
//But it is possible that, you don't want to do anything with the downloaded data 1-sec later but you may want to deal with it 10 sec later
//we can use a defered 'resolve'

let downloaded= fakeDownloadPromise(true);

downloaded.catch(function(err){
    console.log(err);
})

setTimeout(function(){
    downloaded.then(function(data){
        console.info("Here is the data that has been downloaded:\n")
        console.info(data)
    })
}, 3000)