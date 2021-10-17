function setup() {
  drawing_canvas = createCanvas(canvas_size[0], canvas_size[1]);
  drawing_canvas.parent("canvas_div");

  frameRate(frame_rate);
  background(background_color);

  oscelerator = new p5.Oscillator(oscelerator_wave_type);

  random_array = random_array_generator(array_size, lowest_val, highest_val);

  sort_caller("merge", random_array);
}

function draw() {
  background(background_color);
  array_drawer(random_array, high_val_index, low_val_index);
}
