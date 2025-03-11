// Perlin noise demo moving a circle 

let x;
let y;
let dx = 0; 
let dy = 1000;
let deltaTime = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  x = noise(dx)*width;
  y = noise(dy)*height;
  fill("#defa61");
  circle(x, y, random(15));

  dx += deltaTime;
  dy += deltaTime;
}
