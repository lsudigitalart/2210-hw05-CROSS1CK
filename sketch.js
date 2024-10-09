let circleSize;
let lineWidth;


function setup(){
  createCanvas(800,400);
  background("black")
}

function draw(){
  frameRate(10)
lineWidth = random (4,28);
circleSize = random (350);

ellipseMode(CENTER);
strokeWeight(lineWidth);
stroke(0, 0, 0,);
fill( 255, 255, 255, 50);
circle(400, 200, circleSize);
scale(.5, 1);

lineWidth = random (4,28);
circleSize = random (350);
ellipseMode(CENTER);
strokeWeight(lineWidth);
stroke(0, 0, 0,);
fill( 255, 255, 255, 50);
translate(-200, 0, circleSize)
circle(400, 200, circleSize);

lineWidth = random (4,28);
circleSize = random (350);
ellipseMode(CENTER);
strokeWeight(lineWidth);
stroke(0, 0, 0);
fill( 255, 255, 255, 50);
translate(1200, 0, circleSize)
circle(400, 200, circleSize);
}

