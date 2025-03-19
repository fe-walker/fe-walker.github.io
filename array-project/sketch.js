// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// to-d0 
// finish death screen, create more instructions, make it so the shot text goes away after a bit, maybe change shooting a little 

let x;
let y;
let ghostArray = [];
let thing;
let screen = "start";
let ghostSize = 0;
let deathSpots = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
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
  startScreen = loadImage("start-screen-ghosthunter.png");
  mainScreen = loadImage("main-screen-ghosthunter.png");
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
    displayMainScreen();
    for (let ghost of ghostArray){
      moveGhosts(ghost);
      displayGhosts(ghost);
    }
    if (ghostSize > 400){
      clear();
      screen = "dead";
    }
  }
  else if (screen === "dead"){
    clear();
    ghostSize = 0;
    // show dead screen
  }
}

function displayInstruction(){
  image(startScreen, 0, 0, windowWidth, windowHeight);
}

function displayMainScreen(){
  image(mainScreen, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}

function mousePressed(){
  for (let ghost of ghostArray){
    if (ghost.x - ghost.w/2 < mouseX &&  mouseX < ghost.x + ghost.w/2 && ghost.y - ghost.h/2 < mouseY && mouseY < ghost.y + ghost.h/2){
      // still isnt working ?
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

