async function merger(array, left_index, mid_index, right_index) {
  let length1 = mid_index - left_index + 1;
  let length2 = right_index - mid_index;

  let left_array = new Array(length1);
  let right_array = new Array(length2);

  for (let iterator1 = 0; iterator1 < length1; iterator1++) {
    await swap2(array, left_array, left_index + iterator1, iterator1);
  }

  for (let iterator2 = 0; iterator2 < length2; iterator2++) {
    await swap2(array, right_array, mid_index + iterator2 + 1, iterator2);
  }

  let left_array_iterator = 0,
    right_array_iterator = 0,
    merged_array_iterator = left_index;

  while (left_array_iterator < length1 && right_array_iterator < length2) {
    if (left_array[left_array_iterator] <= right_array[right_array_iterator]) {
      await swap2(
        array,
        left_array,
        merged_array_iterator,
        left_array_iterator
      );

      left_array_iterator++;
    } else {
      await swap2(
        array,
        right_array,
        merged_array_iterator,
        right_array_iterator
      );

      right_array_iterator++;
    }
    merged_array_iterator++;
  }

  while (left_array_iterator < length1) {
    await swap2(array, left_array, merged_array_iterator, left_array_iterator);

    left_array_iterator++;
    merged_array_iterator++;
  }

  while (right_array_iterator < length2) {
    await swap2(
      array,
      right_array,
      merged_array_iterator,
      right_array_iterator
    );

    right_array_iterator++;
    merged_array_iterator++;
  }
}

async function mergeSort(array, left_index, right_index) {
  if (left_index >= right_index) {
    return;
  }

  let mid_index = left_index + parseInt((right_index - left_index) / 2);

  await mergeSort(array, left_index, mid_index);
  await mergeSort(array, mid_index + 1, right_index);
  await merger(array, left_index, mid_index, right_index);
}
