// Letter Form - 2nd of March, 2021

function setup() {
  createCanvas(500, 500);
  noLoop();
  opentype.load('data/Roboto-Lightitalic.ttf', function(err, f){
    if(err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
    
  });
}

function draw(){
  background(0);
}
