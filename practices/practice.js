const list = [1, 2, 3, 4, 5, 6, 7, 7, 1, 2, 3, 3, 4, 555, 11111, 22222];
const test = (a) => {
  if (a > 100) {
    return true;
  } else {
    return false;
  }
};
let result = list.filter(test);

result = list.filter((a) => {
  if (a < 100) {
    return true;
  } else {
    return false;
  }
});

result = list.filter(a => a > 100);

console.log(result);

let answer = list.map(a => {
    if (a > 4) {return a * 100
} else {
    return 'panda'
}
})

console.log(answer)
