// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let colour = "red";
let waitTime = 5000;
let lastSwitchedTime = 0; 
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION = 4000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeLightColour();
  rightLightColour();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
 
  // fill(colour);
  // ellipse(width/2, height/2, 50, 50); //middle
  // fill(colour);
  // ellipse(width/2, height/2 + 65, 50, 50); //bottom

}
function rightLightColour(){
  if (colour === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if (colour === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (colour === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  
}  

function changeLightColour(){
  if (colour === "green" && millis() < lastSwitchedTime + GREEN_LIGHT_DURATION ){
    colour = "yellow";
    lastSwitchedTime = millis();
  }
  else if (colour === "yellow" && millis() < lastSwitchedTime + YELLOW_LIGHT_DURATION ){
    colour = "red";
    lastSwitchedTime = millis();
  }
  else if (colour === "red" && millis() < lastSwitchedTime + RED_LIGHT_DURATION ){
    colour = "green";
    lastSwitchedTime = millis();
  }
}