let dateElement = document.getElementById('date');

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (day < 10) {day = `0${day}`}
if (month < 10) {month = `0${month}`}


let hours = date.getHours();
let minutes = date.getMinutes();


if (hours < 10) {hours = `0${hours}`}
if (minutes < 10) {minutes = `0${minutes}`}


const dateFormat = `${day}-${month}-${year}   ${hours}:${minutes}   EET`;
dateElement.textContent = dateFormat;


let hoursElement = document.getElementById("hours");
hoursElement.textContent = Number(hoursElement.textContent);

let minutesElement = document.getElementById("minutes");
minutesElement.textContent = Number(minutesElement.textContent);

let secondsElement = document.getElementById("seconds");
secondsElement.textContent = Number(secondsElement.textContent);

if (secondsElement.textContent < 10) {
  secondsElement.textContent = `0${secondsElement.textContent}`;
}

if (minutesElement.textContent < 10) {
  minutesElement.textContent = `0${minutesElement.textContent}`;
}

if (hoursElement.textContent < 10) {
      hoursElement.textContent = `0${hoursElement.textContent}`;
    }

setInterval(function () {
  secondsElement.textContent++;
  if (secondsElement.textContent > 59) {

    secondsElement.textContent = 1;
    minutesElement.textContent++;

    if (minutesElement.textContent < 10) {
      minutesElement.textContent = `0${minutesElement.textContent}`;
    }
  }

  if (minutesElement.textContent > 59) {
    
    minutesElement.textContent = 0;

    if (minutesElement.textContent < 10) {
      minutesElement.textContent = `0${minutesElement.textContent}`;
    }

    hoursElement.textContent++;

    if (hoursElement.textContent < 10) {
      hoursElement.textContent = `0${hoursElement.textContent}`;
    }
  }

  if (secondsElement.textContent < 10) {
    secondsElement.textContent = `0${secondsElement.textContent}`;
  }

}, 1000);







