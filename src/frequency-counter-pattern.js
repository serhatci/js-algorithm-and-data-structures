// Write a function called Same, which accepts two array. Returns true if every value in the array has corresponding value squared in the second array.

// Frequency counter pattern is used to prevent nested loops for checking frequency of a data

// Idea Development
// same([1,2,3],[1,4,9]) return true
// same([1,2,3,6],[1,4,6]) return false

//naive solution
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     const val = arr1[i] ** 2;
//     if (!arr2.includes(val)) return false;

//     const valIndex = arr2.indexOf(val);
//     arr2.splice(valIndex, 1);
//   }

//   return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 4, 3]));

// Frequency pattern solution
// first create 2 objects that counts the frequency of elements in each array
// than compare elements and their frequencies

function same(arr1, arr2) {
  const first = {};
  const second = {};

  for (let i = 0; i < arr1.length; i++) {
    first[arr1[i]] = (first[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    second[arr2[i]] = (second[arr2[i]] || 0) + 1;
  }
  for (let key of Object.keys(first)) {
    if (!second[key ** 2] && second[key ** 2] !== first[key]) return false;
  }

  return true;
}

console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
