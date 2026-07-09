export function fetchTeams() {
    const response = await fetch("./artists.json");
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
