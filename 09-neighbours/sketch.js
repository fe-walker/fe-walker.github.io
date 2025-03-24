// Grid neighbours demo


let cellSize; 
const SQAURE_DIMENSIONS = 12;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (height > width){
    cellSize = width/SQAURE_DIMENSIONS;
  }
  else{
    cellSize = height/SQAURE_DIMENSIONS;
  }

  grid = generateRandomGrid(SQAURE_DIMENSIONS, SQAURE_DIMENSIONS);
}

function draw() {
  background(220);

  displayGrid();
}
function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(SQAURE_DIMENSIONS, SQAURE_DIMENSIONS);
  }
  else if (key === "e"){
    grid = generateGrid(SQAURE_DIMENSIONS, SQAURE_DIMENSIONS);
  }
}
function displayGrid(){
  for (let y = 0; y < SQAURE_DIMENSIONS; y++){
    for (let x = 0; x < SQAURE_DIMENSIONS; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      else if (grid[y][x] === 0){
        fill("white");
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
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function generateRandomGrid(cols, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y ++){
    newGrid.push([]);
    for (let x = 0; x < cols; x ++){
      if (random(100) > 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);

  toggleCell(x + 1, y);
  toggleCell(x - 1, y);
  toggleCell(x, y + 1);
  toggleCell(x, y - 1);
}

function toggleCell(x, y){
  if (x >= 0 && x < SQAURE_DIMENSIONS && y >= 0 && y < SQAURE_DIMENSIONS){
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x]){
      grid[y][x] = 0;
    }
  }
}

