// divide & and conquer - only for sorted data

function binarySearch(arr, val) {
  let max = arr.length - 1;
  let min = 0;
  let middleIndex = Math.floor((max + min) / 2);

  while (val !== arr[middleIndex].substring(0, val.length)) {
    if (val > arr[middleIndex].substring(0, val.length)) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
    middleIndex = Math.floor((max + min) / 2);
  }

  return arr[middleIndex];
}

const arr = [
  'achen',
  'berlin',
  'düseldorf',
  'frankfurt',
  'giessen',
  'hamburg',
];

console.log(binarySearch(arr, 'ham'));
