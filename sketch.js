
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
  createCanvas(1600,800);
	engine = Engine.create();
	world = engine.world;
  bob1=new Bob(30,75,20)
  rope1=new Rope(bob1.body,{x:200,y:25});

  box8=new Box(330,235,30,40)

box9=new Box(360,235,30,40)

box10=new Box(390,235,30,40)

box11=new Box(420,235,30,40)

box12=new Box(450,235,30,40);

box13=new Box(360,195,30,40)

box14=new Box(390,195,30,40)

box15=new Box(420,195,30,40)

box16=new Box(390,155,30,40)
ground1=new Ground(600,height,1200,20)
platform=new Ground(400,400,200,10)
}

function draw() {
  background("cyan");  
Engine.update(engine)
bob1.display();
rope1.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
ground1.display();
platform.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
rope1.fly();
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(bob1.body,{x:180,y:150})
  rope1.attach(bob1.body);
  }
}

