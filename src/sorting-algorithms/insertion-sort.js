// worst scenario when all array is reversed... so no advantage
// keeps always left side sorted. So adding new values to array is faster, only with single iteration it can be done

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertion([1, 4, 3, 2, 6, 5]));
