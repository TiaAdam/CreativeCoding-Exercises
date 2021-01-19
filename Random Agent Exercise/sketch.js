let direction;


 function setup() {
   createCanvas(500,500);
   background(0);

 }

 function draw() {

   ellipse(250,250,25,25);
  direction = round(random(-1,1));
  //console.log(direction);
 }
