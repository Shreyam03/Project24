const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,baseSprite,side1Sprite,side2Sprite,base,side1,side2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  baseSprite=createSprite(700,660,150,20);
  baseSprite.shapeColor="white";
  side1Sprite=createSprite(620,600,20,100);
  side1Sprite.shapeColor="white";
  side2Sprite=createSprite(780,600,20,100);
  side2Sprite.shapeColor="white";

	//Create the Bodies Here.
    paper=new Paper();
    ground=new Ground();
    base=Bodies.rectangle(baseSprite.x,baseSprite.y,baseSprite.width,baseSprite.height,{isStatic:true});
    World.add(world,base);
    side1=Bodies.rectangle(side1Sprite.x,side1Sprite.y,side1Sprite.width,side1Sprite.height,{isStatic:true});
    World.add(world,side1);
    side2=Bodies.rectangle(side2Sprite.x,side2Sprite.y,side2Sprite.width,side2Sprite.height,{isStatic:true});
    World.add(world,side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  drawSprites();
 
  
  console.log(paper.body.position.x,paper.body.position.y);
}
function keyPressed(){
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-85})
  }
}



