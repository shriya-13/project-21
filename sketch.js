

var bullet, wall;
var thickness, speed, weight;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, thickness, 50);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);


  speed= random (223,321);
  weight= random(30, 52);
  thickness= random(22,83);

  bullet.velocityX= speed ;
   
}

function draw() {
  background("beige");
  
  bullet.display();
  wall.display(); 

  text(mouseX+","+ mouseY, mouseX,mouseY);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var deformation=0.5* weight * speed * speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor= color(255,0,0);
    }
     
    if(deformation<10){
      wall.shapeColor= color (0,255,0);
    }
    
  }
  drawSprites();

  hasCollided(bullet,wall);
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}