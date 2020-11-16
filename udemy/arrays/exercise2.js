const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
  for (let number of array) {
    if (number === searchElement) 
      return true;
    console.log(number)
  }  return false;
}

console.log(includes(numbers, 1));
console.log(includes(numbers, 6));