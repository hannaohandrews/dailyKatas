const camelCase = function (input) {
    let splitString = input.split(" ");
    let newString = "";
    let finalString = "";
  
    for (let i = 1; i < splitString.length; i++) {
      newString +=
        splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    }
    finalString = splitString[0] + newString;
    return finalString;
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));
  
  // thisIsAString
  // loopyLighthouse
  // supercalifragalisticexpialidocious
  