export async function fetchTeams() {
    const response = await fetch("./teams.json");
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json()
}

