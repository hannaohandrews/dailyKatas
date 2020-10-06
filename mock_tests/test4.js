const multiplicationTable = function (maxValue) {
  let answer = 0; 

  for (let i = 1; i <= maxValue; i++) {

    for (let j = 1; j <= maxValue; j++ ){
        answer += i * j + " "

        if (j === maxValue){
            answer += "\n"
        }
      }
  }

  return answer;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
