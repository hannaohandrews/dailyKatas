// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

let counter = 0 
let arraySplit = []
let arrayNums= []
let finalAns= 0

var findMaxConsecutiveOnes = function(nums) {
        arraySplit = nums.split(',')
    console.log(arrarySplit)
    
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i]===1){
            counter+=1
        }else if (nums[i]===0){
            arrayNums.push(counter)
        }
    } return arrayNums
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
