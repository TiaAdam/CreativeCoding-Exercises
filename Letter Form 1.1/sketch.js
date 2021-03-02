// Letter Form - 2nd of March, 2021

let font;
let fontPath;

function setup() {
  createCanvas(500, 500);
  noLoop();
  opentype.load("data/Roboto-Lightitalic.ttf", function (err, f) {
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
  fontPath = font.getPath("Tia", 0, 0, 20);
}
