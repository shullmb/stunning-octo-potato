var game = document.getElementById('game');
var position = document.getElementById('movement');
var ctx = game.getContext('2d');

var player;
var ogre;


function Crawler (x,y,color,height,width,src) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.src = src
    this.alive = true;

}

Crawler.prototype.render = function() {
    // let spriteImg = new Image()
    // spriteImg.src = './img/mush.png';
    // ctx.drawImage(spriteImg, this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.height, this.width )
}

function movementHandler(e) {
    switch (true) {
        case (e.keyCode === 38):
            console.log(player.y);
            player.y -= 10;
            break;
        case (e.keyCode === 40):
            console.log(player.y);
            player.y += 10;
            break;
        case (e.keyCode === 37):
            console.log(player.x);
            player.x -= 10;
            break;
        case (e.keyCode === 39):
            console.log(player.x);
            player.x += 10;
            break;
    };
}

function detectHit() {
	if(player.x < ogre.x + ogre.width 
		 && player.x + player.width > ogre.x 
		 && player.y < ogre.y + ogre.height 
		 && player.y + player.height > ogre.y){
        ogre.alive = false;
	}
}


function gameLoop() {
    detectHit();
    ctx.clearRect(0, 0, game.width, game.height)
    player.render();
    position.textContent = player.x + " " + player.y;
    ogre.alive ? ogre.render() : document.getElementById('status').textContent = 'You Win!';
}

document.addEventListener('DOMContentLoaded', function(){
    player = new Crawler(10, 10, 'blue', 16, 16,'./img/mush.png');
    ogre = new Crawler(200,50,'lightgreen',32,48);

    document.addEventListener('keydown', movementHandler)

    setInterval(gameLoop, 60);
})