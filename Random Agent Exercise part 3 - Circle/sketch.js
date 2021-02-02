
let xPos = 400; // tracking the position of the object
let yPos = 400;
let stepSize = 1; // We can use it for moving the object.
let angle = 45

 function setup() {
   createCanvas(800,800);
   background(0);
   //angleMode(RADIANS);
 }

 function draw() {
   let speed = map(mouseX,0, width, 2, 40);

   for(let x = 0; x < 10; x++){
     stroke(255);
     strokeWeight(5);
     point(xPos,yPos);

     // This code will move circle across the screen
     xPos += cos(radians(angle)) * stepSize;
     yPos += sin(radians(angle)) * stepSize;

     if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
angle = deflectAngle(xPos, yPos);
}

  } // End of Loop

} // End of draw function

function deflectAngle(_x, _y) {
let randomAngle = floor(random(0, 180));

if (_x > width) {
return randomAngle + 90;
} else if (_x < 0) {
return randomAngle + 270;
}

if (_y > height) {
return randomAngle + 180;

} else if (_y < 0) {
return randomAngle;
}
}

function keyPressed() {
if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
