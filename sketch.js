const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world
 ground = new Ground(400,height,800,20)
 box1 = new Box(400,300,50,50)
 box2 = new Box(430,100,50,100)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
 
}