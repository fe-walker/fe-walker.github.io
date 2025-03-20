// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// I added a sound effect when the ghosts get shot, drew my own visuals.



// set variables 
let x;
let y;
let ghostArray = [];
let thing;
let screen = "start";
let ghostSize = 0;
let deathSpots = [];
let ghostsShot;
let waitTime = 5;
let lastSwitchedTime = 0;
const audioElement = new Audio("boom-sound-effect.mp3");


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
}

function draw() {
  background(0);
  changeScreenIfNeeded();
  showShot();
}

// array that spawns my ghosts
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

// all my state screen and images
function preload(){
  thing = loadImage("ghost-image-transparent.png");
  startScreen = loadImage("start-screen-ghosthunter.png");
  mainScreen = loadImage("main-screen-ghosthunter.png");
  endScreen = loadImage("end-screen-ghosthunter.png");
  winScreen = loadImage("end-screen-ghosthunter.png"); 
  // add win screen later at home !!
}

// displays the image of the ghosts
function displayGhosts(ghost){
  image(ghost.img, ghost.x, ghost.y, ghost.w, ghost.h );
}

// makes it so that the ghosts get larger as they approach the screen
function moveGhosts(ghost){
  ghost.w += ghost.speed;
  ghost.h += ghost.speed;
  ghostSize += 1;
}

// changes the state
function changeScreenIfNeeded(){
  if (screen === "start"){
    displayInstruction();
    if (keyCode === ENTER){
      clear(); 
      ghostsShot = 0;
      screen = "play";
      showGhosts();
    }
  }
  else if (screen === "play"){
    displayMainScreen();
    for (let ghost of ghostArray){
      moveGhosts(ghost);
      displayGhosts(ghost);
      removeShots();
    }
    if (ghostSize > 400){
      clear();
      screen = "dead";
    }
    else if (ghostsShot === 150){
      clear();
      screen = "win";
    }
  }
  else if (screen === "dead"){
    clear();
    ghostSize = 0;
    displayEndScreen();
  }
  else if (screen === "win"){
    clear();
    ghostSize = 0;
    displayWinScreen();
  }
}

// shows instructions to player
function displayInstruction(){
  image(startScreen, 0, 0, windowWidth, windowHeight);
  fill("white");
  text("Press enter to begin, use mouse to aim and shoot to kill the ghosts", windowWidth/2 -200, windowHeight/2 + 100);
}

// displays main play screen
function displayMainScreen(){
  image(mainScreen, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  fill("white");
  text(ghostsShot, 50, 50);
}

// death screen
function displayEndScreen(){
  image(endScreen, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}

// win screen
function displayWinScreen(){
  image(winScreen, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  fill("white");
  text(ghostsShot, 300, 50);
}

// function to kill ghosts and make text where i click
function mousePressed(){
  for (let ghost of ghostArray){
    if (ghost.x - ghost.w/2 < mouseX &&  mouseX < ghost.x + ghost.w/2 && ghost.y - ghost.h/2 < mouseY && mouseY < ghost.y + ghost.h/2){
      audioElement.play();
      let index = ghostArray.indexOf(ghost);
      ghostArray.splice(index, 1);
      ghostSize = 0;
      ghostsShot += 1;
    }
  }
  let spot = {
    x: mouseX,
    y: mouseY,
  };
  deathSpots.push(spot);
}

// shows text of where i clicked
function showShot(){
  if (screen === "play"){
    for (let shot of deathSpots){
      fill("red");
      text("X", shot.x, shot.y);
    }
  }
}

// ghost stuff pulled from set up to spawn ghosts and time their appearances
function showGhosts(){
  imageMode(CENTER);
  spawnGhost();
  window.setInterval(spawnGhost, 500);
}


// removes the shot marking after a cerain wait time 
function removeShots(){
  for (let shot of deathSpots){
    if (millis() > lastSwitchedTime + waitTime){
      let indexOfShots = deathSpots.indexOf(shot);
      deathSpots.splice(indexOfShots, 1);
      lastSwitchedTime += 1000;
    }
  }
}

