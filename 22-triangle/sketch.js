// sierpinski triangle
// visual recursion


let initialTriangle = [
  {x: 750, y: 50},
  {x: 50, y: 700},
  {x: 1500, y: 700}
];

let depth = 0;
let colours = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'magenta', 'pink'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sierpinski(initialTriangle, depth);
}

function draw() {
  
}

function mousePressed(){
  if (depth < 8){
    background(220);
    depth ++;
    sierpinski(initialTriangle, depth);
  }
  else if (depth === 8){
    depth = 1;
  }

}

function sierpinski(points, depth){
  fill(colours[depth]);
  // shell triangle
  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y
  );

  // escape
  if (depth > 0){
    // bottom left
    sierpinski([midPoint(points[0], points[1]), points[1], midPoint(points[1], points[2])], depth - 1);

    // top
    sierpinski([midPoint(points[0], points[1]), points[0], midPoint(points[0], points[2])], depth - 1);

    // bottom right
    sierpinski([midPoint(points[0], points[2]), points[2], midPoint(points[1], points[2])], depth - 1);
  }
}

function midPoint(point1, point2){
  let midX = (point1.x + point2.x)/2;
  let midy = (point1.y + point2.y)/2;
  return {x: midX, y: midy};
}