export function renderWeather(coordinates, container){
    container.innerHTML = `
        <h3>${coordinates.latitude}</h3>
        <h3>${coordinates.longitude}</h3>
        <p>${coordinates.current_weather.temperature} ${coordinates.current_weather_units.temperature}</p>
    `
}