// Connected nodes demo using perlin noise


let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let somePoint = new MovingPoint(width/2, height/2);
  nodes.push(somePoint);
}

function draw() {
  background("white");

  // draw lines first 
  for (let node of nodes){
    node.update();
    node.connectTo(nodes);
  }
  // draw circles second
  for (let node of nodes){
    node.display();
  }
}

function mousePressed(){
  let somePoint = new MovingPoint(mouseX, mouseY);
  nodes.push(somePoint);
}

class MovingPoint{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 5; 
    this.radius = random(5, 30);
    this.timeX = random(1000);
    this.timeY = random(1000);
    this.deltaTime = 0.01;
    this.colour = color(random(255), random(255), random(255));
    this.reach = 100;
    this.maxRadius = 100;
    this.minRadius = random(5, 30);
  }
  
  display(){
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  update(){
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeWithMouse();
  }

  adjustSizeWithMouse(){
    let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
    if (mouseDistance < this.reach){
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }
    else{
      this.radius = this.minRadius;
    }
  }

  connectTo(nodesArray){
    for (let otherNode of nodesArray){
      if (this !== otherNode){
        let distanceAway = dist(this.x, this.y, otherNode.x, otherNode.y);
        if (distanceAway < this.reach){
          stroke(this.colour);
          line(this.x, this.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  move(){
    // move using perlin noise
    let dx = noise(this.timeX);
    let dy = noise(this.timeY);

    // scale from 0-1 to my movement speed
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    // move point
    this.x += dx;
    this.y += dy;

    // move on time axis
    this.timeX += this.deltaTime;
    this.timeY += this.deltaTime;
  }

  wrapAroundScreen(){
    if (this.x < 0){
      this.x += windowWidth;
    }
    if (this.x > width){
      this.x -= windowWidth;
    }
    if (this.y < 0){
      this.y += windowHeight;
    }
    if (this.y > width){
      this.y -= windowHeight;
    }
  }


}