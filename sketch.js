const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bgImg;
var snow =[];
function preload(){
  bgImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   

  //  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(bgImg);  
  if(frameCount%5===0){
    snow.push(new Snow(random(0,800),30,30));
    
  }
  for(var i=0;i<snow.length;i=i+1){
    snow[i].display();
  }
   
 // drawSprites();
   



}