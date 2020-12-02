// Creative Coding - Year 4 - Term 1
// Exercise 2.1 - Shape and Pattern

let numOfSegments = 20;
let stepAngle = 360/numOfSegments;
let radius = 200;

function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100);
angleMode(RADIANS);
noStroke();

}

function draw(){
numOfSegments = map(mouseY,0,400,12,180);
stepAngle = 360/numOfSegments;
// Allows us to increase and decrease radius as we move the mouse
radius = map(mouseX,0,400,50,200);

background(mouseY/2, 100,100);
fill(360-mouseY/2,100,100);
ellipse(height/2,height/2, mouseX+1,mouseX+1); // x,y,width,height

} //end of draw function

function keyPressed(){
  if(key =='s' || key =="S"){
    saveCanvas(gd.timestamp(),'png'); // allows us to take a screenshot
  }
} // end of keyPressed function
