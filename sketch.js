const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;

var kid,kidimg;
var bg,bgimg;

function preload(){
  bgimg = loadImage("snow2.jpg");
  kidimg=loadImage("kids.png");
}


function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  //kid=createSprite(400, 500, 50, 50);
  //kid.addImage("kid",kidimg);

  for(i=0; i < maxDrops; i++){
    drops.push(new CreateSnow(random(0,1000), random(0,1000)));
  }
  
  

}

function draw() {
  background(bgimg);  
 Engine.update(engine);
  

  

  //bg.display();
  drop();
  drawSprites();
}

function drop(){
  for( i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
}
}