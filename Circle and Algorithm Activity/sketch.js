// Circle and Algorithm Activity  9th and 10th of February 2021

let points = [];

function setup() {
  createCanvas(500, 500);
  points.push(createVector(200, 300));
  points.push(createVector(500, 400));
  noLoop();
}


function draw() {
  for (let i = 0; i < points.length; i++) {
    stroke(255, 0, 0);
    noFill();
    ellipse(points[i].x, points[i].y, 55, 55)
  }
}


// At the moment this is not receiving any parameter. Consider using something here
function dock() {
  //This is the ball we want to move (latest in Array)
  let currentBall = points[1];
  // This is where we want to dock it to
  let dockBall = points[0];


  let resultantV = p5.Vector.sub(currentBall, dockBall)
  let rHeading = resultantV.heading();
  let rDist = resultantV.mag() - 55;


  // Here we thake away the calculated distance from the current position
  let newPositionX = currentBall.x - cos(rHeading) * rDist;
  let newPositionY = currentBall.y - sin(rHeading) * rDist;


  // Here we draw the new Circle
  fill(255, 0, 0);
  ellipse(newPositionX, newPositionY, 55, 55);
}
