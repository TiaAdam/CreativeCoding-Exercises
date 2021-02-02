let xPos = 400; // tracking the position of the object
let yPos = 400;
let stepSize = 1; // We can use it for moving the object.
let angle = 45

let angleCount = 3;
let angles = [];
let startAngle;
let stepAngle;

function setup() {
  createCanvas(800, 800);
  background(0);

  angles = [];
  stepAngle = 90 / angleCount;
  startAngle = stepAngle / 3;
  //angleMode(RADIANS);
}

function draw() {

  for (let i = stepAngle; i < 90; i += stepAngle) {
    angles.push(i);
  } // End of loop

  let speed = map(mouseX, 0, width, 2, 40);

  for (let x = 0; x < 10; x++) {
    stroke(255);
    strokeWeight(5);
    point(xPos, yPos);

    // This code will move circle across the screen
    xPos += cos(radians(angle)) * stepSize;
    yPos += sin(radians(angle)) * stepSize;

    if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
      angle = deflectAngle(xPos, yPos);
      console.log(angle);
    }

  } // End of Loop
  //deflectAngle();
} // End of draw function

function deflectAngle(_x, _y, _angles) {
  let randomNum = floor(random(_angles.length));
  let randomAngle = _angles[randomNum];
  //console.log(randomAngle);

  let option = floor(random(0, 3));

  if (option = 0) {
    randomAngle = randomAngle * -1;
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
