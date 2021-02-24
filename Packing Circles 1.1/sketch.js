// Packing Circles - 24th of February, 2021

let circles = []; // Array which will store circles.
let width = 500;
let height = 500;

// Circle class, with all the required parameters for the circle.
class Circle {
  constructor(_x, _y, _r){
    this.position = createVector(_x, _y);
    this.radius = _r;
  }
}

function setup (){
  createCanvas(width,height);
  circles.push(new Circle(250,250,20));
  //noLoop;
}

function draw (){
  background(0);
  for (let i = 0; i< circles.length; i++){
    let packingCircle = circles[i];
    stroke(255,0,0);
    noFill();
    ellipse(packingCircle.position.x, packingCircle.position.y, packingCircle.radius*2, packingCircle.radius*2);

  }
}

// Showing created circle function.
Circle.prototype.show = function() {
  noFill();
  strokeWeight(1.5);
  stroke(255, 0, 175, 225);
  ellipse(this.x, this.y, this.r * 2);

}
