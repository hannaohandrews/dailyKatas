// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

let consecutive = 0;
let currentConsecutive = 0;

const pattern = (arr) => {
    
    for (const number of arr ) {
      if (number === 1 ) {currentConsecutive++}
      else {
        if (consecutive < currentConsecutive) {
          consecutive = currentConsecutive;
          currentConsecutive = 0;
        }
      }
    }
      if (consecutive < currentConsecutive) {
        consecutive = currentConsecutive;
        currentConsecutive = 0;
      }
    
    return consecutive;
  }
  ​
  console.log(pattern([1,1,0,1,1,1]))