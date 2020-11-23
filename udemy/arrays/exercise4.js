const numbers = [1,2,3,4]; 

const output = move(numbers, 1, -1);

console.log(output);


// index = position from which the number will move 
// offset = position to where the number is moved 
function move(array,index,offset){
    let position = index + offset
    if (position >= array.length || position < 0){
        console.log('wrong')
    } else {
        let output = [...array]
        let newNum = array[index]
        output.splice(index,1)[0]
       output.splice(offset,0,newNum)
       return output
    }

}
