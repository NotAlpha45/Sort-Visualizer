// Bubble sort function
async function bubbleSort(array) {
  for (
    let first_iterator = 0;
    first_iterator < array.length;
    first_iterator++
  ) {
    for (
      let second_iterator = 0;
      second_iterator < array.length;
      second_iterator++
    ) {
      if (array[first_iterator] < array[second_iterator]) {
        await swap(array, first_iterator, second_iterator);
      }
    }
  }
}