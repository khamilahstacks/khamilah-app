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


function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

function searchCity(city) {
  let unit = "metric";
  let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
  
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);



function displayForcast (){
let forcast= document.querySelector("#forcast");
forcast.innerHTML="forcast";
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#icon").innerHTML=response.data.description;
  icon.setAttribute("src" ,`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  tempCels=response.data.main.temp;
  
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handleGeolocation);
}

function handleGeolocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

let buttonLocation = document.querySelector("#button-location");
buttonLocation.addEventListener("click", getPosition);


function changeTempFah(event) {
  let temperature = document.querySelector(".temp");
  const celsiusLink = document.querySelector("#celsius-link");
  const fahrenheitLink = document.querySelector("#fahrenheit-link");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let changeTemp =(temperature.innerHTML*9)/5+32;
  temperature.innerHTML=Math.round(changeTemp);
}


function changeTempCel(event){
  let temperature=document.querySelector(".temp");
  const celsiusLink = document.querySelector("#celsius-link");
  const fahrenheitLink = document.querySelector("#fahrenheit-link");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperature.innerHTML=Math.round(tempCels);
}

let fahTemp = document.querySelector("#fahrenheit-link");
fahTemp.addEventListener("click", changeTempFah);

let celTemp = document.querySelector("#celsius-link");
celTemp.addEventListener("click", changeTempCel);

let tempCels = 0;