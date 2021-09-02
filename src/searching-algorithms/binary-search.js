// divide & and conquer - only for sorted data

function binarySearch(arr, val) {
  let max = arr.length - 1;
  let min = 0;
  let middleIndex = Math.floor((max + min) / 2);

  while (val !== arr[middleIndex]) {
    if (val > arr[middleIndex]) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
    middleIndex = Math.floor((max + min) / 2);
  }

  return middleIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
