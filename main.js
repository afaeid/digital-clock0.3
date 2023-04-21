var hourBox, minuteBox, secondBox, monthBox, dayBox, dateBox, yearBox;
var formate12Hour = (hour) => {
 if (hour > 12) {
  hour = hour - 12;
  document.querySelectorAll(".extra-info-box")[4].innerHTML = "PM";
 } else {
  hour;
  document.querySelectorAll(".extra-info-box")[4].innerHTML = "AM";
 }
 return hour
}

var formateOneChar = (time) => {
 if (time < 10) {
  time = `0${time}`
 } else {
  time;
 }
 return time;
}
var countTime = () => {
 setInterval(() => {
  var mainTime = new Date();
  var hour = formateOneChar(formate12Hour(mainTime.getHours()));
  var minute = formateOneChar(mainTime.getMinutes());
  var second = formateOneChar(mainTime.getSeconds());
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[mainTime.getMonth()];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[mainTime.getDay()];
  var date = mainTime.getDate();
  var year = mainTime.getFullYear();
  document.querySelectorAll(".time-box")[0].innerText = hour;
  document.querySelectorAll(".time-box")[1].innerText = minute;
  document.querySelectorAll(".time-box")[2].innerText = second;
  document.querySelectorAll(".extra-info-box")[0].innerText = month;
  document.querySelectorAll(".extra-info-box")[1].innerText = day;
  document.querySelectorAll(".extra-info-box")[2].innerText = date;
  yearBox = document.querySelectorAll(".extra-info-box")[3].innerText = year;
 }, 100)
}
countTime();