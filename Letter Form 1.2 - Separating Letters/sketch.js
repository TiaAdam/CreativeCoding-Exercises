// Letter Form - 3rd and 9th of March, 2021

let font;
let fontPath;
let path;

// Vertexes that will be used to separate letters from each other
let beginVertex = 0;
let endVertex = 0;

// Setup Function
function setup() {
  createCanvas(800, 800);
  noLoop();

  opentype.load('data/Roboto-BoldItalic.ttf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

// Draw Function
function draw() {
  if (!font) return;
  background(0);

  translate(20, 220);
  fontPath = font.getPath("This is Tijana!", 100, 300, 100);
  let pah = new g.Path(fontPath.commands);
  path = g.resampleByAmount(path, 500);


  beginShape();
  for (let i = 0; i < fontPath.commands.length; i++) {
    fill(255, 255, 100);
    noStroke();
    ellipse(fontPath.commands[i].x, fontPath.commands[i].y);
    vertex(fontPath.commands[i].x, fontPath.commands[i].y);
  }
  endShape();
}

// Saves images inside of the folder
function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}
