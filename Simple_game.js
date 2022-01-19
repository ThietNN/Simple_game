class Character{
constructor(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 20;
}
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    moveRight(){
        this.left += this.speed;
        console.log(this.left);
    }
    moveLeft(){
        this.left -= this.speed;
        console.log(window.innerWidth - this.left);
    }
    moveUp(){
        this.top -= this.speed;
        console.log(this.top);
    }
    moveDown(){
        this.top += this.speed;
        console.log(window.innerHeight - this.top);
    }
    changeSpeed(speed){
    this.speed += speed;
    }
}

var doraemon = new Character('doraemon.png',20, 30, 200);

function start(){
    if(doraemon.left < window.innerWidth - doraemon.size){
        doraemon.moveRight();
    }else {
        doraemon.moveDown();
    }
    document.getElementById('game').innerHTML = doraemon.getHeroElement();
    setTimeout(start, 500)
}

start();