// Colour Blind Game
// Faith Walker
// 4/9/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to-do
// state variables
// style.css stuff 
// put second colour in random spot funtion
// add if statement to mouse pressed function (dependant on second colour function)

// if i click one thats the main colour not the second colour end game?

let cellSize = 60; 
let grid;
let rows = 10;
let cols = 10;
let mainColour = ["#3446eb", "#c40c1e", "#09660c","#f7f486", "#e36dc7", "#ffc8ab", "#abeaff", "#093d4f", "#8d1cba"];
// still need to decide amount of levels, can go up to 25 but it gets laggy
let secondColour = ["#2a3bdb","#c21324","#09630c","#f0ed81","#e065c4", "#ffcdb3", "#a3ddf0", "#053040", "#9623c4"];
let clickCount = 0;
let screen = "start";
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
// want to pull two colours, one from the main list and another thats either lighter or darker from the second list,
//  randomly pick where to put the second colour and fill the rest of the grid with the first colour


function setup() {
  createCanvas(cellSize * cols, cellSize * rows);

  grid = generateGrid(cols, rows);
}

function draw() {
  background(220);

  displayGrid();
}

function changeScreen(){
  // add stuff here idk yet 
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (random(100) < 50 ){
        fill(mainColour[clickCount]);
      }
      else{
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
    //toss a 0 or 1 in randomly
      newGrid.push([0]);
    }
  }
  return newGrid;
}

// function generateRandomGrid(cols, rows) {
//   let newGrid = [];
//   for (let y = 0; y < rows; y++) {
//     newGrid.push([]);
//     for (let x = 0; x < cols; x++) {
//       //toss a 0 or 1 in randomly
//       if (random(100) < 50) {
//         newGrid[y].push(OPEN_TILE);
//       }
//       else {
//         newGrid[y].push(IMPASSIBLE);
//       }
//     }
//   }
//   return newGrid;
// }

// would use a function like that with open/closed space style, but that makes more than one open/closed space, when i need only one closed space
// while the rest remain open spaces. 



function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  // if the position of the mouse is clicked in the same spot as the colour thats different, change values, otherwise dont 
  cellSize = cellSize - 2;
  cols = cols + 2;
  rows = rows + 2;

  changeFillColour();
  clickCount++;

}

function changeFillColour(){
  if (random(100) < 50 ){
    fill(mainColour[clickCount]);
  }
  else{
    fill(secondColour[clickCount]);
  }
  console.log(mainColour[clickCount]);
  console.log(secondColour[clickCount]);
}
