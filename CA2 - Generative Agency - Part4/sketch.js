// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4
// Version 4

let noOfSegments = 90;
let angle = 360 / noOfSegments;
let radius = 250;
let x =200;
let y = 200;
// Variable for ellipse
let diameter = 30;

function setup() {
  createCanvas(500, 500);
  strokeCap(ROUND);
  //noLoop();
}

function draw() {
  background('#151515');
  // Moving from origin (0,0), to the center of the window. To move to bottom right corner tanslate(500,500);
  translate(width / 2, height / 2);
  let noOfSegments = int(map(mouseY, 0, height, 2, 80));

  // For loop
  for (let a = 0; a <= 360; a+=10) {
    // To rotate EVERYTHING!
    push()
    rotate(radians(a));
    fill(0, 255, 255);
    stroke('#fae');
    strokeWeight(5);
    //line(0, 0, x, y);
    line(x*sin(radians(frameCount)), 0, x, y+diameter/2); // y-d, to avoid overlaping of the line and ellipse.
    // Polygon shape
    stroke(209,243,255);
    noFill();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / -100.0);
    polygon(0,0,30,7);

    pop()
  }
  angle++;
}

// Properties of polygon that has been initialised in function draw.
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
