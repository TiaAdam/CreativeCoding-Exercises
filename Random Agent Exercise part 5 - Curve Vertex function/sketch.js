let xPos = 400; // tracking the position of the object
let yPos = 400;
let history = []; // Array which will store all of the points that circle make.
let stepSize = 1; // We can use it for moving the object.
let angle = 45;
let angleCount = 3;
let angles = [];
let startAngle;

let numOfSegments = 5;
let stepAngle = 360 / numOfSegments;
let radius = 200;

function setup() {
  createCanvas(800, 800);
  background(255);
  angleMode(DEGREES);
}

function draw() {
  
  //radius = map(mouseX,0,400,50,200);
  curveVertex(400, 400);
  for (let a = 0; a <= 360; a += stepAngle) {
    let vx = (radius * cos(a)) + 400;
    let vy = (radius * sin(a)) + 400;
    //fill(a,100,100);
    curveVertex(vx, vy);
  }
  curveVertex(400,400);
  endShape(CLOSE);

  // strokeWeight(5);
  // point(400, 400);
  // point(0, 400);
  // point(600, 100);
  // point(600, 400);
  // point(550, 500);
  // point(500, 700);
  // strokeWeight(1);
  //
  // noFill();
  // beginShape();
  // curveVertex(400, 400);
  // curveVertex(400, 400);
  // curveVertex(0, 400);
  // curveVertex(600, 100);
  // curveVertex(600, 400);
  // curveVertex(550, 500);
  // curveVertex(500, 700);
  // curveVertex(500, 700);
  // endShape();

  // Array which will store all of the previous circle points.
  let vector = createVector(this.xPos, this.yPos);
  history.push(vector);

} // End of draw function
