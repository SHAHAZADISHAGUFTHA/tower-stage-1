const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var basement;
var ground1,ground2 ;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21;
var launcher;
var hexagon;



function setup() {
  background("green");
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world; 
  
  this.basement = new BaseMent(100,600,5000,60);
  
  this.ground1 = new Ground(360,400,150,10);
  this.ground2 = new Ground(640,300,120,10);

  //level1
  this.box1 = new Box(320,380,20,30);
  this.box2 = new Box(340,380,20,30);
  this.box3 = new Box(360,380,20,30);
  this.box4 = new Box(380,380,20,30);
  this.box5 = new Box(400,380,20,30);
  
// level2
  this.box6 = new Box(330,350,20,30);
  this.box7 = new Box(350,350,20,30);
  this.box8 = new Box(370,350,20,30);
  this.box9 = new Box(390,350,20,30);
// level3
this.box10 = new Box(340,320,20,30);
this.box11 = new Box(360,320,20,30);
this.box12 = new Box(380,320,20,30);
// level4
this.box13 = new Box(360,290,20,30);

// ground2 level1
this.box14 = new Box(610,280,20,30);
this.box15 = new Box(630,280,20,30);
this.box16 = new Box(650,280,20,30);
this.box17 = new Box(670,280,20,30);
// ground2 level2
this.box18 = new Box(620,250,20,30);
this.box19 = new Box(640,250,20,30);
this.box20 = new Box(660,250,20,30);
// ground2 level3
this.box21 = new Box(640,220,20,30);

this.hexagon = new Hexagon(100,390,20);
this.launcher = new Launcher(hexagon.body,{x:100, y:300})

}

function draw() {
  background(255);  
  Engine.update(engine); 
  basement.display();
 ground1.display();
 ground2.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 
 hexagon.display();
 launcher.display();
 // drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}



















