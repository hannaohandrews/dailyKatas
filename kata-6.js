// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.

const whereCanIPark = function (spots, vehicle) {
  for (let y in spots){
    for (let x in spots[y]){

      if( vehicle === 'regular'){
        if (spots[y][x] === 'R') {
          return [x,y]
        } 
      } else if(vehicle === 'small') {
        if (spots[y][x] === 'R' || spots[y][x]==='S'){
          return [x,y]
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[y][x] === 'R' || spots[y][x]==='S' || spots[y][x]==='M'){
          return [x,y]
       } 
      } else {
        return false
      }
    }
  }

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'Z', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

//[4, 0]
// false
// [3, 1]