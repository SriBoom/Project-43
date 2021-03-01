var hr,mn,sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  

  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle=map(sc, 0, 60, 0, 360);
  mnAngle=map(mn, 0, 60, 0, 360);
  hrAngle=map(hr%12, 0, 12, 0, 360);

  // seconds hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop();

  noFill();
  stroke("red")
  strokeWeight(7);
  arc(0, 0, 300, 300, 0, scAngle); // (x, y, width, height, start angle, stop angle)

  // minutes hand
  push();
  rotate(mnAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  noFill();
  stroke("yellow")
  strokeWeight(7);
  arc(0, 0, 280, 280, 0, mnAngle);

  //hour hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  
  noFill();
  stroke("blue")
  strokeWeight(7);
  arc(0, 0, 260, 260, 0, hrAngle);

}
