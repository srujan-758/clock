
var hr;
var min;
var sec;
var scAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  
}

function draw() {

  background("black");
  translate(300,300); 
  rotate(-90);
  
  hr=hour();
  min=minute();
  sec=second();

  scAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);


  //draw second hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //draw minute
  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,90,0);
  pop();
 
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,70,0);
  pop();


  
  stroke(255,0,255);
  point(0,0);
  //var pos=this.se.position;
  //var angle = this.body.angle;
  stroke(10);
  noFill();

  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,300,300,0,scAngle);
  
  stroke(0,250,0);
  strokeWeight(7);
  arc(0,0,280,280,0,minAngle);
  
  stroke(0,0,250);
  strokeWeight(7);
  arc(0,0,260,260,0,hrAngle);
  
   
  drawSprites();
}