export function renderArtists(artists, container) {
    const lineupContainer = document.getElementByClass("lineup");
    // console.log(lineupContainer)
    container.innerHTML = "";
    artists.forEach(artist => {
        const artistCard = document.createElement("artist-card");
        artistCard.setAttribute("id", artist.id);
        artistCard.setAttribute("name", artist.name);
        artistCard.setAttribute("genre", artist.genre);
        artistCard.setAttribute("points", artist.points);
        artistCard.setAttribute("time", artist.time);
        artistCard.setAttribute("stage", artist.stage);
        artistCard.setAttribute("country", artist.country);
        artistCard.setAttribute("headliner", artist.headliner);
        
        container.appendChild(artistCard)
    })
}

