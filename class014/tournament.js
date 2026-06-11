


// console.log("heloooo")
const loadTournamentsBtn = document.getElementById("load-tournaments");
const row = document.getElementById("row");
const section = document.getElementById("section");
// console.log(row)

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
        .then((tournaments) => {
            // const tournaments = response.json(tournaments);
            row.innerHTML = "";
            tournaments.map(tournament => {
                const col = document.createElement("div");
                console.log("yoooo")
                col.className = "col";
                col.id
                col.innerHTML = `
                    <div class="card h-100" id="tournamentContainer">
                        <div class="card-body">
                            <h5 class="card-title">${ tournament.name }</h5>
                            <p>Game: ${ tournament.game }</p>
                            <p>EntryFee: ${ tournament.entryFee }</p>
                            <p>MaxPlayers: ${ tournament.maxPlayers }</p>
                            <p>RegisteredPlayers: ${ tournament.registeredPlayers }</p>
                            <p>Status: ${ tournament.status }</p>
                            <button class="btn btn-primary view-registrations-btn" data-id="${tournament.id}">
                               View Registrations
                            </button>
                `;
                row.append(col);
                status.textContent = "Tournaments has loaded"
            })
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

    //getter
    get spotsLeft() {
        return `${this.maxPlayers} - ${registeredPlayers}`;
    }    
}

// const t1 = new Tournament(1, "may", "LALALAnd2", 200, 5, 2, "Stating at 5")
// console.log(t1.status)
try {
    const t = new Tournament(1, "may", "LALALAnd2", 200, 5, 2, "Stating at 5");

    t.maxPlayers = 7;
    console.log("This will not run if working");
} catch (error) {
    console.log("Setter error caught:");
    console.log(error.message);
}

export function loadingMessage(Message) {

    return `Hello, ${Message}`
}

// btn exist after the card is created
// const registrationBTN = document.querySelector(".btn-primary");
// if (!registrationBTN) {
//     throw new Error("Registration Button does not exist");
// }

document.getElementById("tournamentContainer").addEventListener("click", (e) => {
    // console.log(registrationBTN)
    if ( e.target.classList.contains(".view-registrations-btn")){
        const tournament = Number(event.target.dataset.id)
        console.log("7h7h7")
    };

    const p = document.createElement("p");
    p.textContent = "loading Registrations...";
    if (!button) return;

    const tournamentId = Number(button.dataset.id);
    fetch("registrations.json")
        .then(res => res.json())
        // .then(registrations => console.log(registrations) )
        // hereeee

        loadRegistrations(tournamentId)
    /*
    if (e.target.classList.contains("view-registrations-btn")) {
        const tournamentId = e.target.dataset.id;
        console.log(tournamentId);
        loadRegistrations(tournamentId)
    } */
})

// loadRegistration
function loadRegistrations(tournamentId) {

    fetch(`registrations.json`)
        .then(res => res.json())
        .then(data => {
            const registration  = data.filter(r => r.tournamentId == id);
            console.log(registration )

            registration.map(registered => {
                const col = document.createElement("div");
                section.innerHTML = "";
                section.innerHTML = `
                    <div class="card h-100">
                    <div class="card-body">
                        <div>${registered.playerName}</div>
                    </div>
                    </div>
                `;
            })           
            row 
        })
}

/*
row.innerHTML = "";
            tournaments.map(tournament => {
                const col = document.createElement("div");
                console.log("yoooo")
                col.className = "col";
                col.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${ tournament.name }</h5>
                            <p>Game: ${ tournament.game }</p>
                            <p>EntryFee: ${ tournament.entryFee }</p>
                            <p>MaxPlayers: ${ tournament.maxPlayers }</p>
                            <p>RegisteredPlayers: ${ tournament.registeredPlayers }</p>
                            <p>Status: ${ tournament.status }</p>
                            <button class="btn btn-primary view-registrations-btn" data-id="${tournament.id}">
                               View Registrations
                            </button>
                        </div>
                    </div>
                `;
                row.append(col);
            })
*/