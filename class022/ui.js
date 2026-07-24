export function renderWeather(weather, container){
    
    container.innerHTML = `
        <h4>Here is your Temperature based on your Curent location below </h4>
        <p>Temperature: ${weather.temperature} °C</p>
        <p>Windspeed: ${weather.windspeed} km/h</p>
    `;
}