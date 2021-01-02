const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);

  var b_options = {
    restitution:1.0
  }
  ball = Bodies.circle(200,100,20,b_options);
  World.add(myWorld,ball);

  //console.log(object);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 

Engine.update(myEngine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,200,20);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
  
  
}