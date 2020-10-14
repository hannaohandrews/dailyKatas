
function disemvowel(str) {
    let newString = ''
    let string = str.toLowerCase()
    
    for(let i = 0 ; i < string.length; i++){
      if(string[i] !='a' && string[i] !='e'&& string[i] !='i' && string[i] !='o' && string[i] !='u'){
     newString += str[i]
      } 
    } 
    return newString
  };

  console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")