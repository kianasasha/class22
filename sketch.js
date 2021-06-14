const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world, engine;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
var options={
  restitution: 2.5
}
ball=Bodies.circle(200,100,50,options);
World.add(world,ball);
ball2=Bodies.circle(100,100,50,options);
World.add(world,ball2);

var option={
  isStatic: true,
}
ground=Bodies.rectangle(400,380,800,10,option);
  World.add(world,ground)
  
}

function draw() {
  background(200,255,255);  
  Engine.update(engine);
  ellipseMode(CENTER);
  fill("orange");
  ellipse(ball.position.x,ball.position.y,50,50);
  ellipse(ball2.position.x,ball2.position.y,30,30);
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,800,10)
}