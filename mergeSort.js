async function merger(array, left_index, mid_index, right_index) {
  let length1 = mid_index - left_index + 1;
  let length2 = right_index - mid_index;

  let left_array = new Array(length1);
  let right_array = new Array(length2);

  for (let iterator1 = 0; iterator1 < length1; iterator1++) {
    left_array[iterator1] = array[left_index + iterator1];
  }

  for (let iterator2 = 0; iterator2 < length2; iterator2++) {
    right_array[iterator2] = array[mid_index + iterator2 + 1];
  }

  let left_array_iterator = 0,
    right_array_iterator = 0,
    merged_array_iterator = left_index;

  while (left_array_iterator < length1 && right_array_iterator < length2) {
    await delay_process(operation_speed);

    if (left_array[left_array_iterator] <= right_array[right_array_iterator]) {
      array[merged_array_iterator] = left_array[left_array_iterator];
      left_array_iterator++;
    } else {
      array[merged_array_iterator] = right_array[right_array_iterator];
      right_array_iterator++;
    }
    merged_array_iterator++;
  }

  while (left_array_iterator < length1) {
    await delay_process(operation_speed);

    array[merged_array_iterator] = left_array[left_array_iterator];
    left_array_iterator++;
    merged_array_iterator++;
  }

  while (right_array_iterator < length2) {
    await delay_process(operation_speed);

    array[merged_array_iterator] = right_array[right_array_iterator];
    right_array_iterator++;
    merged_array_iterator++;
  }
}

async function mergeSort(array, left_index, right_index) {
  if (left_index >= right_index) {
    return;
  }

  let mid_index = left_index + parseInt((right_index - left_index) / 2);

  // Await for all of these threds to finish at the same time.

  mergeSort(array, left_index, mid_index);
  mergeSort(array, mid_index + 1, right_index);
  merger(array, left_index, mid_index, right_index);
}