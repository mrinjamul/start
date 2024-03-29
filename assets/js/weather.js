// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector(".weatherIcon");
const tempElement = document.querySelector(".weatherValue p");
const descElement = document.querySelector(".weatherDescription p");
const locElement = document.querySelector(".locationName p");

// App data
const weather = {};
weather.temperature = {
  unit: "celsius",
};

var tempUnit = CONFIG.weatherUnit;

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = `${CONFIG.weatherKey}`;
const weatherRefreshRate =
  `${CONFIG.weatherRefresh}` != "0" || undefined
    ? `${CONFIG.weatherRefresh}`
    : 15;

// interval to fetch weather
const weatherInterval = weatherRefreshRate * 60 * 1000;

// Set Position function
setPosition();

function setPosition(position) {
  if (!CONFIG.trackLocation || !navigator.geolocation) {
    if (CONFIG.trackLocation) {
      console.error("Geolocation not available");
    }
    getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      getWeather(
        pos.coords.latitude.toFixed(3),
        pos.coords.longitude.toFixed(3)
      );
    },
    (err) => {
      console.error(err);
      getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
    }
  );
}

// Get the Weather data
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;

  // console.log(api);
  fetchWeather(api);
  setInterval(fetchWeather, weatherInterval, api);
}

function fetchWeather(api) {
  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      let celsius = Math.floor(data.main.temp - KELVIN);
      weather.temperature.value =
        tempUnit == "C" ? celsius : (celsius * 9) / 5 + 32;
      weather.description = data.weather[0].description;
      weather.location = data.name;
      weather.iconId = data.weather[0].icon;
      // console.log(
      //   `${weather.temperature.value}°${tempUnit} ${weather.description}`
      // );
    })
    .then(function () {
      displayWeather();
    });
}

// Display Weather info
function displayWeather() {
  iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value.toFixed(
    0
  )}°<span class="darkfg">${tempUnit}</span>`;
  descElement.innerHTML = weather.description;
  locElement.innerHTML = weather.location;
}
