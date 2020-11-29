
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var rock, slinger, Tree, boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world, launchingForce=100

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	rock = new stone(200,550,30,30);

	mango1=new mango(1100,100,30);
    mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
	


slinger = new Slingshot(rock.body,{x:160, y:550});

Tree=new tree(660,410,70,500);

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  textSize(25);
  text("press Space to get a second chance!! :)",50 ,50);
  image(boy ,200,340,200,300); 	
  
	rock.display();
	slinger.display();
	Tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

	detectollision(rock,mango1);
	detectollision(rock,mango2);
	detectollision(rock,mango3);
	detectollision(rock,mango4);
	detectollision(rock,mango5);
	detectollision(rock,mango6);
	detectollision(rock,mango7);
	detectollision(rock,mango8);
	detectollision(rock,mango9);
	detectollision(rock,mango10);
	detectollision(rock,mango11);
	detectollision(rock,mango12);



  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(rock.body,{x:mouseX, y:mouseY}) ;
	
	}

	function mouseReleased(){

		slinger.fly();
		
		}

		function keyPressed() {
			if (keyCode === 32) {
			Matter.Body.setPosition(rock.body, {x:235, y:420}) 
			  launcherObject.attach(rock.body);
			}
		  }
		
		  function detectollision(lstone,lmango){
		
		  mangoBodyPosition=lmango.body.position
		  stoneBodyPosition=lstone.body.position
		  
		  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		 
			  if(distance<=lmango.r+lstone.r)
			{
			 
				Matter.Body.setStatic(lmango.body,false);
			}
		
		  }
		



