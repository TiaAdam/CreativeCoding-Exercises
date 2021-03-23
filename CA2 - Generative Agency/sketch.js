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
  //noStroke();
  strokeCap(ROUND); // Sets the style for line endings.
}

// Contains the main code.
function draw(){
  background(255);
  translate(width/2, height/2);

  noOfSegments = map(mouseY, 0, height,2,80);
  radius = mouseX - width/2;
  stepAngle = 360/noOfSegments;

  fill(360,100,100);
  push();
  //translate(250,250);
  beginShape(TRIANGLE_FAN);
  vertex(250,250);
  // For loop - variable a represents alpha.
  for(let a=0; a<=noOfSegments; a++){
    let vx= (radius * cos(a)) +300;
    let vy= (radius *sin(a)) +300;
    fill(a,100,100);

  }
  endShape();
  pop();

}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
