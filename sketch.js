var boy;
var boyimage;
var coinimage;
var powerupimage;
var zombieimage;
var backgroundimage;
var ground;
var powerup;
var coins;
var obstacle,obstacleimage;
var obstacle2,obstacle2image;
var obstacle3,obstacle3image;
var bg2,bg3,bg2image,bg3image;
var bg;

function preload(){
boyimage = loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png","images/b5.png","images/b6.png","images/b7.png"
,"images/b8.png","images/b8.png","images/b9.png","images/b10.png","images/b11.png","images/b12.png");
boycollided = loadAnimation("images/b1.png");
obstacle2image = loadImage("images/obstacle2.png");
obstacleimage = loadImage("images/obstacle1.png");
obstacle3image = loadImage("images/obstacle3.png");
coinimage = loadImage("images/coin.png");
powerupimage = loadImage("images/powerup.png");
zombieimage = loadAnimation("images/z1.png","images/z2.png","images/z3.png","images/z4.png","images/z5.png","images/z6.png","images/z7.png");
backgroundimage = loadImage("images/bg1.png");
bg2image = loadImage("images/bg2.png");
bg3image = loadImage("images/b3.png");
}

function setup() {
  createCanvas(600,400);

  bg = createSprite(800,200);
  bg.addImage(bg2image);
  bg.velocityX=-2;

  boy = createSprite(160,300);
  boy.addAnimation("boi",boyimage);
  boy.scale=0.5;

  zombie = createSprite(70,280);
  zombie.addAnimation("zom",zombieimage);
  zombie.scale=0.32;

 ground = createSprite(400,350,800,20);
 ground.visible = false;

}

function draw() {
  background(0);

  if(keyDown('space')){
    boy.velocityY=-14;
  }

  boy.velocityY=boy.velocityY+0.8;
  boy.collide(ground);

  console.log(bg.x);
  if(bg.x<-120){
    bg.x=800;
  

    spawnpowerup();
    spawncoins();
    spawnobstacle();
    
   
    }
    spawnobstacle();
    spawnpowerup();
    spawncoins();
  drawSprites();

   
 
}
  
function spawnpowerup(){
  if(frameCount%500===0){
    powerup = createSprite(810,100);
    powerup.scale=0.3;
    powerup.addImage(powerupimage);
    powerup.velocityX=-6;
    powerup.lifetime=130;
   powerup.y= Math.round(random(100,200));
  }
  
}
function spawncoins(){
  if(frameCount%150===0){
    coins = createSprite(810,100);
    coins.scale=0.2;
    coins.addImage(coinimage);
    coins.velocityX=-7;
    coins.lifetime=120;
    coins.y=Math.round(random(100,200));
  }
}
  
  function spawnobstacle(){
    if(frameCount%100===0){
      obstacle = createSprite(810,295);
      obstacle.scale=0.5;
      obstacle.velocityX=-8;
      obstacle.lifetime=100;
      var option=Math.round(random(1,3));
      switch(option){
      case 1:  obstacle.addImage(obstacleimage);
      obstacle.scale=0.4;  
      break;
      case 2:  obstacle.addImage(obstacle2image); 
      obstacle.scale=0.3; 
      break;
      case 3:  obstacle.addImage(obstacle3image);
      obstacle.scale=0.5;
      break;
      }
      }
    }
  
    