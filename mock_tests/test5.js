let newObject = {};
let newArray = [];
let string = "";

const urlDecode = function (text) {
  for (let j = 0; j < text.length; j++) {
    if (text[j] === "%" || text[j] === "2" || text[j] === "0") {
      string += " ";
    } else {
      string += text[j];
    }
  }

  let array = string.split("&");

  array.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "=") {
        newArray.push(item.split("="));
      }
    }
  });

  newArray.forEach((pair) => {
    let key = pair[0];
    let value = pair[1];
    newObject[key] = value;
  });
  return newObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
