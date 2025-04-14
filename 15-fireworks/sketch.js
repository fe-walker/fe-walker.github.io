// Fireworks oop demo

class Particle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = 2;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = 255;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius * 2);
  }
  update(){
    // move it
    this.x += this.dx;
    this.y += this.dy;

    // change opacity
    this.opacity --;
  }

  isDead(){
    return this.opacity <= 0;
  }
}

let theFireworks = [];
const PER_CLICK = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  for (let firework of theFireworks){
    if (firework.isDead()){
      // get rid of it 
      let index = theFireworks.indexOf(firework);
      theFireworks.splice(index, 1);
    }
    else{
      firework.display();
      firework.update();
    }
  }
}

function mousePressed(){
  for (let i = 0; i < PER_CLICK; i++){
    let someFirework = new Particle(mouseX, mouseY);
    theFireworks.push(someFirework);
  }
}
