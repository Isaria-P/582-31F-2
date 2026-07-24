import { getCurrentTemperature } from "./api.js";
import { renderWeather } from "./ui.js";
import "./weather-card.js"

const status = document.getElementById("status");
const clearBtn = document.getElementById("clear-btn")
const locationContainer = document.getElementById("current-location-continer")
const loadBtn = document.getElementById("load-btn");

console.log(navigator.geolocation)

function clearWeather() {
    status.textContent = "Clear whearther info by clear Button"
    locationContainer.innerHTML = "";
}

clearBtn.addEventListener("click", clearWeather)
async function loadWeather() {
    try {
        const data = await fetchLocation();
    } catch(error){
        status.textContent = "Can Not Load Weather"
    }
}

loadBtn.addEventListener("click", getCurrentWeather)

async function getCurrentWeather() {
    status.textContent = "Loading...";
    locationContainer.innerHTML = "";
    try {
        const rawWeatherJson = await fetchLocation();
        console.log(rawWeatherJson,  rawWeatherJson.current_weather.temperature)
        // rawWeatherJson.latitude
        // rawWeatherJson.longitude, rawWeatherJson.latitude, rawWeatherJson.longitude,
        // rawWeatherJson.current_weather.temperature
        renderWeather(rawWeatherJson, locationContainer)

    } catch(error) {
        status.textContent = `Fail to load Weather data: ${error.message}`;
    }
}