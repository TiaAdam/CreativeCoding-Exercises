// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4

let noOfSegments = 300;
let angle = 360 / noOfSegments;
let radius = 450;

// For testing the line of code for movement of the line.
let testX = 300;
let testY = 300;
// End point of lines - ellipse.
let diameter = 20;
//let x;

function setup() {
  createCanvas(900, 900);
  strokeCap(ROUND);
  //noLoop();
}

function draw() {
  background('#151515');
  // Moving from origin (0,0), to the center of the window.
  translate(width / 2, height / 2);
  // To rotate EVERYTHING!
  //rotate(angle, x);
  //frameRate(5);

  let noOfSegments = int(map(mouseY, 0, height, 2, 80));
  let radius = mouseX - width / 2; //let angle = TAU / noOfSegments; // TAU is a mathematical constant with the value 6.2831855. It is the circle constant relating the circumference of a circle to its linear dimension, the ratio of the circumference of a circle to its radius.
  // For loop
  for (let a = 0; a <= noOfSegments; a++) {
    push();
    let x = cos(angle * a) * radius;
    let y = sin(angle * a) * radius;
    fill(0, 255, 255);
    stroke('#fae');
    strokeWeight(5);
    //line(0, 0, x, y);
    line(x*sin(radians(angle)), 0, x, y); // y-d, to avoid overlaping of the line and ellipse.

    // Creating end points of the lines - ellipse.
    noStroke();
    ellipse(0,y, diameter, diameter);
    pop();
  }
  //angle++;
}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
