// Creative Coding - Year 4 - Term 1
// Exercise 1.1 - Loops & Color

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(500,500);
colorMode(HSB,width,height,100) // Hue,Saturation and Boldness.
noStroke();
}

// This function contains the main code. For this particular example, a Grid is being created in order to generate colored squares across the Canvas.
function draw(){
  let stepX = mouseX+1;
  let stepY = mouseY+1;

for(let gridY=0; gridY<height; gridY += stepY){
  for(let gridX=0; gridX<width; gridX += stepX){
    fill(gridX, height - gridY,100);
    rect(gridX,gridY,stepX,stepY); // x,y,width,height
    }
  }
} // End of draw function.


// Whenever we press the left key we will be able to move canvas/grid around and also.
// Whenever we press ctrl+S screenshot will be taken and image will be saved in the format of date and time when it has been taken.
function keyPressed(){
  if(key =='s' || key =="S"){
    saveCanvas(gd.timestamp(),'png'); // Allows us to take a screenshot.
  }
} // End of keyPressed function
