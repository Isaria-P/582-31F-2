import { Artist } from "./artist.js"
export class ArtistCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
        const detailsBtn = this.shadowRoot.querySelector(".details");
        detailsBtn.addEventListener("click", () => {
            this.dispatchEvent(
                new CustomEvent("show-details", {
                    bubbles: true, composed: true, detail: { id: this.artistId}
                })
            )
        })
    }
    
    get artistId() {
        return this.getAttribute("id");
    }
    get artistName() {
        return this.getAttribute("name");
    }
    get artistGenre() {
        return this.getAttribute("genre");
    }
    get artistTime() {
        return this.getAttribute("time");
    }
    get artistStage() {
        return this.getAttribute("stage");
    }
    get artistCountry() {
        return this.getAttribute("country");
    }
    get artistHeadliner() {
        return this.getAttribute("headliner");
    }
    
    render(){
        const template = document.getElementById("artist-template");
        const clone = template.content.cloneNode(true);

        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(clone)

        clone.querySelector(".artist-name").textContent = this.artistName;
        clone.querySelector(".artist-genre").textContent = this.artistGenre;
        clone.querySelector(".artist-time").textContent = this.artistTime;
        clone.querySelector(".artist-stage").textContent = this.artistStage;
        clone.querySelector(".artist-country").textContent = this.artistCountry;
        clone.querySelector(".artist-headliner").textContent = this.artistHeadliner;
    }
}
customElements.define("artist-card", ArtistCard);