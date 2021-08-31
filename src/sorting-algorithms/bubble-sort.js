function bubbleSort(arr) {
  for (let j = arr.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 4, 3, 6, 7, 4, 9, 2, 4, 1]));
