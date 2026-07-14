import { Artist } from "./artist.js";
import "./artist-card.js";
import { renderArtists, renderClear } from "./ui.js";
import { fetchArtists } from "./api.js";

const lineupBtn = document.querySelector(".lineup");
const clearBtn = document.querySelector(".clear");
const status = document.querySelector(".status");

const lineupContainer = document.querySelector(".lineup-container");
const detailsPanel = document.querySelector(".details");
const artistContainer = document.querySelector("artist-template")
// artist-template
// const detailContainer = document.querySelector("#artist-template")
const messageArea = document.querySelector("#message")

lineupBtn.addEventListener("click", async () => {
    status.textContent = "Loading LineUp...";

    try {
        const rawArtist = await fetchArtists();
        const artists = rawArtist.map(artist => Artist.fromObject(artist));

        renderArtists(artists, lineupContainer);
        status.textContent = `${artists.length} artists loaded`;
        messageArea.textContent = "Lineup has been loaded";
        detailsPanel.textContent = "click View Details button to view details "
    }
    catch(error){
        status.textContent = `Error: ${error.message}`;
    }
    
})

lineupContainer.addEventListener("artist-selected", (event) => {
    status.textContent = `Artist ${event.detail.id} selected`;
})

clearBtn.addEventListener("click", () => {
    status.textContent = "Cleared Lineup";
    status.textContent = `Lineup cleared`;
    detailsPanel.innerHTML = "Details Panel cleared"
    renderClear(lineupContainer)
})
