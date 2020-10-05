/**
 * @param {string} s
 * @return {number}
 */

let result = 0;

var romanToInt = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result += 1;

      if (s[i + 1] === "V" || s[i + 1] === "X") {
        result -= 2;
      }
    } else if (s[i] === "V") {
      result += 5;
    } else if (s[i] === "X") {
      result += 10;
      if (s[i + 1] === "L" || s[i + 1] === "C") {
        result -= 20;
      }
    } else if (s[i] === "L") {
      result += 50;
    } else if (s[i] === "C") {
      result += 100;
      if (s[i + 1] === "D" || s[i + 1] === "M") {
        result -= 200;
      }
    } else if (s[i] === "D") {
      result += 500;
    } else if (s[i] === "M") {
      result += 1000;
    }
  }

  return result;
};

// console.log(romanToInt("IV"))
console.log(romanToInt("MCMXCIV"));
