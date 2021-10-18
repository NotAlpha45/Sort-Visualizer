async function insertionSort(array) {
  let iterator1, iterator2, key;

  for (iterator1 = 1; iterator1 < array.length; iterator1++) {
    key = array[iterator1];
    iterator2 = iterator1 - 1;

    while (iterator2 >= 0 && array[iterator2] > key) {
      await swap(array, iterator2, iterator2 + 1);
      iterator2--;
    }
    array[iterator2 + 1] = key;
  }
}
