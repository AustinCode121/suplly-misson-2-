var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	
	//wall1.shapeColor=color("red")
	//wall2.shapeColor=color("red")
	//wall3.shapeColor=color("red")
	
	
	



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
    
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	 wall1 = Bodies.rectangle(width/2,650, 200,20 , {isStatic:true} );
	 World.add(world, wall1);
	 
	 wall2 = Bodies.rectangle(300,600, 20,100 , {isStatic:true} );
	 World.add(world, wall2);
	 
	 wall3 = Bodies.rectangle(500,600, 20,100 , {isStatic:true} );
	 World.add(world, wall3);
	 
	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1500,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
  
}


function draw() {
  
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red")
  rect(width/2,650, 200,20)
  rect(300,600, 20,100 )
  rect(500,600, 20,100 ) 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
	
    
  }
}



