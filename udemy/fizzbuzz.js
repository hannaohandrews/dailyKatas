// Divisible by 3 => Fizz
// divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => number
// input is not a number => 'Not a number'

let fizzBuzz = (num) => {
  if (typeof num !== "number") 
    return "Not a Number";

  if (num % 3 === 0 && num % 5 === 0) 
    return "fizzBuzz";

  if (num % 3 === 0) 
    return "fizz";

  if (num % 5 === 0) 
    return "buzz";

  else return num;
};

const output = fizzBuzz(15);

console.log(output);
