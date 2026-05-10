let stars = [];

function setup() {
  createCanvas(400, 400);
 
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}
function draw() {
  background(10, 10, 30);
 
  noStroke();
  fill(255);
  for (let s of stars) {
    ellipse(s.x, s.y, s.size);
  }
  
  for (let i = 0; i < 12; i++) {
    fill(120, 255, 200, 8);
    ellipse(200, 200, 160 + i * 12);
  }
 
  fill(150, 255, 200);
  ellipse(200, 180, 120, 140);

 fill(0);
  ellipse(170, 170, 30, 45);
  ellipse(230, 170, 30, 45);


  fill(255);
  ellipse(165, 160, 10, 14);
  ellipse(225, 160, 10, 14);

  ellipse(172, 175, 4, 6);
  ellipse(232, 175, 4, 6);

  noFill();
  stroke(0);
  strokeWeight(2);
  arc(200, 205, 30, 15, 0, PI);

  noStroke();
  fill(150, 255, 200);
  ellipse(200, 265, 70, 90);

  ellipse(155, 255, 25, 60);
  ellipse(245, 255, 25, 60);

  stroke(150, 255, 200);
  strokeWeight(3);
  line(175, 110, 165, 75);
  line(225, 110, 235, 75);

  noStroke();
  fill(255, 120, 200);
  ellipse(165, 75, 14);
  ellipse(235, 75, 14);
}