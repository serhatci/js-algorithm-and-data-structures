// Normally this is O(n^2)
// If the array is almost sorted then with optimized version it is O(n)

// function bubbleSort(arr) {
//   for (let j = arr.length - 1; j >= 0; j--) {
//     for (let i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort([1, 4, 3, 6, 7, 4, 9, 2, 4, 1]));

// Optimization of bubble sort algorithm
// if sorted array achieved before iterations completed, it stops

function bubbleSort(arr) {
  let sortingAchieved;

  for (let j = arr.length - 1; j >= 0; j--) {
    sortingAchieved = true;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sortingAchieved = false;
      }
    }

    if (sortingAchieved) break;
  }

  return arr;
}

console.log(bubbleSort([1, 4, 3, 6, 7, 4, 9, 2, 4, 1]));
