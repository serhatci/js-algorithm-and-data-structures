// Naive solution
// function stringReverse(str1, str2) {
//   if (str1.length != str2.length) return false;

//   const reversedStr = str1.split('').reverse().join('');
//   return reversedStr === str2;
// }

// console.log(stringReverse('abc', 'cba'));

// Efficient solution
function stringReverse(str1, str2) {
  if (str1.length != str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let string1 = '';

  for (let i = str1.length - 1; i >= 0; i--) {
    string1 += str1[i];
  }

  if (string1 !== str2) return false;

  return true;
}

console.log(stringReverse('abc', 'cba'));
