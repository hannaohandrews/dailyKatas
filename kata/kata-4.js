const instructorWithLongestName = function(instructors) {
  let maxNum = 0 
  let num = 0

  for (let i=0; i <instructors.length; i++) {
   if(instructors[i].name.length > maxNum) {
     maxNum = instructors[i].name.length 
     num = i
   } 
  } 
 return instructors[num]
};