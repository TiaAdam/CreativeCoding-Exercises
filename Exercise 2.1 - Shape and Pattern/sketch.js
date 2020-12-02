// Creative Coding - Year 4 - Term 1
// Exercise 2.1 - Shape and Pattern

let numOfSegments = 20;
let stepAngle = 360/numOfSegments;
let radius = 200;

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100); // Hue,Saturation and Boldness.
angleMode(RADIANS);
noStroke();

}

function draw(){
background(mouseY/2, 100,100);
numOfSegments = map(mouseY,0,400,12,180);
stepAngle = 360/numOfSegments;

// Allows us to increase and decrease radius as we move the mouse.
radius = map(mouseX,0,400,50,200);

fill(360-mouseY/2,100,100);
ellipse(height/2,height/2, mouseX+1,mouseX+1); // x,y,width,height.

} // End of draw function


function keyPressed(){
  if(key =='s' || key =="S"){
    saveCanvas(gd.timestamp(),'png'); // Allows us to take a screenshot
  }
} // Wnd of keyPressed function
