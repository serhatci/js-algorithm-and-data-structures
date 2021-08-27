// calculate maximum sum of n consequtive elements from an array and given integer

// NAIVE SOLUTION
// function maxSum(arr, n) {
//   let sums = {};

//   for (let i = 0; i < arr.length; i++) {
//     sums[i] = arr.slice(i, i + n).reduce((a, c) => a + c);
//   }

//   const max = Math.max(...Object.values(sums));
//   return Object.entries(sums).filter((item) => item[1] == max)[0];
// }

// console.log(maxSum([1, 2, 3, 5, 1, 3, 10, 1], 2));

// Sliding window algorithm
function maxSum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  tempSum = arr.slice(0, n).reduce((p, c) => p + c);

  for (let i = n; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSum([1, 2, 3, 5, 1, 3, 10, 1], 2));
