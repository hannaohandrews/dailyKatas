const person = {
  name: "hanna",
  age: 30,
};

for (let key in person) {
  console.log(person[key]);
}

const colors = ["red", "yellow", "blue"];

for (let index in colors) {
  console.log(colors[index]);
}
