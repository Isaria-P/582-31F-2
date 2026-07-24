export class weatherCard extends HTMLElement {
    constructor() {
        connectedCallback();
        this.attachShadow({ mode: "open"})
    }

    get Latitude() {
        return this.getAttribute("latitude");
    }
    get Longitude() {
        return this.getAttribute("longitude");
    }
    get temperature() {
        return this.getAttribute("temperature");
    }
    render() {
        
        
        this.shadowRoot.innerHTML =`
            <style>
                .card{
                    border: 1px solid #solid #333;
                    magin: 1rem;
                    padding: 1rem;
                }
            </style>
            <div class="card">
                <h3>Latitude: ${this.latitude}</h3>
                <h3>Latitude: ${this.longitude}</h3>
                <p>temperature: ${this.temperature}</p>
            </div>
        `
    }
}
customElements.define("current-weather", weatherCard)