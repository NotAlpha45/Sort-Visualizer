async function partition(array, left_index, right_index) {
  let pivot_index = left_index;
  let pivot_element = array[pivot_index];

  while (left_index < right_index) {
    while (left_index < array.length && array[left_index] <= pivot_element) {
      left_index++;
    }

    while (array[right_index] > pivot_element) {
      right_index--;
    }

    if (left_index < right_index) {
      await swap(array, left_index, right_index);
    }
  }

  await swap(array, right_index, pivot_index);

  return right_index;
}
async function quickSort(array, left_index, right_index) {
  if (left_index < right_index) {
    let partition_index = await partition(array, left_index, right_index);

    // This makes sure that both the recursive calls are done.
    await quickSort(array, left_index, partition_index - 1);
    await quickSort(array, partition_index + 1, right_index);
  }
}
