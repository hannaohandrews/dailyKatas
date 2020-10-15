let answer = "";

var reverse = function (x) {
  let stringNum = x.toString();
  let length = stringNum.length;
  let finalAns = 0;

  if (x === 0) {
    finalAns = 0;
  } else if (x > 0) {
    for (let i = length - 1; i >= 0; i--) {
      answer += stringNum[i];
    }
    return (finalAns = Number(answer));
  } else if (x < 0) {
    for (let i = length - 1; i > 0; i--) {
      answer += stringNum[i];
    }
    console.log(finalAns.length);
    return (finalAns = -1 * Number(answer));
  }
};

console.log(reverse(-1234));
console.log(reverse(0));
