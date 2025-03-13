// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let ghostArray = [];
let thing;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  spawnGhost();
}

function draw() {
  background(220);
  for (let ghost of ghostArray){
    moveGhosts(ghost);
    displayGhosts(ghost);
  }
}

function spawnGhost(){
  let someGhost = {
    x: random(width),
    y: random(height),
    w: 10,
    h: 10,
    img: thing,
    dx: random(5),
    dy: random(5),

  };
  ghostArray.push(someGhost);
}

function preload(){
  thing = loadImage("ghost-image.jfif");
}

function displayGhosts(ghost){
  image(ghost.img, ghost.x, ghost.y, ghost.w, ghost.h);
}

function moveGhosts(ghost){
  ghost.w += ghost.dx;
  ghost.h += ghost.dy;
}

function mousePressed(){
  spawnGhost();
}