console.log('hello World!')


function checkThis(){
    console.log(this) // 'This' here refers to global context, points to window
}


obj={
    a:10,
    b: 'abcd',
    c: function(){
        console.log(this); //'this' here points to, the object itself
    },
    10:2344,
    abcd: 678,
    d:{
        l:234,
        m:'abcd',
        n: function(){
            console.log(this)
        }
    }
}

z= obj.c;
z(); //now this will point to global scope
//this is runtime bound, then it sees if 'this' has been called via 
//an object(then points to the current scope) or otherwise

// can't do obj.10  key:10 is interpreted as string, can't use numeric literal key to access the value
//obj['10'] is correct

//but can do, obj.abcd

//obj['abcd'] is also valid

//all keys are strings only, can write the keys inside quotes