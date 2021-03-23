// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4

//Variables that will be used in the project.
let noOfSegments = 20;
let stepAngle = 360/noOfSegments; // Changing based on noOfSegments variable.
let radius = 300; // A constant variable - 600/2.

// Creates canvas and runs only once.
function setup (){
  createCanvas(600,600);
  angleMode(DEGREES); // Need to be specified - RADIANS or DEGREES.
  noStroke();
}

function draw(){
  background(0);

}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
