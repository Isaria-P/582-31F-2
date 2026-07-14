export function renderArtists(artists, container) {
    const detailContainer = document.querySelector(".details");
    // console.log(lineupContainer)
    container.innerHTML = "";
    artists.forEach(artist => {
        const artistCard = document.createElement("artist-card");
        artistCard.setAttribute("artist-id", artist.id);
        artistCard.setAttribute("name", artist.name);
        artistCard.setAttribute("genre", artist.genre);
        artistCard.setAttribute("time", artist.time);
        artistCard.setAttribute("stage", artist.stage);
        artistCard.setAttribute("country", artist.country);
        artistCard.setAttribute("headliner", artist.headliner);
        
        artistCard.addEventListener("click", () => {
            renderDetail(artist, detailContainer)
        })
        container.appendChild(artistCard)
    })
}

export function renderDetail(artist, container) {
    container.innerHTML = `
        <div class="detail-card">
            <h3>${artist.name}</h3>
            <p>${artist.genre}</p>
            <p>${artist.time}</p>
            <p>${artist.stage}</p>
            <p>${artist.country}</p>
            <p>${artist.headliner}</p>
        </div>
    `
}

export function renderClear(container) {
    const lineupContainer = document.querySelector(".lineup-container")
    container.innerHTML = ""
    lineupContainer.innerHTML = ""
}