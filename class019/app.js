import { Artist } from "./artist.js";
import "./artist-card.js";
import { renderArtists } from "./ui.js";
import { fetchArtists } from "./api.js";

const lineupBtn = document.querySelector(".lineup");
const clearBtn = document.querySelector(".clear");
const status = document.querySelector(".status");

const lineupContainer = document.querySelector(".lineup-container");
const detailsPanel = document.querySelector(".details")
// console.log(lineupBtn)

lineupBtn.addEventListener("click", async () => {
    status.textContent = "Loading LineUp...";

    try {
        const rawArtist = await fetchArtists();
        const artists = rawArtist.map(artist => Artist.fromObject(artist));

        renderArtists(artists, lineupContainer);
        status.textContent = `${artists.length} artists loaded`;
    }
    catch(error){
        status.textContent = `Error: ${error.message}`;
    }
    
})

lineupContainer.addEventListener("artist-selected", (event) => {
    detailsPanel.textContent = `Artist ID: ${event.detail.id}`;
})
