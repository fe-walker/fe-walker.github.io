// rotate translate


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate(width/2, height/2);
  rotate(mouseX);
  fill("blue");
  rect(0, 0, 200, 75);
  pop();

  fill("green");
  rect(200, 100, width*2, 200);
}
