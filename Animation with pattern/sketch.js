
let waves = [];

function setup() {
  createCanvas(700, 500);

  for (let i = 0; i < 6; i++) {
    waves.push({
      y: 80 + i * 60,
      speed: random(0.01, 0.03),
      offset: random(1000)
    });
  }
}

function draw() {
  background(15, 15, 30);

  noFill();

  for (let w of waves) {

    stroke(
      100 + sin(frameCount * 0.02) * 155,
      150,
      255
    );

    strokeWeight(3);

    beginShape();

    for (let x = 0; x <= width; x += 10) {

      let y = w.y +
              sin(x * 0.02 + frameCount * w.speed + w.offset) * 35;

      vertex(x, y);
    }

    endShape();
  }
}