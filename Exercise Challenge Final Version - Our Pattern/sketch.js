// Creative Coding - Year 4 - Term 1
// Exercise Challenge Final Version - Our Pattern
// The Shining carpet pattern

// Hexagon 1
let cWidth = 1754;
let numOfHex = 6;
let hexSize = cWidth/numOfHex;
let stepAngle = 360/numOfHex;
let radius = 130;

// Hexagon 2 - Triangles
let numOfHex2 = 3;
let hexSize2 = (cWidth/2) / numOfHex;
let stepAngle2 = 360 / numOfHex2;
let radius2 = 20;

// Hexagon 3 - Triangles
let numOfHex3 = 3;
let hexSize3 = (cWidth/2) / numOfHex;
let stepAngle3 = 360 / numOfHex3;
let radius3 = 40;

function setup() {
createCanvas(cWidth,2481);
//colorMode(RGB,numOfHex,numOfHex,numOfHex);
colorMode(RGB,255,255,255);
angleMode(DEGREES);
noLoop();
//rectMode(CENTER);
}

function draw() {
  // Hex 1
  let from = color(0,255,0 * 255);
  let to = color(0,100,0 * 255);
  // Hex 2
  let from1 = color(255,0,0 * 255);
  let to1 = color(255,182,193 * 255);

  background(250,218,221);

  for( let j=0; j<numOfHex; j++){
    for(let i=0; i<numOfHex; i++){
      let transX = i*hexSize;
      let transY = j*hexSize;
      push();
        translate(transX,transY);
        beginShape(); // Need to be specified.
        vertex(0,0);
        //let hexColor = color(lerpColor(from,to,(i+j*numOfHex)/80));
        let hexColor = color(0,179,41);
        createHex(hexColor);
      endShape(CLOSE);
      pop();

      push();
        translate(transX,transY);
        beginShape();
        vertex(0,0);
        let hexColor2 = color(lerpColor(from1,to1,(i+j*numOfHex2)/60));
        //let hexColor2 = color(255,233,0); // golden yellow
        createHex2(hexColor2);
      endShape(CLOSE);
      pop();

      push();
        translate(transX,transY);
        rotate(360/2);
        beginShape();
        vertex(0,0);
        let hexColor3 = color(lerpColor(from1,to1,(i+j*numOfHex3)/60));
        //let hexColor2 = color(255,233,0); // golden yellow
        createHex3(hexColor3);
      endShape(CLOSE);
      pop();
    }
  }
} // end of draw function

function createHex(_hexColor){
  for(let a=0; a<=360; a += stepAngle){
    let vx= (radius * cos(a)) + radius;
    let vy= (radius *sin(a)) + radius;
    stroke(250,218,221);
    strokeWeight(10);
    fill(_hexColor);
    //filter(GRAY);
    vertex(vx,vy);
  }
}

function createHex2(_hexColor2) {
  for(let a=0; a<=360; a += stepAngle2){
    let vx= (radius2 * cos(a)) + radius2;
    let vy= (radius2 *sin(a)) + radius2;
    noStroke();
    fill(_hexColor2);
    vertex(vx,vy);
  }
}

function createHex3(_hexColor3) {
  for(let a=0; a<=360; a += stepAngle3){
    let vx= (radius3 * cos(a)) + radius3;
    let vy= (radius3 *sin(a)) + radius3;
    noStroke();
    fill(_hexColor3);
    vertex(vx,vy);
  }
}
