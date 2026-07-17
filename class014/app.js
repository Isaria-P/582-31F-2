// import { loadingMessage } from "./tournament.js";

// console.log(loadingMessage("hiiii"))


import { Tournament } from "./tournament.js";

import {
    getTournaments,
    getRegistrations
} from "./api.js";

import {
    renderTournamentList,
    renderRegistrations,
    renderSummary
} from "./ui.js";

const loadBtn = document.getElementById("load-tournaments");

const tournamentRow =
    document.getElementById("rowTournaments");

const registrationRow =
    document.getElementById("regRow");

const summaryRow =
    document.getElementById("summaryRow");

let tournaments = [];

loadBtn.addEventListener("click", async () => {

    const data = await getTournaments();

    tournaments =
        data.map(Tournament.fromObject);

    renderTournamentList(
        tournaments,
        tournamentRow
    );
});

tournamentRow.addEventListener("click", async (e) => {

        if (
            !e.target.matches(".view-registrations-btn" )
        ) {
            return;
        }

        const tournamentId = Number(e.target.dataset.id);

        const tournament = tournaments.find( t =>
            t.id === tournamentId);

        const registrations = await getRegistrations();

        const matching = registrations.filter( r =>
            Number(r.tournamentId) === tournamentId);

        tournament.registrations = [];

        matching.forEach(reg => {tournament.addRegistration(reg);
        });

        renderSummary(tournament, summaryRow);

        renderRegistrations(matching, registrationRow);
    }
);