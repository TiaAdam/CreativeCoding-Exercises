// Creative Coding - Year 4 - Term 1
// Exercise 2.3 - Displaying randomized pattern

let numOfSquares = 10;
let squareSize = 500/numOfSquares;

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100);
rectMode(CENTER);
noStroke();
noLoop();
}

function draw(){
background(0);

// Nested for loop that draws rectangles across the Canvas.
// y-axis - Always goes first in the loop!
  for( let j=0; j<=numOfSquares; j++){
    // x-axis
    for(let i=0; i<numOfSquares; i++){
      let transX = i *squareSize + squareSize / 2;
      let transY = j * squareSize + squareSize / 2;
      push();
      translate(transX,transY);

      let dis = dist(mouseX,mouseY,transX,transY);
      let scale = map(dis,0,500,10, 50);

      let startColor = color(360,100,100);
      let endColor = color(200,50,50);
      //let lerpedColor = lerpColor(startColor,endColor,(i+j*numOfSquares)/400);

      //fill(lerpedColor);
      //stroke(360,100,100);

      // If statements, which will display either output when it's 0 or 1.
          if(random(1) > 0.5){
            noStroke();
            fill(300,19,78);
            //line(0,0,squareSize,squareSize);
            triangle(0,0,35,0,35,35);
            fill(344,57,91);
            triangle(35,35,0,35,0,0);

          } else if(random(0) < 0.5){
            noStroke();
            fill(60,40,99);
            //fill(lerpedColor);
            //line(0,0,squareSize,squareSize);
            //line(0,squareSize,squareSize,0);
            triangle(0,0,0,35,35,0);
            fill(300,55,91);
            triangle(35,35,35,0,0,35);

          }
      pop();

    }
  }
} // End of draw function.
