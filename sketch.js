
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var side1, side2, side3;
 var paper1;
 var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 side1 = new dustbin(400,250,150,10);
 side2 = new dustbin(360,225,10,100);
 side3 = new dustbin(440,225,10,100);

 paper1 = new paper(100,250,30);

 ground1= new dustbin(57,250,100,20);
	Engine.run(engine);
	
	console.log(side1);
  console.log();
}


function draw() {

  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  paper1.display();
  ground1.display();
  keyPressed();
  console.log();
   Engine.update(engine);
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

