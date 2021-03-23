// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4

let noOfSegments = 300;
let angle = 360 / noOfSegments;
let radius = 450;

function setup() {
  createCanvas(900, 900);
  strokeCap(ROUND);

}

function draw() {
  background('#151515');
  // Moving from origin (0,0), to the center of the window.
  translate(width / 2, height / 2);

  let noOfSegments = int(map(mouseY, 0, height, 2, 80));
  let radius = mouseX - width / 2;
  let angle = TAU / noOfSegments;


  // For loop
  for(let a = 0; a <= noOfSegments; a++){
    let x = cos(angle * a) * radius;
    let y = sin(angle * a) * radius;
    fill(0,255,255);
    strokeWeight(5);
    line(0,0,x,y);
  }
}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
