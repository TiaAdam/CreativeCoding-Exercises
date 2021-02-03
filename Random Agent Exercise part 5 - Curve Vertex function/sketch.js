let xPos = 400; // tracking the position of the object
let yPos = 400;
let stepSize = 1; // We can use it for moving the object.
let angle = 45;

let angleCount = 3;
let angles = [];
let history = []; // Array which will store all of the points that circle make.
let startAngle;
let stepAngle;

function setup() {
  createCanvas(800, 800);
  background(0);

  angles = [];
  stepAngle = 90 / angleCount;
  startAngle = stepAngle / 3;

}

function draw() {


  let speed = map(mouseX, 0, width, 2, 40);
  for (let x = 0; x < 10; x++) {
    stroke(255);
    strokeWeight(5);
    point(xPos, yPos);

    // This code will move circle across the screen
    xPos += cos(radians(angle)) * stepSize;
    yPos += sin(radians(angle)) * stepSize;

    // Array which will store all of the previous circle points.
    let vector = createVector(this.xPos, this.yPos);
    history.push(vector);
    //console.log(this.history);

  } // End of Loop

} // End of draw function
