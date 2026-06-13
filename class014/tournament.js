const loadTournamentsBtn = document.getElementById("load-tournaments");
const row = document.getElementById("rowTournaments");
const section = document.getElementById("section");
const registrationRow = document.getElementById("regRow")
const summaryRow = document.getElementById("summaryRow");

console.log(loadTournamentsBtn)
let tournaments = [];

loadTournamentsBtn.addEventListener("click", () => {
    const status = document.getElementById("status");
    // console.log(status)
    status.textContent = "Loading Tournaments...";
    fetch("tournaments.json")
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
            tournaments = data.map(Tournament.fromObject);
            row.innerHTML = "";
            tournaments.map(tournament => {
                const col = document.createElement("div");
                // console.log("yoooo")
                col.className = "col";
                col.innerHTML = tournament.getCardHTML();
                row.append(col);
            })
            status.textContent = "Tournaments has loaded"
        })
        .catch(error => {
            console.error(error);
            status.textContent = error.message;
        })
})



// part 3 - Tournament Class
class Tournament {
    constructor(id, name, game, entryFee, maxPlayers, registeredPlayers, status) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.entryFee = entryFee;
        this.maxPlayers = maxPlayers;
        this.registeredPlayers = registeredPlayers;
        this.status = status;

        this.registrations = []
    }

    
    //static
    static fromObject(data) {
        return new Tournament(
            data.id,
            data.name,
            data.game,
            data.entryFee,
            data.maxPlayers,
            data.registeredPlayers,
            data.status
        )
    }
    
    // setter
    set maxPlayers(value) {
        // must be > 0
        if (value <= 0) {
            throw new Error("maxPlayers must be greater than 0.");
        }
        // cannot be less than registeredPlayers
        if (value < this.registeredPlayers) {
            throw new Error(
                `maxPlayers (${value}) cannot be less than registeredPlayers (${this.registeredPlayers}).`
            );
        }
        // If valid, assign value
        this._maxPlayers = value;
    }

    get maxPlayers() {
        return this._maxPlayers;
    }



    getCardHTML() {
        return `
            <div class="card h-100" id="tournamentContainer-${this.id}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p>Game: ${this.game}</p>
                    <p>EntryFee: ${this.entryFee}</p>
                    <p>MaxPlayers: ${this.maxPlayers}</p>
                    <p>RegisteredPlayers: ${this.registeredPlayers}</p>
                    <p>Spots Left: ${this.spotsLeft}</p>
                    <p>Status: ${this.status}</p>

                    <button class="btn btn-primary view-registrations-btn"
                            data-id="${this.id}">
                        View Registrations
                    </button>
                </div>
            </div>
        `;
    }
    
    // get spotsLeft() {
    //     return this.maxPlayers - this.registeredPlayers;
    // }

    get totalRegistration() {
        return this.registeredPlayers;
    }

    // get confirmedPlayers() {
    //     return this.registeredPlayers;
    // }

    // get expectedRevenue() {
    //     return this.confirmedPlayers * this.entryFee;
    // }

    // registration

    
    addRegistration(registration) {
        this.registrations.push(registration);
    }

    get totalRegistrations() {
        return this.registrations.length;
    }    
        
    get confirmedPlayers() {
        return this.registrations.filter(
            r => r.status === "confirmed"
        ).length;
    }

    get pendingPlayers() {
        return this.registrations.filter(
            r => r.status === "pending"
        ).length;
    }

    get expectedRevenue() {
        return this.confirmedPlayers * this.entryFee;
    }

    get spotsLeft() {
        return this.maxPlayers - this.confirmedPlayers;
    }

    getSummaryHTML() {
        return `
            <div class="card mt-2">
                <div class="card-body">
                    <h5>Summary</h5>
                    <br>
                    <p>Total Registrations: ${this.totalRegistrations}</p>
                    <p>Confirmed Players: ${this.confirmedPlayers}</p>
                    <p>Expected Revenue: ${this.expectedRevenue}</p>
                    <p>Spots Left: ${this.spotsLeft}</p>
                </div>
            </div>

        `;
    }
}

const tournament = new Tournament(29, "Izzy", "Soccor", 49, 5, 4, "pending")


console.log(tournament.totalRegistrations);
console.log(tournament.confirmedPlayers);
console.log(tournament.pendingPlayers);
console.log(tournament.expectedRevenue);
console.log(tournament.spotsLeft);

try {
    const t = new Tournament(1, "may", "LALALAnd2", 200, 5, 2, "Stating at 5");
    t.maxPlayers = 7;
    console.log("This will run if working");
} catch (error) {
    console.log("Setter error caught:");
    console.log(error.message);
}

export function loadingMessage(Message) {
    return `Hello, ${Message}`
}

row.addEventListener("click", (e) => {
     if (!e.target.matches(".view-registrations-btn")) {   
        return;
    }
    
    // if (e.target.matches(".view-registrations-btn")) {   
    //     const tournamentId = Number(e.target.dataset.id); 
    //     console.log(tournamentId);
    //     console.log("Viewing registrations for:", tournamentId);
    // }
    
    const tournamentId = Number(e.target.dataset.id);

    const tournament = tournaments.find(
        t => Number(t.id) === tournamentId
    );

    loadRegistrations(tournamentId, tournament);
    showTournamentSummary(tournament);

})

function showTournamentSummary(tournament) {
        summaryRow.innerHTML = tournament.getSummaryHTML();
}
// loadRegistration
function loadRegistrations(tournamentId, tournament) {

    fetch(`registrations.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(registrations => {
            tournament.registrations = [];
            const matchingRegistrations = registrations.filter(
                registration => Number(registration.tournamentId) === Number(tournamentId)
            );
            
            tournament.registrations = [];

            registrations.forEach(reg => {
                console.log(
                    "registration tournamentId:",
                    reg.tournamentId,
                    typeof reg.tournamentId
                );
            })

            console.log("---", matchingRegistrations);
            registrationRow.innerHTML = "";
            matchingRegistrations.forEach(registration => {
                tournament.addRegistration(registration);
                const card = document.createElement("div");
                card.className = "col";
                card.innerHTML += `
                    <div class="card h-100">
                    <div class="card-body">
                        <div>${registration.tournamentId}</div>
                        <div>${registration.playerName}</div>
                        <div>${registration.gamerTag}</div>
                        <div>${registration.ticketType}</div>
                        <div>${registration.status}</div>
                    </div>
                    </div>
                `;
                registrationRow.append(card)
            })           
            // registrationRow.append(card);
            status.textContent = "Tournaments and registrations."
        })
        .catch(error => console.error(error));
}
