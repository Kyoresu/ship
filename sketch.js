var shipImg,ship;
var seaImg,sea;
function preload(){
shipImg = loadAnimation("ship-1.png" ,"ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite (200,170,200,200);
  sea.addImage(seaImg);
  sea.velocityX = 3; 
  

  ship = createSprite (150,270,20,50);
  ship.addAnimation("barco",shipImg);
  ship.scale = 0.20;
}

function draw() {
  background("blue");
 
  if(sea.x > 400){
    sea.x = sea.width/2;
  }
  
  drawSprites();
}