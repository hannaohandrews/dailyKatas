const numbers = [1, 2, 3];

//ADD at END
numbers.push(4, 5);

// ADD at Beginning
numbers.unshift(1, 2);

//ADD at Middle
numbers.splice(2, 1, "a", "b");

//.includes
console.log(numbers.includes(1)); //true

const courses = [
  { id: 1, name: "a" },
  { id: 1, name: "b" },
];

/// FIND or FINDINDEX
const course = courses.find((course) => course.name === "b");

console.log(course);

const coolNums = [1, 2, 3, 4];

// REMOVING at END
const last = coolNums.pop();

// REMOVING Beginning
const first = coolNums.shift();

// REMOVING middle
coolNums.splice(2, 2);

// FILTER
const filtered = numbers
    .filter(v => v > 3)
    .map(n=> ({ value: n }))
    .filter(obj => obj.value > 4)

// MAP....
// const items = filtered.map(n=> ({ value: n }));

console.log(filtered);

//// REDUCE/////
const array = [1,6, -1,-2];

// let sum  = 0; 
// for (let n of numbers)
//     sum += n; 

const sum = array.reduce((accum, current)=>{
    return accum + current
},0)

console.log(sum)

/// Emptying Array // 
let num = [1,2,3,4]
let another = num; 

num = []
num.length = 0


// Combine two arrays
const combined = num.concat(numbers)
const slice = combined.slice()

console.log('slice',slice)

// SPREAD OPERATOR/// 
const spread = [...num, 'a', ...numbers]; 
console.log('spread',spread)

// FOR EACH 
let answer = numbers.forEach((n,index)=> 
    console.log(n, index)
)

/// JOIN //// 
const joined = numbers.join(',')
console.log('joined',joined)
///SPLIT/// -> array
const message = 'this is my message'
const parts = message.split(' ')
console.log(parts)
///JOIN/// -> string 
const combine = parts.join('-')
console.log(combine)

//SORT 
numbers.sort()
console.log(numbers);

const coursed = [
    {id:1, name: 'b'},
    {id:2, name: 'dd'},
]

coursed.sort((a,b) => {
    const nameAA = a.name.toUpperCase;
    const nameB = b.name.toUpperCase;

    if (nameAA< nameB) return -1;
    if (nameAA > nameB) return 1;
    return 0;
}
)

console.log('coursed',coursed)