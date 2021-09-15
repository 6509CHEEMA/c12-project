
function preload(){
  //pre-load images
  pathimage= loadImage("path.png");
  Runnerimage= loadAnimation("Runner-1.png","Runner-2.png");
   
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.velocityY=-4;
  path.addImage(pathimage);
  boy=createSprite(150,360,50,50);
  boy.addAnimation("runner",Runnerimage);
  boy.scale=0.1;
  
}

function draw() {
  background(0);
  if (path.y<0){
    path.y=height/2;
  }
  boy.x=World.mouseX;
  drawSprites();
  
}
