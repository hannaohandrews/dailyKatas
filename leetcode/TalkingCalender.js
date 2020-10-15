const talkingCalendar = function (date) {
  let array = date.split("/");
  let monthNum = array[1];
  let day = array[2];
  let year = array[0];

  let answer = "";

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = ["1st", "2nd", "3rd"];

  if (day === "01") {
    answer = months[Number(monthNum) - 1] + " " + days[0] + ", " + year;
  } else if (day === "02") {
    answer = months[Number(monthNum) - 1] + " " + days[1] + ", " + year;
  } else if (day === "03") {
    answer = months[Number(monthNum) - 1] + " " + days[2] + ", " + year;
  } else {
    answer = months[Number(monthNum) - 1] + " " + day + "th" + ", " + year;
  }
  return answer;
};
console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2017/12/03"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
