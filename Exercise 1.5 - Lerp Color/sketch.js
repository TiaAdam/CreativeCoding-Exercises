// Creative Coding - Year 4 - Term 1
// Exercise 1.5 - Lerp Color

let numOfSegments;
let stepAngle;
let radius;

// This function runs once. In here, we set up a Canvas.
function setup(){
createCanvas(500,500);
colorMode(HSB,360,100,100) // Hue,Saturation and Boldness.
angleMode(RADIANS);
noStroke();
}

function draw(){
  // Creating two colors required for Lerp Color function.
  let startColor = color(244,80,80);
  let endColor = color(44,80,80);

  // If statement written in one line.
    mouseX<=0 ? mouseX=6: null;
    // Mapping
    numOfSegments = map(mouseX,0,width,6,100);
    stepAngle = TWO_PI/numOfSegments; // TWO_PI since we are working in radians now
    radius = 150;

    background(0);
    push();
        translate(250,250);
        fill(200,100,100);
        beginShape(TRIANGLE_FAN);
        vertex(0,0);

      for(let a=0; a<=TWO_PI+0.5; a+=stepAngle){
        let vx = (radius * cos(a));
        let vy = (radius * sin(a));
        // Here, we are using Lerp Color to fill in the segments of Triangle Fan.
          fill(lerpColor(startColor,endColor,a/TWO_PI));
          vertex(vx,vy);

        } // End of for loop 1.
      endShape();
      pop();

  // For loop which will display 6 squares across Canvas.
    for(let a=0; a<6; a++){
    fill(lerpColor(startColor,endColor,a/6));
    rect((51*a)+30,30,20,50);

  } // End of For loop 2.
} // End of draw function.
