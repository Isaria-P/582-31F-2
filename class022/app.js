import { fetchLocation } from "./api";

async function loadWeather() {
    try {
        const data = await fetchLocation();
        console.log(data)
    }
}