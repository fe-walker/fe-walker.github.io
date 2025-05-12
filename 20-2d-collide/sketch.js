// 2d collide

let hit = false;

function setup() {
  createCanvas(500,500);
}



function draw() {
  background(255);
  ellipse(200, 200, 50, 150);
  point(mouseX, mouseY);

  hit = collidePointEllipse(mouseX, mouseY, 200, 200, 50, 150);

  // Use vectors as input:
  // const mouse         = createVector(mouseX, mouseY);
  // const ellipse_start = createVector(200, 200);
  // const ellipse_size  = createVector(50, 150);
  // hit = collidePointEllipseVector(mouse, ellipse_start, ellipse_size);

  stroke(hit ? color('red') : 0);
  print('colliding?', hit);
}