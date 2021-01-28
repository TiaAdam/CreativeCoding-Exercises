
let xPos = 400; // tracking the position of the object
let yPos = 400;
let stepSize = 5; // We can use it for moving the object.
angle = 45

 function setup() {
   createCanvas(800,800);
   background(0);
   angleMode(RADIANS);
 }

 function draw() {
   let speed = map(mouseX,0, width, 2, 10);

   for(let x = 0; x < speed; x++){
     fill(255,0,0);
     noStroke();
     point(xPos,yPos);

     // This code will move circle across the screen
     xPos += cos(radians(angle)) * stepSize;
     yPos += sin(radians(angle)) * stepSize;

  } // End of Loop

} // End of draw function


function randomAngle(posX, posY) {
  if(posX < 0){
    return floor(random(90, 270));
  }
  if(posX > width){
    return floor(random(90,270));
  }
  if(posY < 0 ){
    return floor(random(0,180));
  }
  if(posY > height){
    return floor(random(0,180))
  }
}
