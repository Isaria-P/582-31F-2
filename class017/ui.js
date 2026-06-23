
export function renderTeams(teams, container) {
    container.innerHTML = "";
    teams.forEach(team => {
        const teamCard = document.createElement("team-card");

        teamCard.setAttribute("team-id", team.id);
        teamCard.setAttribute("name", team.name);
        teamCard.setAttribute("group", team.group);
        teamCard.setAttribute("points", team.points);
        teamCard.setAttribute("played", team.played);
        teamCard.setAttribute("goal-difference", team.goalDifference);

        container.appendChild(teamCard);
    })

}