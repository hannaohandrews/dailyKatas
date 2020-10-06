const items =[
    {name: 'H', price: 100},
    {name: 'I', price: 10},
    {name: 'J', price: 130},
    {name: 'K', price: 200},
    {name: 'L', price: 38},
    {name: 'M', price: 150},
    {name: 'S', price: 102},
    {name: 'E', price: 44},
    {name: 'W', price: 11},
]
//Filtering items and return an array
const filteredItems = items.filter((item)=> {
    return item.price < 100
})
// console.log(filteredItems)

// Map through each item and then return an array
const mappedItems = items.map((item)=>{
    // return item.name
    return item.price
})
// console.log(mappedItems)

// Find the items that are true and the return an array
const foundItem = items.find((item)=>{
    return item.price === 100
})
// console.log(foundItem)

// Go through each item 
// items.forEach((item)=>{
//     console.log(item.price*2)
// })

// Go through each item to see if ANY item is True or False 
const inexpensiveItems = items.some((item)=>{
    return item.price < 100
})
// console.log(inexpensiveItems)

// Go through EVERY SINGLE item and then see if every one of them is True or False
const freeItem = items.every((item)=>{
    return item.price <= 0
})
// console.log(freeItem)

// SUM of all items 
const total = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal
},0)

// console.log(total)

//INCLUDES TRUE OR FALSE?

const numbers = [1,2,3,4,5]
const includesTwo = numbers.includes(2)

console.log(includesTwo)