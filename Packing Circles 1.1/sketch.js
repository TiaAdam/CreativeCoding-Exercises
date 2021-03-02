// Packing Circles - 24th of February, 2021

let circles = []; // Array which will store circles.
//let width = 500;
//let height = 500;

// Circle class, with all the required parameters for the circle.
class Circle {
  constructor(_x, _y, _r){
    this.position = createVector(_x, _y);
    this.radius = _r;
  }
}

function setup (){
  createCanvas(500,500);
  circles.push(new Circle(250,250,20));
  //noLoop;
}

function draw (){
  background(0);
  for (let i = 0; i < circles.length; i++){
    let packingCircle = circles[i];
    stroke(255,255,0);
    noFill();
    ellipse(packingCircle.position.x, packingCircle.position.y, packingCircle.radius*2, packingCircle.radius*2);

  }
  generateCircles();
}

// This function will add more circles to the array 'circles' and display them on the canvas.
function generateCircles() {
  let newCircle = new Circle(random(width), random(height), 10);
  // To check if circle can be drawn at certain spot.
  for(let i = 0; i < circles.length; i++){
    let anotherCircle = circles[i];
    let distance = dist(newCircle.position.x, newCircle.position.y, anotherCircle.position.x, anotherCircle.position.y);
    if(distance < anotherCircle.radius + 4) {
      newCircle = undefined;
      break;
    }
  }
  // If circle is able to display on certain spot
  if(newCircle){
    circles.push(newCircle);
    return true;
  } else {
    return false;
  }
}
