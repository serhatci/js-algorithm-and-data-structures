// divide & and conquer - only for sorted data

function binarySearch(arr, val) {
  let max = arr.length - 1;
  let min = 0;
  let middleIndex = Math.floor((max + min) / 2);

  while (
    val !== arr[middleIndex].substring(0, val.length) ||
    val == arr[middleIndex - 1].substring(0, val.length)
  ) {
    if (val > arr[middleIndex].substring(0, val.length)) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
    middleIndex = Math.floor((max + min) / 2);
  }

  return [arr[middleIndex], middleIndex];
}

const arr = [
  'achen',
  'berlin',
  'düseldorf',
  'düseldorf',
  'düseldorf',
  'düseldorf',
  'frankfurt',
  'frankfurt',
  'frankfurt',
  'frankfurt',
  'giessen',
  'giessen',
  'giessen',
  'giessen',
  'hamburg',
];

console.log(binarySearch(arr, 'f'));
