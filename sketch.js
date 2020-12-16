
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1=new Paper(20,370,20,20);
	ground1=new Ground(200,380,400,10);
	dustbin1=new Dustbin(250,330,10,100);
	dustbin2=new Dustbin(281,363.2,42,20);
	dustbin3=new Dustbin(300,330,10,100);

	

	Engine.update(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("red");
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPresssed();
  
  drawSprites();
 
}

function keyPresssed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:260,y:363});
	}

}



