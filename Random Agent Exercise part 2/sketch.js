//let direction;
let xPos = 250; // tracking the position of the object
let yPos = 250;
let stepSize = 5; // We can use it for moving the object.
let optionsX = [-1,-1, 0, 1, 1, 1, 1]; // Array of possible options when object is moving on x-axis.
let optionsY = [-1, 0, 1];
let drawMode;

 function setup() {
   createCanvas(500,500);
   background(0);
 }

 function draw() {
   let speed = map(mouseX,0, width, 2, 40);
   let diam = map(mouseY, 0, width, 1, 10);

   for(let x = 0; x < speed; x++){
     fill(250, 40);
     noStroke();
     //let randomNumX = round(random(0, optionsX.length));
     //let randomNumY = round(random(0, optionsY.length));

      let moveX = optionsX[floor(random(0, optionsX.length))] * stepSize;
      let moveY = optionsX[floor(random(0, optionsY.length))] * stepSize;
      //let moveX = randomNumX * stepSize;
      //let moveY = randomNumY * stepSize;

      xPos += moveX;
      yPos += moveY;

      xPos > width ? xPos = 0 : null;
      xPos < 0 ? xPos = width : null;
      yPos > height ? yPos = 0 : null;
      yPos < 0 ? yPos = height : null;

      ellipse(xPos, yPos, 5, 5);

  } // End of Loop
  //checkBoundaries();
} // End of draw function


// CODE DONE WITH OTHER STUDENTS
//function checkBoundaries() {
  //if(yPos < 500 || yPos < 0) {
    //yPos = 500 / 2;
  //}
  //if (xPos > 500 || xPos < 0) {
    //xPos = 0;
  //}
//}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) clear();

  if (key == '1'){
    drawMode = 1;
    stepSize = 1;
    diameter = 1;
  }
  if (key == '2') {
    drawMode = 2;
    stepSize = 1;
    diameter = 1;
  }
  if (key == '3') {
    drawMode = 3;
    stepSize = 10;
    diameter = 5;
  }
}
