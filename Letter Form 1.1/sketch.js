// Letter Form - 2nd of March, 2021

let font;
let fontPath;
let path;

function setup() {
  createCanvas(800, 800);
  noLoop();
  opentype.load('data/blackjack.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  if (!font) return;
  background(0);

  translate(20, 220);
  fontPath = font.getPath("Hello World", 100, 300, 100);
  let pah = new g.Path(fontPath.commands);
  path = g.resampleByAmount(path, 500);

  
  beginShape();
  for (let i = 0; i < fontPath.commands.length; i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(fontPath.commands[i].x, fontPath.commands[i].y);
    vertex(fontPath.commands[i].x, fontPath.commands[i].y);
  }
  endShape();
}
