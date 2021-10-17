async function insertionSort(array) {
  let iterator1, iterator2;

  for (iterator1 = 0; iterator1 < array.length; iterator1++) {
    iterator2 = iterator1;

    while (iterator2 > 0 && array[iterator2] < array[iterator2 - 1]) {
      await swap(array, iterator2, iterator2 - 1);
      iterator2--;
    }
  }
}
