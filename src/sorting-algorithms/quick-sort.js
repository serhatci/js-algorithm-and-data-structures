// O(nlog(n))   worst O(n2)  space complexity O(log(n))

function helperPivot(arr, start, end) {
  let numberOfSmallers = start;
  const pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      numberOfSmallers++;
      [arr[i], arr[numberOfSmallers]] = [arr[numberOfSmallers], arr[i]];
    }
  }

  [arr[start], arr[numberOfSmallers]] = [arr[numberOfSmallers], arr[start]];
  return numberOfSmallers;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = helperPivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([2, 7, 4, 9, 8, 2, 5]));
