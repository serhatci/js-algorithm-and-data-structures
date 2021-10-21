// Time complexity best O(n log(n))  Space complexity O(n)

// O(n)
function mergeArray(arr1, arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

// O(log(n))
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArray(left, right);
}

console.log(mergeSort([1, 3, 5, 5, 3, 4, 6, 7, 8, 9]));
