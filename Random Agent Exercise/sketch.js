let direction;
let circleXpos = 250; // tracking the position of the object
let circleYpos = 250;

// let stepSize = 5; // We can use it for moving the object.

 function setup() {
   createCanvas(500,500);
   background(0);
 }

 function draw() {
   fill(255,0,0);
  ellipse(circleXpos,circleYpos,25,25);
  direction = round(random(-1,1));

// Will move circle left and right on x and y-axis (randomly)
  if(direction == -1){
    circleXpos = circleXpos + direction;
  } else if( direction == 1){
    circleXpos = circleXpos + direction;
  } else {
    circleXpos = circleXpos;
  }
  //console.log(direction);

} // End of draw function


// 19.1.2021
// John's code
// Normalization
// let randomNumX = round(random(-1,1));
// let randomNumY = round(random(-1,1));
// let moveX = randomNumX * stepSize;
// let moveY = randomNumY * stepSize;
// xPos += moveX;
// yPos += moveY;
// ellipse(xPos, yPos, 5, 5);

// How to pick only between two options when there are 3?
