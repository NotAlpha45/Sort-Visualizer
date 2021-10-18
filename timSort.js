// Tim sort divides the array into small pieces known as "run". And then sorts the runs with insertion
// sort and then merges them using merging method of merge sort.

// We assume the run size as 32.
let MINIMUM_MERGE = 32;

async function minimum_run_length(array_length) {
  let run_len_offset = 0;
  while (array_length >= MINIMUM_MERGE) {
    run_len_offset |= array_length & 1;
    array_length >>= 1;
  }
  return run_len_offset + array_length;
}

async function special_insertion_sort(array, left_index, right_index) {
  let iterator1, iterator2, key;

  for (iterator1 = left_index + 1; iterator1 <= right_index; iterator1++) {
    key = array[iterator1];
    iterator2 = iterator1 - 1;

    while (iterator2 >= 0 && array[iterator2] > key) {
      await swap(array, iterator2, iterator2 + 1);
      iterator2--;
    }
    array[iterator2 + 1] = key;
  }
}

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

async function timSort(array) {
  let array_length = array.length;
  let min_run_length = await minimum_run_length(MINIMUM_MERGE);

  //Sort individual "runs" with merge sort

  for (let index = 0; index < array_length; index += min_run_length) {
    await special_insertion_sort(
      array,
      index,
      Math.min(index + MINIMUM_MERGE - 1, array_length - 1)
    );
  }

  // Marging the runs by 2's power.
  for (
    let merge_size = min_run_length;
    merge_size < array_length;
    merge_size *= 2
  ) {
    // Pick a starting point of left subarray and start merging. After every iteration, move the
    // left index by 2 times of merge size.
    for (
      let left_index = 0;
      left_index < array_length;
      left_index += 2 * merge_size
    ) {
      let mid_index = left_index + merge_size - 1;
      let right_index = Math.min(left_index + 2 * merge_size - 1, n - 1);

      if (mid_index < right_index) {
        await merger(array, left_index, mid_index, right_index);
      }
    }
  }
}

