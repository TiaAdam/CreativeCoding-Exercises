// CA2 - Generative Agency
// Tijana Adam N001070280
// Creative Coding Y4

// Creates canvas and runs only once. 
function setup (){
  createCanvas(600,600);
}

function draw(){
  background(0);

}

// KeyPressed function will save an image in png format whenever user presses capital 'S' or lower 's' key.
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
