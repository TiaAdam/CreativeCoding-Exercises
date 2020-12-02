// Creative Coding - Year 4 - Term 1
// Exercise 1.2 - Adding interactivity and images

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(720,720);
colorMode(HSB,360,100,100) // Hue,Saturation and Boldness.
noStroke();
rectMode(CENTER);

}

// This function contains the main code. For this particular example, a Grid is being created in order to generate colored squares across the Canvas.
function draw(){
background(mouseY/2,100,100);
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX+1,mouseX+1); // x,y,width,height

console.log(mouseX);
} // End of draw function.


// Whenever we press the left key we will be able to move canvas/grid around and also
//Whenever we press ctrl+S screenshot will be taken and image will be saved in the format of date and time when it has been taken.
function keyPressed(){
  if(key =='s' || key =="S"){
    saveCanvas(gd.timestamp(),'png'); // Allows us to take a screenshot.
  }
} // End of keyPressed function
