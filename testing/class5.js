// create a function that adds two numbers

const AddTwoNumbers = (a, b) => {
  return a + b;
};

const MultiplyTwoNumbers = (a, b) => {
  return a * b;
};

const FindLowestNumber = (list) => {
  return list.reduce((acc, num) => {
    return num < acc ? num : acc;
  });
};

//HW //
// create a function that multiplies all the numbers in a list
// together to get a final result
/// [100,445,23]

const MultiplyAllNumbers = (array) => {
  return array.reduce((acc, num) => {
    return num * acc;
  });
};

// There are 2 ways to export things from a js file
// Node - CommonJS Syntax
// "Modern" - ES Modules

// Common JS:
module.exports = {
  AddTwoNumbers,
  MultiplyTwoNumbers,
  FindLowestNumber,
  MultiplyAllNumbers,
};

// ES Modules:
// export { AddTwoNumbers }
