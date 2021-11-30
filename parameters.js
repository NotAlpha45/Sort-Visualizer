// Parameters for sort functionality and drawing.
let random_array = [];

const sort_list = [
  "bubble",
  "merge",
  "insertion",
  "selection",
  "quick",
  "heap",
  "tim",
];

let current_selected_sort = "quick";

let sort_dropdown_list;

let high_val_index,
  low_val_index,
  low_index_color = "red",
  high_index_color = "green";
let operation_speed = 50; // Delay in milliseconds.
let array_size = 100,
  lowest_val = 20,
  highest_val = 800;
const background_color = "white",
  primary_array_color = "teal";
let oscelerator,
  oscelerator_wave_type = "square",
  max_frequency = 1000,
  min_frequency = 400,
  base_amplitude = 0.5,
  fade_interval = 0.5; //in seconds
let sound_enabled = false;

// Parameters for canvas and other components
let drawing_canvas;
let canvas_size = [1000, 400],
  canvas_parent = "canvas_div";
let frame_rate = 60;
let array_size_slider, operation_speed_slider;
let arraysize_slider_attributes = ["width: 100px", "position: absolute"];

const run_button_attributes = [
  "padding: 2px 2px",
  "font-size: 18px",
  "border-radius: 10px",
  "box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 5px 15px 0 rgba(0,0,0,0.19)",
  "border: 3px solid rgb(0, 255, 0)",
  "text-align: center",
  "font-family: cursive",
  "font-weight: bold",
  "width: 5pc",
];

const size_element_attributes = [
  "font-family: cursive",
  "color: blue",
  "font-size: 20px",
  "font-weight: bold",
  "position: absolute",
];

const sorting_speed_element_attributes = [
  "font-family: cursive",
  "color: brown",
  "font-size: 20px",
  "font-weight: bold",
  "position: absolute",
];

const sort_dropdown_attributes = ["font-family: cursive", "font-size: 18px"];

let sound_checkbox;
const sound_checkbox_attributes = [
  "font-size: 18px",
  "color: magenta",
  "font-weight: bold",
  "font-family : hack"
]

// let rect_width = Math.ceil(canvas_size[0] / array_size);
// let rect_height_factor = -(canvas_size[1] / highest_val);
let rect_width, rect_height_factor;
const rect_pos_offset = 190;
let loop_has_started = false;
