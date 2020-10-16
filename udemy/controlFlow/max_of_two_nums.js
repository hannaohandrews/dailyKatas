// a function that take 2 numbers and returns the maximum of the two

// let max = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return array[i];
//     } else {
//       return array[i + 1];
//     }
//   }
// };

// console.log(max([1, 44]));

function max(a, b) {
  return a > b ? a : b;
}

let number = max(477, 55);
console.log(number);
