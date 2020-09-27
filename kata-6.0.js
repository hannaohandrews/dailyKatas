const repeatNumbers = function(data) {
  let string = '';

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      string += data[i][0];
    }
    if (i < (data.length - 1)) {
      string += ',';
    }
  }
  return string;
  
};
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
  
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292