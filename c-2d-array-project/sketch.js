// Colour Blind Game
// Faith Walker
// 4/9/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to-do
// finish state variables
// style.css stuff 


let cellSize = 60; 
let grid;
let rows = 10;
let cols = 10;
let mainColour = ["#3446eb", "#c40c1e", "#09660c","#f7f486", "#e36dc7", "#ffc8ab", "#abeaff", "#093d4f", "#8d1cba", "#3446eb", "#c40c1e", "#09660c","#f7f486", "#e36dc7", "#ffc8ab", "#abeaff", "#093d4f", "#8d1cba"];
let secondColour = ["#2a3bdb","#c21324","#09630c","#f0ed81","#e065c4", "#ffcdb3", "#a3ddf0", "#053040", "#9623c4", "#2a3bdb","#c21324","#09630c","#f0ed81","#e065c4", "#ffcdb3", "#a3ddf0", "#053040", "#9623c4"];
let clickCount = 0;
let attempts = 0;
let screen = "intro";
const MAIN = 0;
const ODD = 1;


function setup() {
  createCanvas(cellSize * cols, cellSize * rows);

  grid = generateGrid(cols, rows);
}

function draw() {
  background(220);

  changeScreen();
}

function changeScreen(){
  if(screen === "intro"){
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
  }
  else if (screen === "lost"){
    console.log(screen);
    // happens when you make too many attempts on one level
  }
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      console.log(x, y, mainColour, clickCount);
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
  if (screen === "start"){
    let x = Math.floor(mouseX/cellSize);
    let y = Math.floor(mouseY/cellSize);
    console.log("grid spot is " + grid[y][x]);
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
  if (grid[y][x] === MAIN){
    fill(mainColour[clickCount]);
  }
  else if (grid[y][x] === ODD){
    fill(secondColour[clickCount]);
  }

  console.log(mainColour[clickCount]);
  console.log(secondColour[clickCount]);
}
