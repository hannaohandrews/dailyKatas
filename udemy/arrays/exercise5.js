const numbers = [1, 2, 3, 4, 1, 2, 3, 1, 4, 4];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
  // let count = 0;
  // for (let element of array){
  //     if (element === searchElement){
  //         count += 1
  //     }
  // } return count

  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
