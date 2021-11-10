
function setup() {
  translate_components(windowWidth);

  drawing_canvas = createCanvas(canvas_size[0], canvas_size[1]);
  drawing_canvas.parent(canvas_parent);

  frameRate(frame_rate);
  background(background_color);

  oscelerator = new p5.Oscillator(oscelerator_wave_type);

  array_size_slider = slider_maker(
    canvas_parent,
    50,
    200,
    100,
    10,
    [0, 0],
    arraysize_slider_attributes
  );

  array_size_slider.input(array_maker);
  // array_maker();
  // array_size = int(array_size_slider.value());

  // random_array = random_array_generator(array_size, lowest_val, highest_val);

  button_maker(
    canvas_parent,
    [0, 30],
    "Run",
    function () {
      sort_caller("heap", random_array);
    },
    run_button_attributes
  );

  // sort_caller("heap", random_array);
}

function draw() {
  background(background_color);
  array_drawer(random_array, high_val_index, low_val_index);
}
