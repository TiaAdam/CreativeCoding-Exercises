let direction;
let circleXpos = 250;
let circleYpos = 250;


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
 }
