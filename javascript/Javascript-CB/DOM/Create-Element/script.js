

//another way to reduce the call of innerHTML

window.onload = function(){
    let num= this.document.getElementById('num');
    let list= this.document.getElementById('list');
    let print= this.document.getElementById('print');

    
    print.onclick = function ram(){
        const tick= performance.now();

        let N= parseInt(num.value);
        /*
        let listHTML= ''
        for(let i=1; i<= N; i++){            
            listHTML += '<li>' + i + '</li>'; 
        }
        list.innerHTML= listHTML;  
        */

        for(let i=0; i<= N; i++){  //took 7ms
            let item= document.createElement('li');
            item.innerText= i;
            list.appendChild(item);   
        }

        console.log(`Elapsed: ${performance.now() - tick}`);
    }
    

}