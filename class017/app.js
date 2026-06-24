import { Team } from "./team.js";

import { TeamCard } from "./team-card.js";
import { renderTeams } from "./ui.js";
import { fetchTeams } from "./api.js"

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status")
const teamsContainer = document.getElementById("teams-container");
const detailsContainer = document.getElementById("details-container");

clearBtn.addEventListener("click", (event) =>{
    status.textContent = "Click the button to load teams.";

})


loadBtn.addEventListener("click", async (e) => {
    console.log(e)
    console.log(status)

    status.textContent = "Loading....";
        /// try catch  working
        try {
            
            const rawTeams = await fetchTeams();
            teamsContainer.innerHTML = "";
            const teams = rawTeams.map(team => Team.fromObject(team));
            
            //render teams
            renderTeams(teams, teamsContainer);
            
            status.textContent = `${teams.length} teams loaded`;
            console.log(teams)
        } catch (error) {
            status.textContent = "Fail to load teams";
            console.log(error)
        }
   
})

// console.log( status, clearBtn, loadBtn)
/**
 * 
This file should connect:

the page buttons
the fetch logic
the Team class
the UI rendering
 */
