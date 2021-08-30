// divide & and conquer - only for sorted data

function binarySearch(arr, val) {
  let middleIndex = Math.floor(arr.length - 1 / 2);
  let max = arr.length - 1;
  let min = 0;

  while (val !== arr[middleIndex]) {
    if (val > middleIndex) {
      min = middleIndex;
    } else {
      max = middleIndex;
    }
    middleIndex = Math.floor((max - min) / 2 + min);
  }

  return middleIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
