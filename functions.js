// Generates an array of given size filled with values between a given minimum and maximum.
function random_array_generator(size, min_value, max_value) {
  let random_array = [];
  for (let counter = 0; counter < size; counter++) {
    random_array.push(
      Math.floor(Math.random() * (max_value - min_value + 1)) + min_value
    );
  }
  return random_array;
}


// Delays process for a given amount of time (in milliseconds). Returns a promise that async functions can use.
function delay_process(time_ms) {
  return new Promise((resolve) => setTimeout(resolve, time_ms));
}

// Plays sound using the oscelerator object at given frequency and amplitude.
function play_sound(oscelerator_obj, frequency, amplitude, is_enabled = true) {
  if (is_enabled) {
    oscelerator_obj.start();

    frequency = constrain(frequency * 50, min_frequency, max_frequency);

    oscelerator_obj.freq(frequency);
    oscelerator_obj.amp(amplitude);

    // Slow down the amplitude to 0 over fade_interval seconds
    oscelerator_obj.amp(0, fade_interval);
  }
}

// Draws all the values in the array as a rectangle. Also adjusts width accordingly.
// Note : high_val_index and low_val_index are the two indices of the array where the elements are
// imbalanced and needs a swapping. high_val_index is the index of the highest value and low_val_index
// is the index of the lowest value.
function array_drawer(array, high_val_index, low_val_index) {
  //Starting positions of drawing rectangle.
  let rect_x_position = 0 + rect_pos_offset;
  let rect_y_position = height;

  for (let index = 0; index < array.length; index++) {
    fill(primary_array_color);
    stroke("black");
    strokeWeight(0.5);

    if (index == high_val_index) {
      fill(high_index_color);
    }
    if (index == low_val_index) {
      fill(low_index_color);
    }

    // The height of rectangle in negative as it points upwards.
    rect(
      rect_x_position,
      rect_y_position,
      rect_width,
      array[index] * rect_height_factor
    );

    rect_x_position += rect_width;
  }
}

// Initially sets the drawing of rectangles as array elements.
function array_maker() {
  array_size = int(array_size_slider.value());
  random_array = random_array_generator(array_size, lowest_val, highest_val);
  rect_width = (canvas_size[0] - rect_pos_offset) / array_size;
  rect_height_factor = -(canvas_size[1] / highest_val);
  loop_has_started = true;
}

// Swaps values between two indices of an array
async function swap(array, index1, index2) {
  //Delay the swapping for given time
  await delay_process(operation_speed);
  [array[index1], array[index2]] = [array[index2], array[index1]];
  high_val_index = index1;
  low_val_index = index2;
  play_sound(
    oscelerator,
    Math.abs(array[index1] - array[index2]),
    base_amplitude,
    sound_enabled
  );
}

// Swaps values between two indices of two different arrays.
async function swap2(primary_array, secondary_array, index1, index2) {
  await delay_process(operation_speed);

  high_val_index = index1;
  low_val_index = index2;
  play_sound(
    oscelerator,
    Math.abs(primary_array[index1] - secondary_array[index2]),
    base_amplitude,
    sound_enabled
  );

  [primary_array[index1], secondary_array[index2]] = [
    secondary_array[index2],
    primary_array[index1],
  ];
}

// Assigns value of one index to the other
async function assignment(array, index1, index2) {
  await delay_process(operation_speed);
  high_val_index = index1;
  low_val_index = index2;
  play_sound(
    oscelerator,
    Math.abs(array[index1] - array[index2]),
    base_amplitude,
    sound_enabled
  );
  array[index1] = array[index2];
}

function sort_caller(sort_function, array) {
  switch (sort_function) {
    case "bubble":
      bubbleSort(array);
      break;
    case "merge":
      mergeSort(array, 0, array.length - 1);
      break;
    case "insertion":
      insertionSort(array);
      break;
    case "selection":
      selectionSort(array);
      break;
    case "quick":
      quickSort(array, 0, array.length - 1);
      break;
    case "heap":
      heapSort(array);
      break;
    case "tim":
      timSort(array);
      break;
  }
  // sort_function(array);
}
