let dateElement = document.getElementById('date');

let date = new Date();

let day = date.getDate();
let month = date.getMonth();
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
      hoursElement.textContent = 0;

      let minutesElement = document.getElementById("minutes");
      minutesElement.textContent = 0;

      let secondsElement = document.getElementById("seconds");
      secondsElement.textContent = 0;

      setInterval(function () {
        secondsElement.textContent++;
        if (secondsElement.textContent > 59) {
          secondsElement.textContent = 1;
          minutesElement.textContent++;
        }

        if (minutesElement.textContent > 59) {
          minutesElement.textContent = 0;
          hoursElement.textContent++;
        }

        let hourNullElement = document.getElementById("h-null");
        if (hoursElement.textContent >= 10) {
          hourNullElement.style.display = "none";
        } else {
          hourNullElement.style.display = "inline";
        }

        let minuteNullElement = document.getElementById("m-null");
        if (minutesElement.textContent >= 10) {
          minuteNullElement.style.display = "none";
        } else {
          minuteNullElement.style.display = "inline";
        }

        let secondsNullElement = document.getElementById("s-null");
        if (secondsElement.textContent >= 10) {
          secondsNullElement.style.display = "none";
        } else {
          secondsNullElement.style.display = "inline";
        }
      }, 1000);