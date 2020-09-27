const multiplicationTable = function (maxValue) {
  let newArray = [];
  for (let x = 1; x < maxValue + 1; x++) {
    for (let y = 1; y < maxValue + 1; y++) {
      if (y === maxValue) {
        newArray += x * y + "\n";
      } else {
        newArray += x * y + " ";
      }
    }
  }
  return newArray;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
