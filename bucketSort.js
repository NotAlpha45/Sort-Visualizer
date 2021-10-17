async function bucketSort(array, length) {
  if (length <= 0) {
    return;
  }

  let buckets = new Array(length);

  for (let bucket_iterator = 0; bucket_iterator < length; bucket_iterator++) {
    buckets[bucket_iterator] = [];
  }
  console.table(buckets);

  for (let iterator = 0; iterator < length; iterator++) {
    let insertion_index = Math.floor(array[iterator] * length);
    buckets[insertion_index].push(array[iterator]);
  }

  // Sort individual buckets with built in sort function.
  // Note: this built in sort function is similar to the qsort function in C.
  for (let iterator = 0; iterator < length; iterator++) {
    buckets[iterator].sort(function (a, b) {
      return a - b;
    });
  }

  //Merge all buckets in resultant array
  let start_index = 0;

  for (let iterator = 0; iterator < length; iterator++) {
    for (let iterator2 = 0; iterator2 < length; iterator2++) {
      await swap2(array, buckets[iterator], start_index, iterator2);
      start_index++;
    }
  }
}
