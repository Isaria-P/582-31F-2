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
                    border: 1px solid #solid #4b526a;
                    magin: 1rem;
                    padding: 1rem;
                }
            </style>
            <div class="card">
                <p>Latitude: ${this.latitude}</p>
                <p>Latitude: ${this.longitude}</p>
                <p>Current temperature: ${this.temperature}</p>
            </div>
        `
    }
}
customElements.define("current-weather", weatherCard)