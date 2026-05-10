function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(245);

  let spacing = 15;

  for (let y = 0; y < height; y += spacing) {
    stroke(40, 80);

    beginShape();

    for (let x = 0; x < width; x += 10) {
      let wave = sin(x * 0.05 + frameCount * 0.08 + y * 0.1) * 15;
      vertex(x, y + wave);
    }

    endShape();
  }
}