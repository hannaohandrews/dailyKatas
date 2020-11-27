// All these functions are available globally from jest

// TDD - Test Driven Development

// CommonJS import
const fn = require("./class5"); // fn = { AddTwoNumbers }
// ES Modules:
// import { AddTwoNumbers } from './class5'

// Group of test for AddTwoNumbers:
describe("AddTwoNumbers", () => {
  // First test for AddTwoNumbers:
  it("should add 1 and 2 to get 3", () => {
    // correct answer
    const answer = 3;
    // user's answer
    const userResult = fn.AddTwoNumbers(1, 2);
    // check to see if they are the same
    expect(userResult).toEqual(answer);
  });

  it("should add random number", () => {
    const a = Math.random();
    const b = Math.random();
    const answer = a + b;
    // user's answer
    const userResult = fn.AddTwoNumbers(a, b);
    // check to see if they are the same
    expect(userResult).toEqual(answer);
  });
});

describe("MultiplyTwoNumbers", () => {
  it("should multiply 5 and 4 to get 20", () => {
    // correct answer
    const answer = 20;
    // user's answer
    const userResult = fn.MultiplyTwoNumbers(5, 4);
    // check to see if they are the same
    expect(userResult).toEqual(answer);
  });

  it("should multiply 5 and 4 to get 20", () => {
    const a = Math.random();
    const b = Math.random();
    const answer = a * b;
    const userResult = fn.MultiplyTwoNumbers(a, b);
    expect(userResult).toEqual(answer);
  });
});

describe("FindLowestNumber", () => {
  it("should find 5 from [100,24,5,122]", () => {
    const userResult = fn.FindLowestNumber([100, 24, 5, 122]);
    expect(userResult).toEqual(5);
  });
});

describe("MultiplyAllNumbers", () => {
  if (
    ("should multiply all numbers in an array",
    () => {
      const answer = 100 * 2 * 3 * 4 * 5;
      const userResult = fn.MultiplyAllNumbers([100, 2, 3, 4, 5]);
      expect(userResult).toEqual(answer);
    })
  );
});
