

//TO-DO List with shift

let newtask= document.getElementById('newtask');
let addtask= document.getElementById('addtask');
let todolist= document.getElementById('todolist');

addtask.onclick= function(){
    
    let li = document.createElement('li');

    //add the delete button
    let xbtn= document.createElement('button');
    xbtn.innerText= '❌';
    xbtn.onclick = function(event){
        event.target.parentElement.remove();
    }

    //add the text
    let taskSpan= document.createElement('span');
    taskSpan.innerText= newtask.value;


    //add up button
    let upbtn= document.createElement('button');
    upbtn.innerText=' ⬆ '

    upbtn.onclick= function(event){
        //event.target= button
        //event.target.parentElement = <li></li>
        //event.target.parentElement.parentElement = todo list
        //to move up we will use, insertBefore() : check mdn, applied on parent
        //the new element that I want to insertBefore is my current li element
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement, //insert this
            event.target.parentElement.previousElementSibling  //before this
        )
    }
    //add down button
    let downbtn= document.createElement('button');
    downbtn.innerText=' ⬇ '

    downbtn.onclick= function(event){
        //event.target= button
        //event.target.parentElement = <li></li>
        //event.target.parentElement.parentElement = todo list
        //to move down we will use, insertBefore() : check mdn, applied on parent

        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling,  //insert next element
            event.target.parentElement //before current element
        )
    }
    

    
    li.appendChild(xbtn);
    li.appendChild(upbtn);
    li.appendChild(downbtn);
    li.appendChild(taskSpan );
    todolist.appendChild(li);

    
}

