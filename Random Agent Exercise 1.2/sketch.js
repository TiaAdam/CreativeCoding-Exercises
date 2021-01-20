let direction;
let xPos = 250; // tracking the position of the object
let yPos = 250;
let stepSize = 5; // We can use it for moving the object.

 function setup() {
   createCanvas(500,500);
   background(0);
 }

 function draw() {
   let speed = map(mouseX,0, width, 2, 40);
   let diam = map(mouseY, 0, width, 1, 10);

   for(let x = 0; x < speed; x++){
    fill(255,10);
    noStroke();
     let randomNumX = round(random(-1,1));
     let randomNumY = round(random(-1,1));
     let moveX = randomNumX * stepSize;
      let moveY = randomNumY * stepSize;
      xPos += moveX;
      yPos += moveY;
      ellipse(xPos, yPos, 5, 5);
  }

} // End of draw function
