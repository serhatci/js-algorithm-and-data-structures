// check if two string is anagram

function anagram(str1, str2) {
  const text1 = {};
  const text2 = {};

  for (let val of str1) {
    text1[val] = (text1[val] || 0) + 1;
  }

  for (let val of str2) {
    text2[val] = (text2[val] || 0) + 1;
  }

  for (let key in text1) {
    if (text1[key] !== text2[key]) return false;
  }

  return true;
}

// console.log(anagram('aaz', 'zza'));

// better solution
function anagram(str1, str2) {
  const text1 = {};

  for (let val of str1) {
    text1[val] = (text1[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!text1[val]) return false;

    text1[val] -= 1;
  }

  return true;
}

console.log(anagram('azc', 'zza'));
