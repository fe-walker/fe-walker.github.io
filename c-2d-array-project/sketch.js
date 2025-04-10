// Colour Picker Game
// Faith Walker
// 4/10/2025
//
// Extra for Experts:
// Didn't have time to attempt/finish extra for experts


// set constants
const MAIN = 0;
const ODD = 1;

// set variables
let cellSize = 60; 
let grid;
let rows = 10;
let cols = 10;
let clickCount = 0;
let attempts = 0;
let screen = "intro";

//colours to iterate through 
let mainColour = ["#053040", "#eb345f", "#2a3bdb" , "#8ad126", "#8d1cba", "#534bc9", "#e065c4", "#ff7614", "#a3ddf0", "#800416", "#ffc8ab", "#057d5a", "#f0ed81", "#c481f0", "#c40c1e", "#0c8dc4", "#09630c", "#f7a8b4", "white"];
let secondColour = ["#093d4f", "#e64767", "#3446eb", "#9ceb34", "#9623c4", "#544fdb", "#e36dc7", "#f7791e", "#abeaff", "#800819", "#ffcdb3", "#04805c", "#f7f486", "#c886f7", "#c21324", "#0c93c4", "#09660c", "#f7a8b4", "white"];

function setup() {
  createCanvas(cellSize * cols, cellSize * rows);

  grid = generateGrid(cols, rows);
}

function draw() {
  background(220);

  changeScreen();
}

// state variables that change if you win/lose
function changeScreen(){
  if(screen === "intro"){
    displayIntroText();
    if (keyCode === 13){
      screen = "start";
    }
  }
  else if (screen === "start"){
    displayGrid();
    if (attempts === 5){
      screen = "lost";
    }
    if (clickCount === 18){
      screen = "won";
    }
  }
  else if (screen === "won"){
    displayWonText();
    // happens when you've succesfully gone through every level with less than 5 missed attempts
  }
  else if (screen === "lost"){
    displayLostText();
    // happens when you make too many attempts on one level
  }
}

function displayIntroText(){
  // text that is displayed at the beginning with instructions
  if (screen === "intro"){
    textSize(14);
    text('Welcome to the colour picker test', 0, 10);
    text('The grid will display two colours, and you have to find the lighter colour', 0, 40);
    text("Once you've decided which is lighter, click it", 0, 70);
    text("You have 5 attempts for the whole game, if you choose the wrong colour, you use one attempt.", 0, 100);
    text("It will get more and more difficult to find the lighter colour as the grid expands", 0, 130);
    text("You win if you succesfully complete all 18 levels with under 5 wrong attempts", 0, 160);
    text("You lose immediately if you use all five attempts.", 0, 190);
    text('Good luck! You may press the enter key to begin playing', 0, 220);
  }
}

function displayLostText(){
  // text that is displayed when you lose
  textSize(20);
  fill("black");
  if (clickCount === 0){
    // when you lose on the first level
    text('You lost on level 1! consider going to the eye doctor.', 0, 20);
    text('CTRL R to start from the beginning' , 0, 80);
  }
  else if(clickCount === 17){
    // when you lose on the last level
    text("You lost on level 18. but don't worry", 0, 20);
    text('There was no lighter colour to find' , 0, 50);
    text('CTRL R to start from the beginning' , 0, 80);
  }
  else{
    // when you lose on any other level
    text('You lost on level '+ (clickCount+1) + ' !', 0, 20);
    text('You used all five attempts!' , 0, 50);
    text('CTRL R to start from the beginning' , 0, 80);
  }

}

function displayWonText(){
  // text that is displayed when you win
  textSize(20);
  fill("black");
  text('CONGRATS', 0, 20);
  text('You won! 20/20 vision and good colour recognition!', 0, 50);
  text('You used '+ attempts + ' attempts', 0, 80);   
  text('CTRL R to start from the beginning' , 0, 110);
}

function displayGrid(){
  // grid is displayed
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === MAIN){
        fill(mainColour[clickCount]);
      }
      else if (grid[y][x] === ODD){
        fill(secondColour[clickCount]);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function generateGrid(cols, rows){
  // creates the grid
  let newGrid = [];
  for (let y = 0; y < rows; y ++){
    newGrid.push([]);
    for (let x = 0; x < cols; x ++){
      if (random(10) > 5){
        newGrid[y].push(ODD);
      }
      else{
        newGrid[y].push(MAIN);
      }
    }
  }
  return newGrid;
}

function mousePressed(){
  // changes the level if you click the correct colour, stays on the current level if you pick the wrong colour
  if (screen === "start"){
    let x = Math.floor(mouseX/cellSize);
    let y = Math.floor(mouseY/cellSize);
    if (grid[y][x] === ODD){
      changeLevelIfNeeded();
    }
    else if (grid[y][x] === MAIN){
      stayOnLevel();
    }
  }
}

function changeLevelIfNeeded(){
  // if the user clicks the correct cell on the grid
  cellSize = cellSize - 2;
  cols = cols + 2;
  rows = rows + 2;
  
  grid = generateGrid(cols, rows);

  clickCount++;
}

function stayOnLevel(){
  // if the user clicks the wrong cell on the grid
  attempts++;
}

function changeFillColour(){
  // changes the fill colour of the grid based on the level
  if (grid[y][x] === MAIN){
    fill(mainColour[clickCount]);
  }
  else if (grid[y][x] === ODD){
    fill(secondColour[clickCount]);
  }
}
