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
let screen = "start";
let isAlive = true;
let ghostSize = 0;
let deathSpots = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);

  // showGhosts();
}

function draw() {
  background(0);
  changeScreenIfNeeded();
  showShot();
}

function spawnGhost(){
  let someGhost = {
    x: random(50, windowWidth - 50),
    y: random(300, windowHeight-300),
    w: 10,
    h: 10,
    img: thing,
    speed: random(3, 15),

  };
  ghostArray.push(someGhost);
}

function preload(){
  thing = loadImage("ghost-image-transparent.png");
}

function displayGhosts(ghost){
  image(ghost.img, ghost.x, ghost.y, ghost.w, ghost.h );
}

function moveGhosts(ghost){
  ghost.w += ghost.speed;
  ghost.h += ghost.speed;
  ghostSize += 1;
}


function changeScreenIfNeeded(){
  if (screen === "start"){
    displayInstruction();
    if (keyCode === ENTER){
      clear(); 
      screen = "play";
      showGhosts();
    }
  }
  else if (screen === "play"){
    // showGhosts();
    // imageMode(CENTER);
    // spawnGhost();
    // window.setInterval(spawnGhost, 500);
    for (let ghost of ghostArray){
      moveGhosts(ghost);
      displayGhosts(ghost);
      if (ghostSize > 400){
        clear();
        screen = "dead";
      }
    }
  }
  else if (screen === "dead"){
    clear();
    ghostSize = 0;
    // show dead screen
    if (keyCode === 82){
      screen = "start";
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

function mousePressed(){
  for (let ghost of ghostArray){
    if (dist(mouseX, mouseY, ghost.x, ghost.y) < ghost.w){
      // the ghosts are dying no matter where i click change this 
      let index = ghostArray.indexOf(ghost);
      ghostArray.splice(index, 1);
      ghostSize = 0;
    }
  }
  let spot = {
    x: mouseX,
    y: mouseY,
  };
  deathSpots.push(spot);
}

function showShot(){
  if (screen === "play"){
    for (let shot of deathSpots){
      fill("green");
      text("shot", shot.x, shot.y);
    }
  }
}

function showGhosts(){
  imageMode(CENTER);
  spawnGhost();
  window.setInterval(spawnGhost, 500);
}