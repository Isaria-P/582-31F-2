import { Team } from "./team.js";
import "./team-card.js";
import { renderTeams } from "./ui.js";
import { fetchTeams } from "./api.js"

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status")
const teamsContainer = document.getElementById("teams-container");
const detailsContainer = document.getElementById("details-container");

clearBtn.addEventListener("click", clearTeams);

function clearTeams() {
    status.textContent = "No teams loaded.";
    detailsContainer.innerHTML = "";
    teamsContainer.innerHTML = "";
}

loadBtn.addEventListener("click", async () => {

    status.textContent = "Loading....";
    detailsContainer.innerHTML = "";
        try {
            
            const rawTeams = await fetchTeams();
            teamsContainer.innerHTML = "";
            const teams = rawTeams.map(team => Team.fromObject(team));
            
            //render teams
            renderTeams(teams, teamsContainer);
            
            status.textContent = `${teams.length} teams loaded`;
            console.log(teams)
        } catch (error) {
            status.textContent = `Fail to load teams| Error: ${error.message}`;
            console.error(error)
        }
   
})

