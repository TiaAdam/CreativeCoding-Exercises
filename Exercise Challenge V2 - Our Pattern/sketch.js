// Shape and Pattern 16.11.2020
// Exercise - Our Pattern, version 2
// The Shining carpet pattern

// Hexagon 1
let cWidth = 1754;
let numOfHex = 6;
let hexSize = cWidth/numOfHex;
let stepAngle = 360/numOfHex;
let radius = 100;

// Hexagon 2
let numOfHex2 = 6;
let hexSize2 = (cWidth/2) / numOfHex;
let stepAngle2 = 360 / numOfHex2;
let radius2 = 50;

function setup() {
createCanvas(cWidth,2481)
//colorMode(RGB,numOfHex,numOfHex,numOfHex);
colorMode(RGB,255,255,255);
//angleMode(DEGREES);
rectMode(CENTER);
}

function draw() {
  background(234,98,40);

  for( let j=0; j<numOfHex; j++){
    for(let i=0; i<numOfHex; i++){
      let transX = i*hexSize;
      let transY = j*hexSize;
      push();
        translate(transX,transY);
        //rotate(TWO_PI / 6);
        //noFill();
        beginShape(); // Need to be specified.
        vertex(0,0);
        //let hexColor = color(i,0,numOfHex-j);
        createHex();
      endShape(CLOSE);
      pop();

      push();
      translate(transX,transY);
      beginShape();
      createHex2();
      endShape(CLOSE);
      pop();
    }
  }
} // end of draw function

function createHex(){
  // Creating a for loop
  for(let a=0; a<=360; a += stepAngle){
    let vx= (radius * cos(a)) + radius;
    let vy= (radius *sin(a)) + radius;
    stroke(234,98,40);
    strokeWeight(10);
    fill(60,60,60);
    vertex(vx,vy);
  }
}

function createHex2() {
  for(let a=0; a<=360; a += stepAngle2){
    let vx= (radius2 * cos(a)) + radius2;
    let vy= (radius2 *sin(a)) + radius2;
    noStroke();
    fill(159,33,39);
    vertex(vx,vy);
  }
}
