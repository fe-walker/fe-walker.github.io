// Character movement demo

const CELL_SIZE = 20;
let grid;
let rows;
let cols;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let thePlayer = {
  x: 0,
  y: 0,
};
let grassImg;
let pathImg;

function preload() {
  grassImg = loadImage("grass.png");
  pathImg = loadImage("paving.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);

  // add player to grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === "w"){
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if (key === "s"){
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  else if (key === "a"){
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
  else if (key === "d"){
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
}

function movePlayer(x, y){
  if (x >= 0 && x < cols && y >= 0 && y <= rows && grid[y][x] === OPEN_TILE){
  // previous player pos
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;


    // keep track of player pos.
    thePlayer.x = x;
    thePlayer.y = y;

    // reset
    grid[oldY][oldX] = OPEN_TILE;

    // put player on grid 
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }

}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        // fill("white");
        image(pathImg, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === IMPASSIBLE) {
        // fill("black");
        image(grassImg, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === PLAYER){
        fill("blue");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss a 0 or 1 in randomly
      if (random(100) < 50) {
        newGrid[y].push(OPEN_TILE);
      }
      else {
        newGrid[y].push(IMPASSIBLE);
      }
    }
  }
  return newGrid;
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x, y);
}

function toggleCell(x, y) {
  if (grid[y][x] === OPEN_TILE) {
    grid[y][x] = IMPASSIBLE;
  }
  else if (grid[y][x] === IMPASSIBLE) {
    grid[y][x] = OPEN_TILE;
  }
}

