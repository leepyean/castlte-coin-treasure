//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var with values
var play;
var gameState = 0;
var live=3;
var enemykilled=0;
var coins=0;
var distance=0;
var level=0;
var sc;

//var simple
var bgImg;
var ground;
var char, charU, charRunning, charReverseRunning;
var mainchar;
var control1Img, control2Img, controlUpImg, shootImg;
var castleImg, flower1Img, flower2Img, flower3Img, cloudImg;
var control1, control2, controlUp, shoot;
var controls = [];
var castle, flower1, flower2, flower3;
var g2, g3; 
var cloud1, cloudG;
var flower, flowerG;
var block, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var enemy,enemyImg;
var coin1,coin2,coin3,coin4,coinI,en,coin9,coin10,coin11,coine,coineG;
var mainen,mainenI;
var bullet, bullG, lives, lifeG, lifeI;
var yo;
var back,bakI;
function preload()
{
	bgImg = loadImage("images/bg.png");	
	char = loadAnimation("images/mar2.png","images/mar3.png")
	charU = loadAnimation("images/maru1.png","images/maru2.png","images/maru3.png")
	control1Img =loadImage("images/control.png");
	control2Img =loadImage("images/control2.png");
	controlUpImg =loadImage("images/conup.png");
	shootImg = loadImage("images/shoot.png");
	castleImg =loadImage("images/castle.png");
	flower1Img =loadImage("images/virag_1.png");
	flower2Img =loadImage("images/virag_2.png");
	flower3Img =loadImage("images/virag_3.png");
	cloudImg =loadImage("images/cloud.png");
	enemyImg=loadImage("images/enemy.png");
	coinI=loadImage("images/money.png");
	mainenI=loadImage("images/mainboss.png");
	bakI=loadImage("images/back.png");
	lifeI=loadImage("images/heart.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	
	play = new Form();
	ground = new Ground(0,640,200000,displayHeight/7);
	mainchar = createSprite(20,560,10,10);
	mainchar.addAnimation("c1",char);
	mainchar.scale=0.05;
	mainchar.visible=false;
	g2 = new Ground(0,800,20000,300);
	enemy = createSprite(700,570,50,50);
	enemy.addImage("en",enemyImg);	
	enemy.scale=0.05;
	enemy.visible=false;
	back=createSprite(displayWidth/2,displayHeight/2,20,20);
	back.addImage("g",bakI);
	back.scale=0.02;
	back.visible=false;

	//control sprite
	control1 = createSprite(220,551,10,10);
	control1.addImage("right",control1Img);
	control1.scale = 0.15;
	control1.visible = false;
	control2 = createSprite(90,550,10,10);
	control2.addImage("left",control2Img);
	control2.scale = 0.15;
	control2.visible = false;
	controlUp = createSprite(1200,530,10,10);
	controlUp.addImage("up",controlUpImg);
	controlUp.scale = 0.13;
	controlUp.visible = false;

	//no need
	g3 = createSprite(0,640,200000,displayHeight/7);
	g3.visible = false;

	//eno
	yo=createSprite(displayWidth-displayWidth,displayHeight,10,200000);
	yo.visible=false;

	//enemy
	mainen=createSprite(displayWidth-80,530,20,20);
	mainen.addImage("e",mainenI);
	mainen.scale=0.1;
	mainen.visible=false;

	//coins sprite
	coin1 = createSprite(500,510,20,20);
	coin1.addImage("c1",coinI);
	coin1.visible=false;
	coin2 = createSprite(550,460,20,20);
	coin2.addImage("c1",coinI);
	coin2.visible=false;
	coin3 = createSprite(600,410,20,20);
	coin3.addImage("c1",coinI);
	coin3.visible=false;
	coin4 = createSprite(650,360,20,20);
	coin4.addImage("c1",coinI);
	coin4.visible=false;
	coin5 = createSprite(750,360,20,20);
	coin5.addImage("c1",coinI);
	coin5.visible=false;
	coin6 = createSprite(800,410,20,20);
	coin6.addImage("c1",coinI);
	coin6.visible=false;
	coin7 = createSprite(850,460,20,20);
	coin7.addImage("c1",coinI);
	coin7.visible=false;
	coin8 = createSprite(900,510,20,20);
	coin8.addImage("c1",coinI);
	coin8.visible=false;
	coin9 = createSprite(1000,560,20,20);
	coin9.addImage("c1",coinI);
	coin9.visible=false;
	coin10 = createSprite(1100,480,20,20);
	coin10.addImage("c1",coinI);
	coin10.visible=false;
	coin11 = createSprite(150,430,20,20);
	coin11.addImage("c1",coinI);
	coin11.visible=false;
	coin12 = createSprite(350,520,20,20);
	coin12.addImage("c1",coinI);
	coin12.visible=false;
	coin13 = createSprite(350,570,20,20);
	coin13.addImage("c1",coinI);
	coin13.visible=false;
	coin14 = createSprite(350,480,20,20);
	coin14.addImage("c1",coinI);
	coin14.visible=false;
	coin15 = createSprite(350,430,20,20);
	coin15.addImage("c1",coinI);
	coin15.visible=false;

	//groups
	cloudG = new Group();
	flowerG = new Group();
	lifeG = new Group();
	bullG = new Group();
	coineG = new Group();

	//castle
	en = createSprite(displayWidth-20,510,20,300);
	en.addImage("f",castleImg);
	en.scale=0.02;
	en.visible=false;

	//block for stairs
	block = createSprite(500,560,50,50);
	block.shapeColor="green";
	block2 = createSprite(550,560,50,50);
	block2.shapeColor="green";
	block3 = createSprite(600,560,50,50);
	block3.shapeColor="green";
	block4 = createSprite(650,560,50,50);
	block4.shapeColor="green";
	block5 = createSprite(550,510,50,50);
	block5.shapeColor="green";
	block6 = createSprite(600,460,50,50);
	block6.shapeColor="green";
	block7 = createSprite(600,510,50,50);
	block7.shapeColor="green";
	block8 = createSprite(650,510,50,50);
	block8.shapeColor="green";
	block9 = createSprite(650,460,50,50);
	block9.shapeColor="green";
	block10 = createSprite(650,410,50,50);
	block10.shapeColor="green";
	block11 = createSprite(750,560,50,50);
	block11.shapeColor="green";
	block12 = createSprite(750,510,50,50);
	block12.shapeColor="green";
    block13 = createSprite(750,460,50,50);
	block13.shapeColor="green";
    block14 = createSprite(750,410,50,50);
	block14.shapeColor="green";
    block15 = createSprite(800,560,50,50);
	block15.shapeColor="green";
	block16 = createSprite(800,460,50,50);
	block16.shapeColor="green";
    block17 = createSprite(800,510,50,50);
	block17.shapeColor="green";
    block18 = createSprite(900,560,50,50);
	block18.shapeColor="green";
    block19 = createSprite(850,560,50,50);
	block19.shapeColor="green";
	block20 = createSprite(850,510,50,50);
	block20.shapeColor="green";
	block21 = createSprite(150,460,100,30);
	block21.shapeColor="green";


	//block not to be visible in gameState 0 and show in gameState 1
	block.visible=false;
	block2.visible=false;
	block3.visible=false;
	block4.visible=false;
	block5.visible=false;
	block6.visible=false;
	block7.visible=false;
	block8.visible=false;
	block9.visible=false;
	block10.visible=false;
	block11.visible=false;
	block12.visible=false;
	block13.visible=false;
	block14.visible=false;
	block15.visible=false;
	block16.visible=false;
	block17.visible=false;
	block18.visible=false;
	block19.visible=false;
	block20.visible=false;
	block21.visible=false;


    //engine run
	Engine.run(engine);
  
}


function draw() {
  //rectangle should be in center
  rectMode(CENTER);

  //engine should be updated
  Engine.update(engine);

  //initializing the gameState 0
  if(gameState === 0){
	  //clear the screen
	background(bgImg);

	//display the objects
	play.display();

	//game name
	textSize(70);
	textFont("Times New Roman")
	fill("orange");
	stroke("red");
	strokeWeight(5);
	text("Super",610,100);
	text("Castle Runner Z",500,200);

	//my name
	textSize(30);
	fill("black");
	stroke("white");
	text("* made by Ridan",1000,580);
  }

  //initializing the gameState 1
  if(gameState === 1){
	  background(0,157,255);

	  //score, distance and everything to be display
	  textSize(30);
	  textFont("Times New Roman");
	  fill("white");
	  stroke("black");
	  strokeWeight(4);
	  text("🟡 Collected : "+ coins,50,50);
	  text("💖 : "+ live ,500,50);
	  text("Time : "+ distance,800,50);
	  text("Stage : 1",1200,50);
	  text("Way to the castle",1000,100);
	  
	  //game time
	  distance = distance + Math.round(getFrameRate()/60);


	  //show object
	  ground.display();
	  g2.display();

	  //spawn the clouds
	  spawnClouds();

	  //movement left, right and jump in PC
	  if(keyIsDown(RIGHT_ARROW)){
		  mainchar.x=mainchar.x+1;
	  }
	  if(keyIsDown(LEFT_ARROW)){
		mainchar.x=mainchar.x-1;
	  }
	  if(keyIsDown(UP_ARROW)&& mainchar.y >= 350){
		  mainchar.velocityY=-17;
	  }

	  //movement left, right and jump in mobile
	  if(mousePressedOver(control1)){
		mainchar.x=mainchar.x+1;
		
	  }
	  if(mousePressedOver(control2)){
		mainchar.x=mainchar.x-1;
	  }
	  if(mousePressedOver(controlUp)&& mainchar.y >= 350){
		mainchar.velocityY=-17;
	  }

	  

	  //gravity
	  mainchar.velocityY=mainchar.velocityY+1;

	  //live decreasing
	  if(mainchar.isTouching(enemy)){
		  live=live-1;
		  enemy.destroy();
	  }

	  //coin collected
	  if(mainchar.isTouching(coin1)){
		  coin1.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin2)){
		  coin2.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin3)){
		  coin3.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin4)){
		  coin4.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin5)){
		  coin5.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin6)){
		  coin6.destroy();
		  coins=coins+1;
	  }
      if(mainchar.isTouching(coin7)){
		  coin7.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin8)){
		  coin8.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin9)){
		  coin9.destroy();
		  coins=coins+1;
	  }
	  if(mainchar.isTouching(coin10)){
		coin10.destroy();
		coins=coins+1;
	  }
	  if(mainchar.isTouching(coin11)){
		coin11.destroy();
		coins=coins+1;
	  }
	  if(mainchar.isTouching(coin12)){
		coin12.destroy();
		coins=coins+1;
	}
	if(mainchar.isTouching(coin13)){
		coin13.destroy();
		coins=coins+1;
	}
	if(mainchar.isTouching(coin14)){
	  coin14.destroy();
	  coins=coins+1;
	}
	if(mainchar.isTouching(coin15)){
	  coin15.destroy();
	  coins=coins+1;
	}


	//completing and reaching the castle
	  if(mainchar.isTouching(en)){
		  gameState=2;
	  }

	  //game over
	  if(live===0){
		  gameState=3;
	  }

	  //detect collision
	  mainchar.collide(g3);
	  mainchar.collide(yo);
	  mainchar.collide(block);
	  mainchar.collide(block2);
	  mainchar.collide(block3);
	  mainchar.collide(block4);
	  mainchar.collide(block5);
	  mainchar.collide(block6);
	  mainchar.collide(block7);
	  mainchar.collide(block8);
	  mainchar.collide(block9);
	  mainchar.collide(block10);
	  mainchar.collide(block11);
	  mainchar.collide(block12);
	  mainchar.collide(block13);
	  mainchar.collide(block14);
	  mainchar.collide(block15);
	  mainchar.collide(block16);
	  mainchar.collide(block17);
	  mainchar.collide(block18);
	  mainchar.collide(block19);
	  mainchar.collide(block20);
	  mainchar.collide(block21);

	  //visibility to be set
	  //character and enemy visible
	  mainchar.visible=true;
	  enemy.visible=true;
	  //control visible
	  control1.visible = true;
	  control2.visible = true;
	  controlUp.visible = true;
	  //block visible
	  block.visible=true;
	  block2.visible=true;
	  block3.visible=true;
  	  block4.visible=true;
  	  block5.visible=true;
	  block6.visible=true;
	  block7.visible=true;
	  block8.visible=true;
	  block9.visible=true;
	  block10.visible=true;
	  block11.visible=true;
	  block12.visible=true;
	  block13.visible=true;
	  block14.visible=true;
	  block15.visible=true;
	  block16.visible=true;
	  block17.visible=true;
	  block18.visible=true;
	  block19.visible=true;
	  block20.visible=true;
	  block21.visible=true;

	  //coin visible
	  coin1.visible=true;
	  coin2.visible=true;
	  coin3.visible=true;
	  coin4.visible=true;
	  coin5.visible=true;
	  coin6.visible=true;
	  coin7.visible=true;
	  coin8.visible=true;
	  coin9.visible=true;
	  coin10.visible=true;
	  coin11.visible=true;
	  coin12.visible=true;
	  coin13.visible=true;
	  coin14.visible=true;
	  coin15.visible=true;
	  en.visible=true;
  }

  //initializing the gameState 2
  if(gameState===2){
	  //bg to be pink
	  background("purple");
	  
	  //score and elements
	  //style
	  textSize(30);
	  textFont("Times New Roman");
	  fill("white");
	  stroke("black");
	  strokeWeight(4);
	  //main text
	  text("🟡 Collected : "+ coins,50,50);
	  text("💖 : "+ live ,500,50);
	  text("Time : "+ distance,800,50);
	  text("Stage : 2",1200,50);
	  text("Inside the castle",1000,100);

	  //ss 
	  distance = distance + Math.round(getFrameRate()/60);

	  //again display in other
	  ground.display();
	  g2.display();
	  spawnBullet();
	  spawncoin();
	  life();

	  //jumping for 2nd game
	if(mousePressedOver(controlUp)&& mainchar.y >= 450){
	  mainchar.velocityY=-17;
	}
	if(live===0){
		gameState=3;
	}
	if(coineG.isTouching(mainchar)){
		coins=coins+1;
		coineG.destroyEach();
	}
	if(lifeG.isTouching(mainchar)){
		live=live+1;
		lifeG.destroyEach();
	}
	if(bullG.isTouching(mainchar)){
		live=live-1;
		bullG.destroyEach();
	}
	mainchar.velocityY=mainchar.velocityY+1;

	//bring main char back to original position
	  mainchar.x=50;
	  en.visible=false;

	  //block false
	  block.visible=false;
	  block2.visible=false;
	  block3.visible=false;
	  block4.visible=false;
	  block5.visible=false;
	  block6.visible=false;
	  block7.visible=false;
	  block8.visible=false;
	  block9.visible=false;
	  block10.visible=false;
	  block11.visible=false;
	  block12.visible=false;
	  block13.visible=false;
	  block14.visible=false;
	  block15.visible=false;
	  block16.visible=false;
	  block17.visible=false;
	  block18.visible=false;
	  block19.visible=false;
	  block20.visible=false;
	  block21.visible=false;

	  //control false
	  control1.visible = false;
	  control2.visible = false;
	  controlUp.visible = true;
	  enemy.visible=false;
	  mainen.visible=true;
	  
	  //coin false
	  coin1.visible=false;
	  coin2.visible=false;
	  coin3.visible=false;
	  coin4.visible=false;
	  coin5.visible=false;
	  coin6.visible=false;
	  coin7.visible=false;
	  coin8.visible=false;
	  coin9.visible=false;
	  coin10.visible=false;
	  coin11.visible=false;
	  coin12.visible=false;
	  coin13.visible=false;
	  coin14.visible=false;
	  coin15.visible=false;

	  //collison
	  mainchar.collide(g3);
	  

  }
  if(gameState===3){
	  background("black");
	  textSize(80);
	  textFont("Cooper Black")
	  fill("white");
	  text("G A M E  O V E R",300,displayHeight/2-200);
	  fill("yellow");
	  text("Coins Collected : "+ coins,300, displayHeight/2);

	  //hakai
	coineG.destroyEach();
	bullG.destroyEach();
	lifeG.destroyEach();
	  //all false
	block.visible=false;
	block2.visible=false;
	block3.visible=false;
	block4.visible=false;
	block5.visible=false;
	block6.visible=false;
	block7.visible=false;
	block8.visible=false;
	block9.visible=false;
	block10.visible=false;
	block11.visible=false;
	block12.visible=false;
	block13.visible=false;
	block14.visible=false;
	block15.visible=false;
	block16.visible=false;
	block17.visible=false;
	block18.visible=false;
	block19.visible=false;
	block20.visible=false;
	block21.visible=false;
	mainchar.visible=false;
	enemy.visible=false;
	coin1.visible=false;
	  coin2.visible=false;
	  coin3.visible=false;
	  coin4.visible=false;
	  coin5.visible=false;
	  coin6.visible=false;
	  coin7.visible=false;
	  coin8.visible=false;
	  coin9.visible=false;
	  coin10.visible=false;
	  coin11.visible=false;
	  coin12.visible=false;
	  coin13.visible=false;
	  coin14.visible=false;
	  coin15.visible=false;
	control1.visible = false;
	control2.visible = false;
	controlUp.visible = false;
	en.visible=false;
	mainen.visible=false;

  }
  
 
  
  
  drawSprites();
 
}
function spawnClouds(){
	if(frameCount%80===0){
	  cloud1 = createSprite(displayWidth,200,20,20);
	  cloud1.addImage("cl",cloudImg);
	  cloud1.y = Math.round(random(120,250));
	  cloud1.scale = 1.0;
	  cloud1.velocityX = -4;
	  cloudG.add(cloud1);
	}
}
function spawnBullet(){
	if(frameCount%80===0){
		bullet=createSprite(displayWidth-90,200,10,5);
		bullet.shapeColor="black";
		bullet.y=Math.round(random(530,550));
		bullet.velocityX=-(6 + 3*distance/100);
		bullet.lifetime=200;
		bullG.add(bullet);
	}
}
function spawncoin(){
	if(frameCount%100===0){
		coine=createSprite(displayWidth-90,200,20,20);
		coine.addImage("g",coinI);
		coine.y=Math.round(random(460,500));
		coine.velocityX=-(6 + 3*distance/100);
		coine.lifetime=200;
		coineG.add(coine);
	}
}
function life(){
	if(frameCount%1000===0){
		lives=createSprite(displayWidth-100,200,20,20);
		lives.addImage("jj",lifeI);
		lives.scale=0.008;
		lives.y=Math.round(random(460,470));
		lives.velocityX=-(6 + 3*distance/100);
		lives.lifetime=200;
		lifeG.add(lives);
	}
}