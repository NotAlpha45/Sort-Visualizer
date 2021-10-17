let drawing_canvas;
let canvas_size = [1000, 400];
let random_array = [];
let frame_rate = 60;
let high_val_index, low_val_index;
let operation_speed = 20; // Delay in milliseconds.
let array_size = 100,
  lowest_val = 80,
  highest_val = 200;
let background_color = "teal";

function setup() {
  drawing_canvas = createCanvas(canvas_size[0], canvas_size[1]);
  drawing_canvas.parent("canvas_div");
  frameRate(frame_rate);
  background(background_color);
  random_array = random_array_generator(array_size, lowest_val, highest_val);
  console.log(random_array);
  bubbleSort(random_array);
}

function draw() {
  background(background_color);
  array_drawer(random_array, high_val_index, low_val_index);

}
