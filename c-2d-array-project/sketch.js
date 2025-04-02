// Colour Blind Game
// Faith Walker
// 4/9/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to-do
// make 2-d array to place the second colour
// state variables
// style.css stuff 
// put second colour in random spot funtion
// add if statement to mouse pressed function (dependant on second colour function)
// decide how many attempts for a level

// if i click one thats the main colour not the second colour end game?


let cellSize = 60; 
let grid;
let rows = 10;
let cols = 10;
let mainColour = ["white","#3446eb", "#c40c1e", "#09660c","#f7f486", "#e36dc7", "#ffc8ab", "#abeaff", "#093d4f", "#8d1cba"];
// still need to decide amount of levels, can go up to 25 but it gets laggy
let secondColour = ["white","#2a3bdb","#c21324","#09630c","#f0ed81","#e065c4", "#ffcdb3", "#a3ddf0", "#053040", "#9623c4"];
let clickCount = 0;
let attempts = 0;
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
  if (screen === "won"){

  }
  else if (screen === "lost"){
    // happens when you make too many attempts on one level
  }
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
      newGrid.push([0]);
    }
  }
  return newGrid;
}




function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      if (x === && y ===){ 
        // dont know what this argument will be yet; depends on my second colour position
        cellSize = cellSize - 2;
        cols = cols + 2;
        rows = rows + 2;
      
        changeFillColour();
        clickCount++;
        if (clickCount === 10){
          // end game bc you won
        }
      }
      else{
        // idk what im gonna put here yet 
        attempts++;
        // adds attempt per each time you click the wrong spot 
        clickCount = clickCount - 1; 
        // dont count the last click
      }
    }
  }

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
