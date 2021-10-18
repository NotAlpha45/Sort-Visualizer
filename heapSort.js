async function heapify(array, length, node_index) {
  // We will asssume that node_index is the root.
  let largest_node_index = node_index;
  let left_child_index = 2 * node_index + 1;
  let right_child_index = 2 * node_index + 2;

  // When left child is larger than largest element
  if (
    left_child_index < length &&
    array[left_child_index] > array[largest_node_index]
  ) {
    largest_node_index = left_child_index;
  }

  //When the right child is larger than largest element
  if (
    right_child_index < length &&
    array[right_child_index] > array[largest_node_index]
  ) {
    largest_node_index = right_child_index;
  }

  // If largest element is not the root.
  if (largest_node_index != node_index) {
    await swap(array, node_index, largest_node_index);
    await heapify(array, length, largest_node_index);
  }
}

async function heapSort(array) {
  let length = array.length;

  for (let iterator = Math.floor(length / 2) - 1; iterator >= 0; iterator--) {
    await heapify(array, length, iterator);
  }

  for (let iterator = length - 1; iterator > 0; iterator--) {
    // Move current root to end
    await swap(array, iterator, 0);

    // Call heapfy on the reduced heap.
    await heapify(array, iterator, 0);
  }
}
