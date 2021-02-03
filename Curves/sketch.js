// Curves 03.02.2021

let points = [];
let numOfSegments = 6;
let radius = 100;

function setup() {
  createCanvas(500,500);
  background(0);

  let angle = radians(360/numOfSegments);
  for(let i=0; i<numOfSegments; i++){
    let xPos = cos(angle*i) * radius;
    let yPos = sin(angle*i) * radius;
    points.push(createVector(xPos,yPos));

  }
}

function draw () {
  for(let i = 0; i < points.length; i++){
    fill(255,0,0);
    ellipse(points[i].x, points[i].y, 10, 5);
  }
}
