// Project Title
// Faith Walker
// 3/4/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// set variables 
let xSpot = 0;
let ySpot = 0;
let size = 10; 
let r = 0;
let g = 0;
let b = 0;
let screen = "start";


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 255, 255);
  cursor(CROSS);
}

function draw() {
  changeScreen();
}



function displayPen(){
  // shows the pen used to draw 
  if (mouseIsPressed){
    noStroke();
    fill(r, g, b);
    circle(mouseX, mouseY, size);
  }
}

// changes size and colour of pen based on the keys pressed 
function keyPressed(){
  // increase pen size 
  if (keyCode === UP_ARROW){
    size = size += 5;
  }
  // decrease pen size
  else if (keyCode === DOWN_ARROW){
    size = size -= 5;
  }
  // changes R G B values of pen
  else if (key === 'r'){
    r = r += 20;
  }
  else if (key === 'b'){
    b = b += 20;
  }
  else if (key === 'g'){
    g = g += 20;
  }
  else if (key === 't'){
    r = r -= 20;
  }
  else if (key === 'n'){
    b = b -= 20;
  }
  else if (key === 'h'){
    g = g -= 20;
  }
}

function displayEraser(){
  // when 'e' key is being pressed pen turns to an eraser 
  if (keyIsDown(69) === true){ 
    circle(xSpot, ySpot, size);
    erase();
  }
  else{
    // makes it so that when 'e' isnt being pressed it goes back to pen
    noErase();
    displayPen();
  }
}
function changeScreen(){
  // displays a starting instruction screen
  if (screen === "start"){
    fill("white");
    rect(0,0,width,height);
    displayScreen();
    if (keyCode === ENTER){
      clear(); 
      screen = "draw";
    }
  }
  // displays drawing canvas with pen and control board
  else if (screen === "draw"){
    drawingScreen();
  }
}

function displayScreen(){
  // displays instructions for the user 
  textSize(16);
  textAlign(CENTER);
  stroke("black");
  fill("black");
  text('Press and hold mouse to draw, up and down arrows to adjust brush size', width/2, height/2);
  fill("black");
  text('Press enter key to begin drawing', width/2, height/2 + 20);
  fill("red");
  text('r to make redder, t to make less red', width/2, height/2 - 20);
  fill("green");
  text('g to make greener, h to make less green', width/2, height/2 - 40);
  fill("blue");
  text('b to make bluer, n to make less blue', width/2, height/2 - 60);
}

function drawingScreen(){
  noStroke();
  //   displays a "control board"
  fill("#00FF01");
  rect(0, 0, width, 50);
  //   erasure instructions
  fill("black");
  text('e to erase', 100, 30);
  //   square showing what colour your pen is
  fill (r, g, b);
  rect(10, 10, 25, 25);
  //   calls for the pen and the eraser 
  displayPen();
  displayEraser();
}

function saveAsImage(){
  if (keyCode === '53'){
    saveCanvas('drawing','jpg');
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}