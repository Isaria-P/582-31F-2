const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCurrentTemperature(latitude, longitude) {
    const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(url);

    if (!response.ok) {
        throw new error(`
            unable to fetch weather & coordinates.
            `)
    }
    const data = await response.json();
    return data;
}
