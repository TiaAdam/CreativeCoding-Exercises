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
  if(circles.length < 500){
    

  }

}
