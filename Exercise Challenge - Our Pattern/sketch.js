// Creative Coding - Year 4 - Term 1
// Exercise Challenge - Our Pattern
// The Shining carpet pattern

let numOfHex = 6;
let hexSize = 1200/numOfHex;
let stepAngle = 360/numOfHex;
let radius = 50;

function setup() {
createCanvas(1754,2481);
colorMode(HSB,360,100,100);
angleMode(DEGREES);
noStroke();
}

function draw() {
   background(22,19,23);

  for( let j=0; j<=numOfHex; j++){
    for(let i=0; i<numOfHex; i++){
      let transX = i*hexSize;
      let transY = j*hexSize;
      let color1 = color(360, 100,100);
      let color2 = color(330,100,100);
      let lerpedColor = lerpColor(color1,color2,0.04);
      push();
        translate(transX,transY);
        //rotate(TWO_PI / 0.03);
        //noFill();
        fill(lerpedColor);
        //stroke(22,19,23);
        //strokeWeight(10)
        //beginShape(); // Need to be specified.
        vertex(0,0);
        // Creating a for loop
        for(let a=0; a<=360; a += stepAngle){
          let vx= (radius * cos(a)) + radius;
          let vy= (radius *sin(a)) + radius;
          vertex(vx,vy);
        }
      endShape(CLOSE);
      pop();
    }
  }
} // End of draw function.
