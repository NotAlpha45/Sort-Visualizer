let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator("sine");
}

function draw() {
  background(220);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text("tap to play", 20, 20);
  text("freq: " + freq, 20, 40);
  text("amp: " + amp, 20, 60);
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();

  osc.freq(freq, 0.1);
  osc.amp(amp, 0.1);
  osc.amp(0, 0.5);
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
}
