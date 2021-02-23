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
  //angleMode(RADIANS);
}

function draw() {
  for (let i = stepAngle; i < 90; i += stepAngle) {
    angles.push(i);
  } // End of loop

  let speed = map(mouseX, 0, width, 2, 40);
  for (let x = 0; x < 10; x++) {
    stroke(255);
    fill(0,0,255);
    strokeWeight(5);
    point(xPos, yPos);

    // This code will move circle across the screen
    xPos += cos(radians(angle)) * stepSize;
    yPos += sin(radians(angle)) * stepSize;

    if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
      angle = deflectAngle(xPos, yPos);
      console.log(angle);
    }

    // Array which will store all of the previous circle points.
    let vector = createVector(this.xPos, this.yPos);
    history.push(vector);
    //console.log(this.history);

  } // End of Loop
  deflectAngle();
} // End of draw function

function deflectAngle(_x, _y, _angles) {
  // let randomNum = floor(random(_angles.length));
  // let randomAngle = _angles[randomNum];
  // //console.log(randomAngle);
  //
  // let option = floor(random(0, 3));
  //
  // if (option = 0) {
  //   randomAngle = randomAngle * -1;
  //   return randomAngle;
  // }

  let randomAngle = floor(random(-angleCount, angleCount) + 0.5) * 90/angleCount;

  if (_x > width) {
  return randomAngle + 90;
  } else if (_x < 0) {
  return randomAngle + 270;
  }

  if (_y > height) {
  return randomAngle + 180;

  } else if (_y < 0) {
  return randomAngle;
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
