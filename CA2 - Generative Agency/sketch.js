// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4

//Variables that will be used in the project.
let noOfSegments = 20;
let stepAngle = 360 / noOfSegments; // Changing based on noOfSegments variable.
let radius = 200; // A constant variable - 600/2.

// Creates canvas and runs only once.
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES); // Need to be specified - RADIANS or DEGREES.
  //noStroke();
  strokeCap(ROUND); // Sets the style for line endings.
}

// Contains the main code.
function draw() {
  background(0);
  //translate(width / 2, height / 2);
  noOfSegments = map(mouseY, 0, 400, 12, 180);
  stepAngle = 360 / noOfSegments
  // Increases and decreases radius.
  radius = map(mouseX, 0, 400, 50, 200);

  fill(360, 100, 100);
  push();
  //translate(250,250);
  beginShape(TRIANGLE_FAN);
  vertex(250, 250);
  // For loop - variable a represents alpha.
  for (let a = 0; a <=360; a+=stepAngle) {
    let vx = (radius * cos(a)) + 250;
    let vy = (radius * sin(a)) + 250;
    fill(a, 100, 100);
    vertex(vx, vy);
  }
  endShape();
  pop();
  console.log("Hello world!");
}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
