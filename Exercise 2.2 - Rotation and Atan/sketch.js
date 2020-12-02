
// Shape and Pattern 20.10.2020
// Exercise 02 - Rotation and Atan

let numOfSquares = 10;
let squareSize = 500/numOfSquares;

function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100);
rectMode(CENTER);
noStroke();
}

function draw(){
background(0);

// nested for loop that draws rectangles across the canvas
// y-axis
  for( let j=0; j<=numOfSquares; j++){
    // x-axis
    for(let i=0; i<numOfSquares; i++){
      let transX = i *squareSize + squareSize / 2;
      let transY = j * squareSize + squareSize / 2;
      push();
      translate(transX,transY);
      //translate(i*squareSize+squareSize/2,j*squareSize + squareSize/2);
      let rotateValue = atan2(mouseY-transY,mouseX - transX);
      let dis = dist(mouseX,mouseY,transX,transY); // dist p5
      let scale = map(dis,0,500,10, 50); // map p5

      rotate(rotateValue);
      let startColor = color(360,100,100);
      let endColor = color(200,50,50);
      let lerpedColor = lerpColor(startColor,endColor,(i+j*numOfSquares)/400);

      fill(lerpedColor);
      stroke(360,100,100);
      rect(0,0,scale,scale);
      pop();

    }
  }
} //end of draw function
