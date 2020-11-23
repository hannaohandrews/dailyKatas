const numbers = [1, 2, 3, 4, 11.1, 2, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  let newArray = [];

  //   for(let item of array){
  //       if(item != excluded){
  //           newArray.push(item)
  //       }
  //   }
  //   return newArray;

  //   array.map((item) => {
  //     if (item != excluded) {
  //       newArray.push(item);
  //     }
  //   });

  for (let element of array)
    if (!excluded.includes(element)) {
      newArray.push(element);
    }

  return newArray;
}


