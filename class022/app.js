import { getCurrentTemperature } from "./api.js";
import { renderWeather } from "./ui.js";
import "./weather-card.js"

const status = document.getElementById("status");
const locationContainer = document.getElementById("current-location-continer")
status.textContent = `Weather loaded successfully.`;

function getUserPosition() {
    
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            resolve, reject
        )
    })
}

async function getCurrentWeather() {
    
    locationContainer.innerHTML = "";
    try {

        const position = await getUserPosition();
        const weatherData = await getCurrentTemperature(
            position.coords.latitude,
            position.coords.longitude
        )
        renderWeather(weatherData, locationContainer);
        
    } catch(error) {
        status.textContent = `Fail to load Weather data: ${error.message}`;
    }
}

