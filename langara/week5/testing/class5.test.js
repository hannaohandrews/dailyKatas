// All these functions are available globally from Jest

// TDD - test driven development

//CommonJs Import
const fn = require("./class5"); // fn ={AddTwoNumbers}

describe("AddTwoNumbers", () => {
  //First test for AddTwoNumbers:
  it("should add 1 and 2 to get 3", () => {
    const answer = 3;
    const userResult = fn.AddTwoNumbers(1, 2);
    expect(userResult).toEqual(answer);
  });
});
