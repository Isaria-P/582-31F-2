import { Team } from "./team.js"

export class TeamCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();

        const detailsBtn = this.shadowRoot.querySelector(".details")
        detailsBtn.addEventListener("click", () => {
            this.dispatchEvent(
                new CustomEvent("show-details", {
                    bubbles: true, composed: true, detail:{
                        id: this.teamId
                    }
                })
            )
            
        })
    }

    get teamId() {
        return this.getAttribute("team-id");
    }

    get name() {
        return this.getAttribute("name");
    }

    get group() {
        return this.getAttribute("group");
    }

    get points() {
        return this.getAttribute("points");
    }

    get played() {
        return this.getAttribute("played");
    }

    get goalDifference() {
        return this.getAttribute("goal-difference");
    }

    render() {
        
        this.shadowRoot.innerHTML = `
            <style>
                .card{
                    border: 1px solid #333;
                    padding: 1rem;
                    background: #4d4a4a;
                    color: white;
                    border-radius: 8px;
                    margin-top: 1rem;
                }
                
                button {
                    margin-top: 10px;
                    padding: 6px 10px;
                    cursor: pointer;
                    background: #e1e1e1;
                    color: 4d4a4a;
                }
            
            </style>

            <div class="card" id="${this.teamId}">
                
                <h2>Name: ${this.name}</h2>
                <p>Group: ${this.group}</p>
                <p>Points: ${this.points}</p>
                <p>Played: ${this.played}</p>
                <p>Goal Difference: ${this.goalDifference}</p>
                <button class="details">View Details</button>
            </div>
        `;
        // console.log(shadow)
    }
}

customElements.define("team-card", TeamCard);