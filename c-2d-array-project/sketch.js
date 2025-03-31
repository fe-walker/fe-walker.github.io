// Project Title
// Faith Walker
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cellSize = 60; 
// increase cellSize per level (1 level per colour)
let grid;
let rows = 5;
let cols = 5;
let mainColour = ["#3446eb", "#c40c1e", "#09660c","#f7f486"];
let secondColour = ["#2a3bdb","#c21324","#09630c","#f7f48f",];
let clickCount = 0;
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


function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      // for (let i = 0; i < mainColour.length; i++){
      //   // need it to iterate through main colour array
      //   fill(mainColour[i]);
      //   console.log(mainColour[i]);
      // }
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
  cellSize = cellSize - 5;
  cols = cols + 2;
  rows = rows + 2;


  changeFillColour();
  clickCount++;
}

function changeFillColour(){
  // for (let i = 0; i < mainColour.length; i++){
  // need it to iterate through main colour array
  fill(mainColour[clickCount]);
  console.log(mainColour[clickCount]);
  // }
}