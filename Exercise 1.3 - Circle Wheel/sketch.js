// Creative Coding - Year 4 - Term 1
// Exercise 1.3 - Circle Wheel (CW)

let numOfSegments = 30; // We are deciding how many segments we want our CW to have.
let stepAngle = 360/numOfSegments; // Changing based on numOfSegments.
let radius = 200; // A constant variable.

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100);
angleMode(DEGREES); // Need to be specified - RADIANS or DEGREES.
noStroke();
}

// This function contains the main code. For this particular example, a Grid is being created in order to generate colored squares across the Canvas.
function draw(){
  background(0);
  numOfSegments = map(mouseY,0,400,12,180);
  stepAngle = 360/numOfSegments;
  // Allows us to increase and decrease radius as we move the mouse
  radius = map(mouseX,0,400,50,200);

  fill(360,100,100);
  push();
  //translate(250,250);
  beginShape(TRIANGLE_FAN);
  vertex(250,250);

  // Starting for loop with a variable which represents alpha
  for(let a=0; a<=360; a += stepAngle){
    let vx= (radius * cos(a)) +250;
    let vy= (radius *sin(a)) +250;
    fill(a,100,100);
    vertex(vx,vy);
  }
  endShape();
  pop();
} // End of draw function
