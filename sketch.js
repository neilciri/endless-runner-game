const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world

 var alien
 var ground

function setup() {
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;


alien = new Alien(200,200)


 ground = createSprite(0,800)


}  






function draw() {
  background("blue")
  Engine.update(engine);
  
 
  
  if(keyDown("space")&&alien.y>=329) {
    alien.velocityY = -9
  }
  
  alien.velocityY = alien.velocityY + 0.8
  

alien.display()


ground.display()





  drawSprites()
}
