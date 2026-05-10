function setup() {
  createCanvas(600, 300);
  noLoop();
}

function draw() {
  background(240);

  // Road
  fill(100);
  rect(0, 200, width, 100);

  // Small car body
  fill(255, 100, 100);
  rect(250, 170, 100, 30);

  // Car top
  rect(270, 150, 60, 25);

  // Windows
  fill(220);
  rect(275, 155, 20, 15);
  rect(305, 155, 20, 15);

  // Wheels
  fill(0);
  ellipse(270, 200, 30, 30);
  ellipse(330, 200, 30, 30);
}