// /**
//  * @param {string[]}
//  * @return {string}
//  */

let answer = "";
let array = [];

var longestCommonPrefix = function (strs) {
  strs.forEach((string) => {
    answer = string
    console.log(string)
    })
    return answer
  };

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
