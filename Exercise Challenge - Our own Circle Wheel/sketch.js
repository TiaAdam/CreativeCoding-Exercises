// Creative Coding
// Homework Exercise - Color Wheel

// Variables that will be used in the exercise.
let numOfSegments = 10;
let stepAngle = 360/numOfSegments;
let radius = 100;
let dim;

function setup(){
createCanvas(710,400);
colorMode(HSB,360,100,100);
angleMode(DEGREES);
noStroke();
frameRate(2); // for gradient
dim = width / 2;
}

function draw(){
  background('grey');

if(mouseIsPressed){
  drawGradient(TRIANGLE_FAN, height / 2);
} else {
// Shape 1
  push();
  //translate(355,200);
    //fill(360,100,100);
    beginShape(TRIANGLE_FAN); // Need to be specified.
    //vertex(mouseX,mouseY);
    vertex(355,200);
    // Creating a for loop
    for(let a=0; a<=360; a += stepAngle){
      let vx= (radius * cos(a)) +355;
      let vy= (radius *sin(a)) +200;
      fill(a,100,100);
      vertex(vx,vy);
    }
  endShape();
  pop();
}

// Shape 2
  //translate(200,200);
 for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

// Gradient in circles
function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

// Function that will allow us to change amount of squares whenever we press left mouse click.
function keyPressed(){
  if(key =='s' || key =="S"){
    saveCanvas(gd.timestamp(),'png'); // allows us to take a screenshot
  }
}
