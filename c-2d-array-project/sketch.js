// Project Title
// Faith Walker
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cellSize = 60; 
// increase cellSize per level
let grid;
let mainColour = [];

// let secColour = {
//   secCol1: "#2a3bdb",
//   secCol2: "#c21324",
//   secCol3: "#09630c",
//   secCol4: "#f7f48f",
// };
// want to pull two colours, one from the main list and another thats either lighter or darker from the second list,
//  randomly pick where to put the second colour and fill the rest of the grid with the first colour
// let randomColour = random(220);
let rows = 5;
let cols = 5;

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
      for (let colour of mainColour){
        fillTheColour();
        // figure out why this doesnt work
        // need it to iterate through main colour array
        fill(colour.col1);

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



function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

}

function fillTheColour(){
  let firstColour = {
    col1: "#3446eb",
    col2: "#c40c1e",
    col3: "#09660c",
    col4: "#f7f486",
  };
  mainColour.push(firstColour);
}
