// Parameters for sort functionality and drawing.
let random_array = [];
let high_val_index,
  low_val_index,
  low_index_color = "red",
  high_index_color = "green";
let operation_speed = 20; // Delay in milliseconds.
let array_size = 200,
  lowest_val = 20,
  highest_val = 400;
let background_color = "teal";
let oscelerator,
  oscelerator_wave_type = "square",
  max_frequency = 1000,
  min_frequency = 400,
  base_amplitude = 0.5,
  fade_interval = 0.5; //in seconds
let sound_enabled = true;

// Parameters for canvas and other components
let drawing_canvas;
let canvas_size = [1000, 400];
let frame_rate = 60;
