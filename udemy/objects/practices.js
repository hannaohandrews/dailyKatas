//FACTORY FUNCTION
function createCircle(radius, location) {
  return {
    radius,
    draw() {
      console.log("drawing");
    },
  };
}
// circle.draw(); // method

const circle = createCircle(1);
// console.log(circle)

//////////////////////////////////////

//CONSTRUCTOR FUNCTION
// 'new' is operator that makes a new object
// this.key = value
// Use Pascal Notation : OneTwoThree

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drawing");
  };
}

// const newCircle = new Circle(4);
// console.log(newCircle);

//////////////////////////

//MAKING A NEW KEY:VALUE 
const circles = {
    radius:1
}

circles.color = 'yellow';
circles.draw = function(){}

delete circles.color

console.log(circles)

///////////////////

// let x = {};

// let x = new Object();
// new String();
// new Boolean();
// new Number();

/////////////////
/// FUNCTIONS ARE OBJECTS


/// primatives are copied by their value 
// objects are copied by their reference

let obj = {value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);