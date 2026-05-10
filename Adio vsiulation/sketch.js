let song, fft;

function preload() {
  song = loadSound('desifreemusic-soft-ambient-textures-with-subtle-bird-chirps-377056.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  song.play();
  fft = new p5.FFT(0.8, 512); 
}

function draw() {

  fft.analyze();
  let bass = fft.getEnergy("bass");
  let treble = fft.getEnergy("treble");
 
let bgCol = map(bass, 0, 255, 10, 50);
background(bgCol, 10, bgCol / 2);

  translate(width / 2, height / 2);

let wave = fft.waveform();
 
  stroke(255, treble, 255); 
  fill(0, 255, 255, 50); 
  strokeWeight(2);


  for (let t = -1; t <= 1; t += 2) {
    beginShape();
    for (let i = 0; i <= 180; i += 2) {
      let index = floor(map(i, 0, 180, 0, wave.length - 1));
     
let r = map(wave[index], -1, 1, 100, 350) + (bass / 4);
      
      let x = r * sin(i) * t;
      let y = r * cos(i);
      
      vertex(x, y);
    }
    endShape();
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}