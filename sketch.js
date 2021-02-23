var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  thickness = random(23,83)
 bullet = createSprite(10, 200, 50, 10);

 bullet.velocityX = speed ;

 bullet.shapeColor = color(255,0,0);

 thickness= random

 wall = createSprite(1000,200,60,height/2)

 wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-bullet.x < (bullet.width + wall.width)/2) 
  {
  
    bullet.velocityX=0;
   var Deformation = 0.5 * weight * speed * speed / 22509;
   if(Deformation>180)
  {
    bullet.shapeColor=Color(255,0,0)
  }
  if (Deformation<180 && Deformation>100)
  {
    bullet.shapeColor = color(230,230,0)

  }
 if (Deformation<100)
 {
  bullet,shapeColor = color(0,255,0)
 }
}
}