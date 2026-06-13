export function renderTournamentList(tournaments, container) {

    container.innerHTML = "";

    tournaments.forEach(tournament => {

        const col = document.createElement("div");

        col.className = "col";

        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5>${tournament.name}</h5>
                    <p>${tournament.game}</p>

                    <button
                        class="btn btn-primary view-registrations-btn"
                        data-id="${tournament.id}">
                        View Registrations
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

export function renderSummary(tournament, summaryRow) {

    summaryRow.innerHTML = `
        <div class="card">
            <div class="card-body">

                <h5>${tournament.name}</h5>

                <p>Total Registrations:
                    ${tournament.totalRegistrations}
                </p>

                <p>Confirmed Players:
                    ${tournament.confirmedPlayers}
                </p>

                <p>Pending Players:
                    ${tournament.pendingPlayers}
                </p>

                <p>Expected Revenue:
                    $${tournament.expectedRevenue}
                </p>

                <p>Spots Left:
                    ${tournament.spotsLeft}
                </p>

            </div>
        </div>
    `;
}

export function renderRegistrations(registrations, container) {

    container.innerHTML = "";

    registrations.forEach(registration => {

        const card = document.createElement("div");

        card.className = "col";

        card.innerHTML = `
            <div class="card">
                <div class="card-body">

                    <div>${registration.playerName}</div>
                    <div>${registration.gamerTag}</div>
                    <div>${registration.ticketType}</div>
                    <div>${registration.status}</div>

                </div>
            </div>
        `;

        container.appendChild(card);
    });
}