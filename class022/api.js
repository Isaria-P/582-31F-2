export async function fetchLocation() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.5088&longitude=-73.5878&current_weather=true");

    if (!response.ok) {
        throw new error(`
            unable to locate coordinates Event: HTTP status: ${response.status}
            `)
    }
    return response.json();
}