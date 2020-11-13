const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

//ANS//
// [-10,-9,-8,-7,-6,-5,-4]
