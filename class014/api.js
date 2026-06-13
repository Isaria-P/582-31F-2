export async  function getTournaments() {

    const response = await fetch("tournaments.json");
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
}

export async function getRegistrations() {

    const response = await  fetch("registrations.json");

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
}