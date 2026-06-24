
export function renderTeams(teams, container) {
    const detailsContainer = document.getElementById("details-container")

    container.innerHTML = "";
    teams.forEach(team => {
        const teamCard = document.createElement("team-card");
        teamCard.setAttribute("team-id", team.id);
        teamCard.setAttribute("name", team.name);
        teamCard.setAttribute("group", team.group);
        teamCard.setAttribute("points", team.points);
        teamCard.setAttribute("played", team.played);
        teamCard.setAttribute("goal-difference", team.goalDifference);

        teamCard.addEventListener("click", () => {
            renderDetails(team, detailsContainer);
        })
        container.appendChild(teamCard);
    })
}

export function renderDetails(team, container) {
    container.innerHTML = `
        <h3>${team.name}</h3>
        <p><strong>Group:</strong> ${team.group}</p>
        <p><strong>Points:</strong> ${team.points}</p>
        <p><strong>Matches Played:</strong> ${team.played}</p>
        <p><strong>Goal Difference:</strong> ${team.goalDifference}</p>
    `;

}