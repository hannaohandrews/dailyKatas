const numbers = [1, 2, 3, 4];

// let sum = 0;

// for (let n of numbers) sum += n;


const sum = numbers.reduce((a, c) => {
  return a + c;
},0);

console.log(sum);