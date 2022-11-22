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


function displayForecast(responsed) {
  let forecast = responsed.data.daily;
  let forecastElement=document.querySelector("#forecast");
  let forecastHTML=`<div class="row>`;
  let days=["Thursday", "Friday", "Saturday", "Sunday"];
  days.forEach (function  (forecastDay) {
    forecastHTML= forecastHTML + 
    
    ` <div class="container">
        <h1 id="city">Los Angeles 🏙</h1>
        <h2>
            <img id="icon" src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png">
            <span class="temp" id="temperature"></span>
            <a class="units" href="#" id="celsius-link" class="active">°C|</a>
            <a class="units" href="#" id="fahrenheit-link">°F</a>
        </h2>
        <form id="search-form">
            <input type="text" placeholder="search city" class="input-bar" id="search-input" autocomplete="off"
                autofocus="on" />
            <button class="btn btn-outline-secondary" type="submit" id="button-search">
                Go⛈🌤
            </button>
            <button class="btn btn-outline-secondary" id="button-location">
                Current Location
            </button>
        </form>
        <ul>
            <li>Humidity: <span id="humidity"></span>%</li>
            <li>Wind: <span id="wind"></span> m/h</li>

        </ul>
        <h5>Thursday September 22, 07:31,2022</h5>
        <ul>
            <li id="description">Partly Sunny</li>
        </ul>
        <div class="text-center"${forecastDay.dt} id="forecast">
            <div class="card-group">
                <div class="card" style="width: 18rem">
                    <h3 class="card-title">Monday</h3>
                    <h4 class="card-title"></h4>
                    <p class="weather-size">🌥</p>
                    <div class="card-body">
                        <h4>${forecastDay.temp.max}° / ${forecastDay.temp.min}°</h4>
                    </div>
                </div>
                <div class="card" style="width: 18rem">
                    <h3 class="card-title">Tuesday</h3>
                    <h4 class="card-title"></h4>
                    <div class="card-body">
                        <p class="weather-size">☀️</p>
                        <h4>${forecastDay.temp.max}° / ${forecastDay.temp.min}°</h4>
                    </div>
                </div>
                <div class="card" style="width: 18rem">
                    <h3 class="card-title">Wednesday</h3>
                    <h4 class="card-title"></h4>
                    <div class="card-body">
                        <p class="weather-size">🌤</p>
                        <h4>${forecastDay.temp.max}° / ${forecastDay.temp.min}°</h4>
                    </div>
                </div>
                <div class="card" style="width: 18rem">
                    <h3 class="card-title">Thursday</h3>
                    <h4 class="card-title"></h4>
                    <div class="card-body">
                        <p class="weather-size">☀️</p>
                        <h4>${forecastDay.temp.max}° / ${forecastDay.temp.min}°</h4>
                    </div>
                </div>
                <div class="card" style="width: 18rem">
                    <h3 class="card-title">Friday</h3>
                    <h4 class="card-title"></h4>
                    <div class="card-body">
                        <p class="weather-size">☀️</p>
                        <h4>${forecastDay.temp.max}° / ${forecastDay.temp.min}°</h4>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <small>
                This Project was coded by<a href="https://www.shecodes.io/graduates/52145-khamilah-prevost"
                    target="_blank" rel="noopener noreferrer">
                    Khamilah Prevost</a>
                and is
                <a href="https://github.com/khamilahstacks/khamilah-app.git" target="_blank"
                    rel="noopener noreferrer">open sourced on GitHub</a>
                and
                <a href="https://splendorous-pavlova-339d2c.netlify.app" target="_blank"
                    rel="noopener noreferrer">hosted by Netlify</a>.
            </small>
        </footer>
    </div>`;
  }
  );
  forecastHTML=forecastHTML+`<div>`;
forecastElement.innerHTML= forecastHTML;
}


function getForecast(coordinates) {
  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  getForecast(response.data.coord);
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

