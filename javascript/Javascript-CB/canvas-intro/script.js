let paintbox= document.getElementById('paintbox');
let context = paintbox.getContext('2d')

// context.fillStyle='red';
// context.fillRect(0,200,50,50);
// context.fillStyle='blue';
// context.fillRect(100, 0, 50, 50);
// context.fillRect(300, 0, 50, 50);
// context.rect(440, 200, 60, 60);
// context.stroke()

let gameOn= true;
let playerSpeed = 5;
class Box {
    constructor(size, color){
        this.size = size;
        this.color= color;
        this.x= 0;
        this.y= 0;
    }
}

class Player extends Box{
    constructor(){
        super(50, 'blue')
        this.x= 0;
        this.y= 225;
        this.speed= 0;
    }

    move(){
        this.x+= this.speed;

    }

}

//you don't require the 'function' keyword inside a class
class Enemy extends Box{
    constructor(speed){
        super(60, 'red');
        this.speed = speed;
    }

    move(){
        this.y += this.speed;

        if(this.y + this.size > 500){
            this.speed = -(Math.abs(this.speed));
        }
        if(this.y <0){
            this.speed = (Math.abs(this.speed));
        }
    }
}


let player= new Player()
let e1= new Enemy(4)
let e2= new Enemy(8)
let e3= new Enemy(12)

e1.x= 100;
e2.x= 233;
e3.x= 366;


function iscolliding(box1, box2){
    if(box1.x + box1.size > box2.x && box1.x < box2.x + box2.size && box2.y + box2.size >box1.y && box1.y +box1.size >box2.y){
        return true;
    }

}

function drawBox(Box){
    context.fillStyle= Box.color;
    context.fillRect(Box.x, Box.y, Box.size, Box.size);
}

//Animation is not that smooth with setInterval function
/*
setInterval(() => {
    context.clearRect(0,0,500,500),
    e1.y += e1.speed,
    e2.y += e2.speed,
    drawBox(e1),
    drawBox(e2)
}, 1000)

*/

//or

/*

function updateGame(){
    window.requestAnimationFrame(() => {
        context.clearRect(0,0,500,500),
        // e1.y += e1.speed,
        // e2.y += e2.speed,

        e1.move()
        e2.move()
        e3.move()
        drawBox(e1)
        drawBox(e2)
        drawBox(e3)
        updateGame()

    })

    // updateGame()
}

updateGame()


*/
// MouseDown occurs when the user presses the mouse button; 
// MouseUp occurs when the user releases the mouse button.

paintbox.addEventListener('mousedown', () => {
    player.speed= playerSpeed;
})

paintbox.addEventListener('mouseup', () => {
    player.speed= 0;
})

// Math.random() gives a value between 0 to 1
setInterval(() => {
    playerSpeed = parseInt(Math.random()*10)
    // player.y= 100 + (Math.random()*300)
}, 2000)

function gameLoop(){
    if(!gameOn){
        // return;
        // gameOn= true;
        player.x =0;
        player.y =225;
        // gameOn= true;
    }
    context.clearRect(0,0,500,500),
        e1.move()
        e2.move()
        e3.move()
        if(iscolliding( player, e1) || iscolliding(player, e2) || iscolliding( player, e3)){
            gameOn= false;
            window.alert('Game Over');
        }
        player.move()
        drawBox(player)
        drawBox(e1)
        drawBox(e2)
        drawBox(e3)

        window.requestAnimationFrame(gameLoop)
}

gameLoop()


// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.

// You should call this method whenever you're ready to update your animation onscreen.