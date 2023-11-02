// Set current date and time
function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let currentDate = `${months[date.getMonth()]}, ${date.getDate()}. ${
    weekDays[date.getDay()]
  }, ${hours}:${minutes}`;
  return currentDate;
}

let date = document.querySelector("#date");
date.innerHTML = formatDate(new Date());

// Implements searching
function startSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchInput.value;
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", startSearch);

// Celcius to Farenheit

function changeUnit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  let unit = document.querySelector("#unit");
  if (isCelcius === true) {
    let tempInFarenheit = Math.round((currentTemp.innerHTML * 9) / 5 + 32);
    currentTemp.innerHTML = tempInFarenheit;
    unit.innerHTML = "F";
    isCelcius = false;
  } else {
    currentTemp.innerHTML = 12;
    unit.innerHTML = "C";
    isCelcius = true;
  }
}
let changeUnitLink = document.querySelector("#change-unit");
let isCelcius = true;
changeUnitLink.addEventListener("click", changeUnit);
