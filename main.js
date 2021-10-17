let drawing_canvas;
let canvas_size = [1000, 400];
let random_array = [];
let frame_rate = 60;
let high_val_index,
  low_val_index,
  low_index_color = "red",
  high_index_color = "green";
let operation_speed = 10; // Delay in milliseconds.
let array_size = 100,
  lowest_val = 20,
  highest_val = 400;
let background_color = "teal";
let oscelerator,
  oscelerator_wave_type = "square",
  max_frequency = 1000,
  min_frequency = 400,
  base_amplitude = 0.5, fade_interval = 10;

function setup() {
  drawing_canvas = createCanvas(canvas_size[0], canvas_size[1]);
  drawing_canvas.parent("canvas_div");

  frameRate(frame_rate);
  background(background_color);

  oscelerator = new p5.Oscillator(oscelerator_wave_type);

  random_array = random_array_generator(array_size, lowest_val, highest_val);

  bubbleSort(random_array);
}

function draw() {
  background(background_color);
  array_drawer(random_array, high_val_index, low_val_index);
}
