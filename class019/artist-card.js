import { Artist } from "./artist.js"
export class ArtistCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
        const detailsBtn = this.shadowRoot.querySelector(".detail");
        detailsBtn.addEventListener("click", () => {
            this.dispatchEvent(
                new CustomEvent("artist-selected", {
                    bubbles: true, composed: true, detail: { id: this.artistId}
                })
            )
        })
    }
    
    get artistId() {
        return this.getAttribute("artist-id");
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
        const headlinerClass = this.artistHeadliner === "true" ? "headliner" : "";

        const card = clone.querySelector(".artist-card");
        if (headlinerClass){
            card.classList.add(headlinerClass);
        }

        this.shadowRoot.innerHTML = "";

        clone.querySelector(".artist-name").textContent = `-${this.artistName}-`;
        clone.querySelector(".artist-genre").textContent = `Artist Genre: ${this.artistGenre}`;
        clone.querySelector(".artist-time").textContent = `Artist Time: ${this.artistTime}`;
        clone.querySelector(".artist-stage").textContent = `Artist Stage: ${this.artistStage}`;
        clone.querySelector(".artist-country").textContent = `Artist Country: ${this.artistCountry}`;
        clone.querySelector(".artist-headliner").textContent = `Headline: ${this.artistHeadliner}`;
        this.shadowRoot.appendChild(clone);
    }
}
customElements.define("artist-card", ArtistCard);