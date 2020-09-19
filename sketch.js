var fixedRect, movingRect,sprite1,sprite2,sprite3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(200,200,50,100);
  sprite2=createSprite(100,300,50,100);
  sprite3=createSprite(900,200,50,100);
  sprite1.shapeColor="red";
  sprite2.shapeColor="yellow";
  sprite3.shapeColor="orange";
sprite1.velocityX=3;
sprite3.velocityX=-3;

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (istouching(sprite2,movingRect)){
  sprite2.visible=false;
  movingRect.shapeColor="blue";

}else{
  movingRect.shapeColor = "green";
  sprite2.visible=true;
}
   
bounceoff(sprite1,sprite3);

  drawSprites();
}