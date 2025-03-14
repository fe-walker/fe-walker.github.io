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
  background(0);
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
    speed: random(5),

  };
  ghostArray.push(someGhost);
}

function preload(){
  thing = loadImage("ghost-image-transparent.png");
}

function displayGhosts(ghost){
  image(ghost.img, ghost.x, ghost.y, ghost.w, ghost.h);
}

function moveGhosts(ghost){
  ghost.w += ghost.speed;
  ghost.h += ghost.speed;
}

function mousePressed(){
  spawnGhost();
}