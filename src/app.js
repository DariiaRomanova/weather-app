let apiKey = "od6b13a01c4ef9abd54c31t431434300";

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
function displayCurrentTemperature(response) {
  let cityNameElement = document.querySelector("#city-name");
  let countryNameElement = document.querySelector("#country-name");
  let currentTempElement = document.querySelector("#current-temp");
  let city = response.data.city;
  let country = response.data.country;
  let currentTemperature = Math.round(response.data.temperature.current);
  cityNameElement.innerHTML = city;
  countryNameElement.innerHTML = country;
  currentTempElement.innerHTML = currentTemperature;
}

function startSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchQuery = searchInput.value;
  console.log(searchQuery);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchQuery}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTemperature);
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
