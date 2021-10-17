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

// Plays sound using the oscelerator object.
function play_sound(oscelerator_obj, frequency, amplitude) {
  
  oscelerator_obj.start();

  frequency = constrain(frequency * 50, min_frequency, max_frequency);

  oscelerator_obj.freq(frequency);
  oscelerator_obj.amp(amplitude);

  // Slow down the amplitude to 0 over fade_interval seconds
  oscelerator_obj.amp(0, fade_interval);
}

// Draws all the values in the array as a rectangle. Also adjusts width accordingly.
// Note : high_val_index and low_val_index are the two indices of the array where the elements are
// imbalanced and needs a swapping. high_val_index is the index of the highest value and low_val_index
// is the index of the lowest value.
function array_drawer(array, high_val_index, low_val_index) {
  let rect_x_position = 0;
  let rect_y_position = height;
  let rect_width = Math.ceil(width / array.length);
  for (let index = 0; index < array.length; index++) {
    fill("white");
    stroke("black");
    strokeWeight(0.5);

    if (index == high_val_index) {
      fill(high_index_color);
    }
    if (index == low_val_index) {
      fill(low_index_color);
    }

    // The height of rectangle in negative as it points upwards.
    rect(rect_x_position, rect_y_position, rect_width, -array[index]);

    rect_x_position += rect_width;
  }
}

// Swap function
async function swap(array, index1, index2) {
  //Delay the swapping for given time
  await delay_process(operation_speed);
  [array[index1], array[index2]] = [array[index2], array[index1]];
  high_val_index = index1;
  low_val_index = index2;
  play_sound(
    oscelerator,
    Math.abs(array[index1] - array[index2]),
    base_amplitude
  );
}
