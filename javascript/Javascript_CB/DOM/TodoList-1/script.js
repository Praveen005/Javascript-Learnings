

//TO-DO List with delete

let newtask= document.getElementById('newtask');
let addtask= document.getElementById('addtask');
let todolist= document.getElementById('todolist');

addtask.onclick= function(){
    // todolist.innerHTML += `<li>${newtask.value}</li>`;  // performane degrades, the whole list gets re-added everytime

    //with the following approach the new list item gets added, the whole list don't get refreshed
    let li = document.createElement('li');
    li.innerText= newtask.value //newtask.value, gives the input entered

    let xbtn= document.createElement('button');
    xbtn.innerText= '❌';
    xbtn.onclick = function(event){
        // console.log(event);
        // console.log(event.target); //prints button
        // console.log(event.target.parentElement);  //prints li

        event.target.parentElement.remove();

    }


    li.innerText+= '\t';
    li.appendChild(xbtn);
    todolist.appendChild(li);

    
}