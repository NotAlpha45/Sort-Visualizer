async function selectionSort(array) {
  let iterator1, iterator2, minimum_value_index;

  for (iterator1 = 0; iterator1 < array.length; iterator1++) {
    minimum_value_index = iterator1;

    for (iterator2 = iterator1 + 1; iterator2 < array.length; iterator2++) {
      if (array[iterator2] < array[minimum_value_index]) {
        minimum_value_index = iterator2;
      }
    }

    await swap(array, minimum_value_index, iterator1);
  }
}
