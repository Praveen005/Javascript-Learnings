//if say 100 is input, and I click on print, it should print 1 to 100



window.onload = function(){
    let num= this.document.getElementById('num');
    let list= this.document.getElementById('list');
    let print= this.document.getElementById('print');


    print.onclick = function ram(){
        const tick= performance.now();

        let N= parseInt(num.value);
        let listHTML= ''
        for(let i=1; i<= N; i++){
            // list.innerHTML += '<li>' + i + '</li>';  //this is time consuming, each time it creates a new instance and paste into that

            listHTML += '<li>' + i + '</li>';  //reduce time from 40s to 12ms to print 10k instances
        }
        list.innerHTML= listHTML;  //reduce the number of .innerHTML calls

        console.log(`Elapsed: ${performance.now() - tick}`);

    }

    //try to reduce the no. of time we make changes to the DOM



}