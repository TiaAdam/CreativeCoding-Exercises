// Curves 03.02.2021

let points = [];
let segments = 10;
let radius = 100;

function setup() {
  createCanvas(500, 500);
  background(0);

  let angle = radians(360 / segments);
  for (let i = 0; i < segments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;
    points.push(createVector(xPos, yPos));

  }
}

function draw() {
  //push();
  translate(width / 2, height / 2);
  for (let i = 0; i < points.length; i++) {
    fill(0, 255, 0);
    ellipse(points[i].x, points[i].y, 10, 5);
  }
  for (let i = 0; i < points.length - 1; i++) {
    stroke(255);
    //line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
  }
  //
  // // Drawing a line inbetween the points.
  // line(points[points.length - 1].x, points[point.length - 1].y, points[0].x, points[0].y);
  //
  // pop();

  fill(255, 0, 0);
  ellipse(50, 300, 10, 10);
  ellipse(250, 200, 10, 10);

  noFill();
  stroke(255);
  push();
  //translate(width / 2, height / 2);
  beginShape();
  curveVertex(points[points.length - 1].x, points[points.length - 1].y); // Control point, coordinate of the last point of the array
  for (let i = 0; i < points.length; i++) {
    curveVertex(points[i].x, points[i].y);
  }
  curveVertex(points[0].x, points[0].y);
  curveVertex(points[1].x, points[1].y); // Closes the circle
  endShape();
  pop();

  // Will move the points on the circle
  points[5].x += 1;
}
