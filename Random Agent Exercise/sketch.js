let direction;
let circleXpos = 250; // tracking the position of the object
let circleYpos = 250;

// let stepSize = 5; // We can use it for moving the object.

 function setup() {
   createCanvas(500,500);
   background(0);
 }


 function draw() {
  ellipse(circleXpos,circleYpos,25,25);
  direction = round(random(-1,1));

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
// let randomNum(X or Y) = round(random(-1,1));
// let moveX = randomNumX * stepSize;
// let moveY = randomNumY * stepSize;
// xPos += moveX;
// yPos += moveY;
// ellipse(xPos, yPos, 1, 1);
