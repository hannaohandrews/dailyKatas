//Anagram

let words = ["silent", "tnelis"];
let sortedWords = [];

let anagramFilter = (item) => {
  for (let i = 0; i < item.length; i++) {
    sortedWords.push(item[i].split("").sort().join(""));
  }
  let firstWord = sortedWords[0];
  let secondWord = sortedWords[1];

  for (let j = 0; j < sortedWords.length; j++) {
    if (firstWord[j] != secondWord[j]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(anagramFilter(words));
