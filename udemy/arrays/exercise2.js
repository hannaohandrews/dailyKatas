const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));
console.log(numbers.includes(5))

function includes(array, searchElement) {
 return array.map((item) => {
      if (item === searchElement){
          return true;
      } else {
          return false;
      }
  });
}
