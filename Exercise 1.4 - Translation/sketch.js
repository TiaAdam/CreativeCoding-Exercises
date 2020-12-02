// Creative Coding
// Exercise 04  - Transformation

// runs once, sets up canvas
function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100) // hue,saturation, boldness
angleMode(DEGREES);
rectMode(CENTER);
noStroke();

}

// Drawing rectangle
function draw(){
  push();
  translate(200,200);
  rotate(25);
  fill(200,0,0);
  rect(0,0,50,100);
  pop();

  push();
  translate(200,200);
  fill(255,0,0);
  rotate(45);
  rect(0,0,50,100);
  pop();

} // end of draw function 
