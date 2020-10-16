//speed Limit 70 (under and inclusive is ok)
// every 5 above -> 1 point
// Math.floor(1.3)=> 1
// more than 12 points -> suspended

function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return "OK";
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    return "You are suspended";
  } else return points;
}

console.log(checkSpeed(50)); //OK
console.log(checkSpeed(71.5)); // OK
console.log(checkSpeed(75)); // 1
console.log(checkSpeed(80)); // 2
console.log(checkSpeed(130)); // "You are suspended"
