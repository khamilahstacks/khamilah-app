let currentTime = document.querySelector("#current-Time");
let now = new Date();
let h2 = document.querySelector("h5");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
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
  "December"
];
let month = months[now.getMonth()];
h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes},${year}`;

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  let cityValue = searchInput.value;
  city.innerHTML = `${cityValue} 🏙`;
}
let fair = document.querySelector("form");
fair.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

function searchCity(city) {
  let unit = "metric";
  let apiKey = "1f50o537ea68ecafef08548ac3977b7t";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handleGeolocation);
}

function handleGeolocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "1f50o537ea68ecafef08548ac3977b7t";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

let buttonLocation = document.querySelector("#button-location");
buttonLocation.addEventListener("click", getPosition);

function changeTempFah() {
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = `78🌈`;
}
let fahTemp = document.querySelector("#fahrenheit-link");
fahTemp.addEventListener("click", changeTempFah);

function changeTempCel() {
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = `❄️28`;
}
let celTemp = document.querySelector("#celsius-link");
celTemp.addEventListener("click", changeTempCel);
