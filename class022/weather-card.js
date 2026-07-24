import { getCurrentTemperature } from "./api.js";

export class WeatherCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"})
    }
    connectedCallback() {

        let latitude = this.getAttribute("latitude");
        let longitude = this.getAttribute("longitude");
        
        

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const weather = await getCurrentTemperature(
                    position.coords.latitude,  position.coords.longitude
                );
                
                this.render(weather);
               

            }, 
            () => {
                this.innerHTML = "<p>Unable to get location.</p>"
            }
        );
    }

    get latitude() {
        return this.getAttribute("latitude");
    }
    get longitude() {
        return this.getAttribute("longitude");
    }
    get temperature() {
        return this.getAttribute("temperature");
    }
    render(weather) {
        
        const current = weather.current_weather;
        
        this.shadowRoot.innerHTML =`
            <style>
                .card{
                   
                    padding: 1rem;
                    background: #4d4a4a;
                    color: white;
                    border-radius: 8px;
                }
            </style>
            <div class="card">
                <h4>Current Temperature based on your Curent location  </h4>
                <p>Temperature: ${current.temperature} °C</p>
                <p>WindSpeed: ${current.windspeed} km/h</p>
            </div>
        `;
    }
}
customElements.define("current-weather", WeatherCard)