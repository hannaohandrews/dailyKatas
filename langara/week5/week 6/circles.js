document.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
  Circle(event.clientX, event.clientY)
});

const Circle = (x, y) => {
  let counter = 10;
  let text = `${counter}`;

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.textContent = text;

  //closure to manipulate the counter
  // closure is a function inside another function

  const decrease = () => {
      counter -= 1;
      circle.textContent = `${counter}`;
  };

  // add this circle to the page 
  document.body.appendChild(circle)
};
