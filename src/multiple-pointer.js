// find the unique values in array (another could be find the zerosum of valus of array)

// To work with this algorithm Array must be sorted

function uniques(arr) {
  if (arr.length == 0) return 0;

  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

console.log(uniques([1, 1, 6]));
