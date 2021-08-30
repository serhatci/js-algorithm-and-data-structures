// power of numbers width recursion

// function calculatePower(base, power) {
//   if (power === 0) return 1;

//   return base * calculatePower(base, power - 1);
// }

// console.log(calculatePower(2, 3));

// factorial

// function factorial(num) {
//   if (num === 0) return 1;

//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// Product of array

// function productOfArray(arr) {
//   let product = 1;

//   function helper(arrHelper) {
//     if (arrHelper.length === 0) return;

//     product *= arrHelper[0];
//     helper(arrHelper.slice(1));
//   }

//   helper(arr);

//   return product;
// }

// console.log(productOfArray([5, 4, 3]));

// // my fibonacci solution
// function fib(num) {
//   const fib = [1, 1];

//   function helper(helperNum) {
//     if (helperNum === 0) return;

//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     helper(helperNum - 1);
//   }

//   helper(num - 2);

//   return fib[num - 1];
// }

// Perfect solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
