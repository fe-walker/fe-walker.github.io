// Colour Blind Game
// Faith Walker
// 4/10/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to-do
// finish state variables (need to add text and stuff still)
// style.css stuff 

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
let mainColour = ["#053040", "#eb345f", "#2a3bdb" , "#8ad126", "#8d1cba", "#534bc9", "#e065c4", "#ff7614", "#a3ddf0", "#800416", "#ffc8ab", "#057d5a", "#f0ed81", "#c481f0", "#c40c1e", "#0c8dc4", "#09630c", "#f7a8b4"];
let secondColour = ["#093d4f", "#e64767", "#3446eb", "#9ceb34", "#9623c4", "#544fdb", "#e36dc7", "#f7791e", "#abeaff", "#800819", "#ffcdb3", "#04805c", "#f7f486", "#c886f7", "#c21324", "#0c93c4", "#09660c", "#f7a8b4"];

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
    console.log(screen);
  }
  else if (screen === "start"){
    console.log(screen);
    displayGrid();
    if (attempts === 5){
      screen = "lost";
    }
    if (clickCount === 18){
      screen = "won";
    }
  }
  else if (screen === "won"){
    console.log(screen);
    // happens when you've succesfully gone through every level with less than 5 missed attempts
  }
  else if (screen === "lost"){
    console.log(screen);
    // happens when you make too many attempts on one level
  }
}

function displayIntroText(){
  if (screen === "intro"){
    text('Welcome to the colour picker test', 0, 10);
    text('The grid will display two colours, and you have to find the lighter colour', 0, 20);
    text("Once you've decided which is lighter, click it", 0, 30);
    text("You have 5 attempts for the whole game, if you choose the wrong colour, you lose an attempt.", 0, 40);
    text("It will get more and more difficult to choose the lighter colour out as the grid expands", 0, 50);
    text("You win if you succesfully complete all 18 levels with under 5 wrong attempts", 0, 60);
    text("You lose immediately if you use all five attempts.", 0, 70);
    text('Good luck! You may press the enter key to begin playing', 0, 80);
  }
}

function displayLostText(){

}

function displayWonText(){

}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      // console.log(x, y);
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
    console.log("main or odd; " + grid[y][x]);
    console.log("x spot is " + x);
    console.log("y spot is " + y);
    if (grid[y][x] === ODD){
      changeLevelIfNeeded();
    }
    else if (grid[y][x] === MAIN){
      stayOnLevel();
    }
  }
}

function changeLevelIfNeeded(){
  cellSize = cellSize - 2;
  cols = cols + 2;
  rows = rows + 2;
  
  grid = generateGrid(cols, rows);

  // changeFillColour();
  clickCount++;
  // console.log(clickCount);
  // console.log("x spot is " + x);
  // console.log("y spot is " + y);


}

function stayOnLevel(){
  // clickCount = clickCount -1;
  attempts++;
  console.log("attempts is " + attempts);
}

function changeFillColour(){
  // changes the fill colour of the grid
  if (grid[y][x] === MAIN){
    fill(mainColour[clickCount]);
  }
  else if (grid[y][x] === ODD){
    fill(secondColour[clickCount]);
  }

  console.log(mainColour[clickCount]);
  console.log(secondColour[clickCount]);
}
