import { Team } from "./team.js"

// console.log(Team)

export class TeamCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
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

            <div class="card" id="${this.getId}">
                
                <h2>${this.name}</h2>
                <p>${this.getGroup}</p>
                <p>${this.getPoints}</p>
                <p>${this.getPlayed}</p>
                <p>${this.getGoalDifference}</p>
                <button class="details">View Details</button>
            </div>
        `;
        console.log(shadow)
    }
}

customElements.define("team-card", TeamCard);