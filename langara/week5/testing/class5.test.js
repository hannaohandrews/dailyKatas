// All these functions are available globally from Jest

// TDD - test driven development

//CommonJs Import
const { it, expect } = require("@jest/globals");
const fn = require("./class5"); // fn ={AddTwoNumbers}

describe("AddTwoNumbers", () => {
  //First test for AddTwoNumbers:
  it("should add 1 and 2 to get 3", () => {
    const answer = 3;
    const userResult = fn.AddTwoNumbers(1, 2);
    expect(userResult).toEqual(answer);
  });

  //Write another test that checks if 2 random numbers correctly get added
  it("should add a and b", () => {
    const a = Math.random();
    const b = Math.random();
    const answer = a + b;
    const userResult = fn.AddRandomNumbers(a, b);
    expect(userResult).toEqual(answer);
  });

  describte('MultiplyTwoNumbers', () => {

    
  }
  )
});
