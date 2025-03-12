// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
// let dx = 0; 
// let dy = 1000;
// let deltaTime = 0.01;
// let screen = "start"; 
let ghostArray = [];
// let dx = 5;
// let dy = 5; change variable names
let thing;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  spawnGhost();
}

function draw() {
  background(220);
  for (let ghost of ghostArray){
    // moveGhosts(ghost);
    displayGhosts(ghost);
  }
}

function spawnGhost(){
  let someGhost = {
    x: width/2,
    y: height/2,
    w: 20,
    h: 20,
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
  image(ghost.img, ghost.x, ghost.y, ghost.img.w, ghost.img.h);
}

function moveGhosts(ghost){
  
}