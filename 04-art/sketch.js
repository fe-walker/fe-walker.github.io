// generative art demo using object notation and arrays 

const LINE_SIZE = 10;
let lineArray = [];
let randomColour = random(220);

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += LINE_SIZE){
    for (let y = 0; y < height; y += LINE_SIZE){
      let aLine = spawnLine(x, y, LINE_SIZE);
      lineArray.push(aLine);
    }
  }
}

function draw() {
  background(220);
  
  for (let aLine of lineArray){
    displayLine(aLine);
  }
}

function spawnLine(x, y, theSize){
  let theLine;
  let choice = random(100);
  if (choice < 50){
    // negative slope
    theLine = {
      x1: x - theSize/2,
      y1: y - theSize/2,
      x2: x + theSize/2,
      y2: y + theSize/2,
    };
  }
  else{
    // positive slope
    theLine = {
      x1: x - theSize/2,
      y1: y + theSize/2,
      x2: x + theSize/2,
      y2: y - theSize/2,
    };
  }
  return theLine;
}

function displayLine(aLine){
  line(aLine.x1, aLine.y1, aLine.x2, aLine.y2);
}