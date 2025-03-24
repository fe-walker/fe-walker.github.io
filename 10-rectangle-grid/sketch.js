// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(windowWidth/CELL_SIZE);
  rows = Math.floor(windowHeight/CELL_SIZE);
  grid = generateNewGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}
function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      else if (grid[y][x] === 1){
        fill("black");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}
function generateNewGrid(cols, rows){
  let newGrid = [];
  for (y = 0; y < rows; y++){
    newGrid.push([]);
    for (x = 0; x < cols; x++){
      if (random(100)< 50){
        newGrid[y].push([0]);
      }
      else{
        newGrid[y].push([1]);
      }
    }
  }
  return newGrid;
}