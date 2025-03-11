// Ghost Hunter
// Faith Walker
// 3/20/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 0; 
let dy = 1000;
let deltaTime = 0.05;
let screen = "start"; 
let ghostArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  changeScreen();
  for (let ghost of ghostArray){
    moveGhosts(ghost);
    displayGhosts(ghost);
  }
}

function changeScreen(){
  if (screen === "start"){
    entranceScreen();
    if (mouseClicked){
      screen = "mode1";
    }
  }
  else if (screen === "mode1"){
  }
}

function entranceScreen(){
  fill("#defa61");
  text('name in progress', width/2, height/2);
  x = noise(dx)*width;
  y = noise(dy)*height;
  fill("#defa61");
  circle(x, y, random(15));

  dx += deltaTime;
  dy += deltaTime;
  // if screen is clicked i want to change to a main screen 
}

function mode1(){

}

function spawnGhost(){
  let someGhost = {
    // values
  };
  // ballArray.push(someBall);
}