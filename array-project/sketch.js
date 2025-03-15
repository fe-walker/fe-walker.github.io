// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// want to center my brown rectangles so text is centered, when you click the ghost disappears, win screen

let x;
let y;
let ghostArray = [];
let thing;
let waitTime = 2000;
let lastSpawnedTime = 0;
let screen = "start";
let isAlive = true;
let ghostSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  spawnGhost();
  cursor(CROSS);
}

function draw() {
  background(0);
  changeScreenIfNeeded();
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
  ghostSize += 1;
}

function moreGhosts(){
  if (millis() > lastSpawnedTime + waitTime){
    spawnGhost();
    lastSpawnedTime += 700;
  }
}

function changeScreenIfNeeded(){
  if (screen === "start"){
    displayInstruction();
    if (keyCode === ENTER){
      clear(); 
      screen = "play";
    }
  }
  else if (screen === "play"){
    for (let ghost of ghostArray){
      moveGhosts(ghost);
      fill("white");
      text(ghostSize, width/2 - 50, height/2 - 50);
      displayGhosts(ghost);
      moreGhosts();
      if (ghostSize > 1000){
        fill("red");
        text("dead", width/2, height/2);
      }
      // else if (img.mousePressed()){
      //   fill("green");
      //   text("shot", width/2 +50, height/2 + 50);

      // }
    }
  }
  
}

function displayInstruction(){
  fill("#1a0704");
  rect(0,0,width,height);
  fill("#2b0c08");
  rect(width- 550,0,width - 500,height);
  fill("rgb(63, 21, 14)");
  rect(295,0,width - 600,height);
  fill("rgb(247, 232, 232)");
  text("GHOST HUNTER", width/2.25, height/2);
}