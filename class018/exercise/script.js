
// DATA
const players = [
  { name: "Messi", country: "Argentina", number: 10 },
  { name: "Mbappé", country: "France", number: 10 },
  { name: "Endo", country: "Japan", number: 6 }
];



const output = document.getElementById("player-container")
// helper Function
function createPlayerCard(player){
    // DOM
    const playerTemplate = document.getElementById("player-template");
    // get template
    const clone = playerTemplate.content.cloneNode(true);

    // Get the Element's textContent and dynamically
    clone.querySelector(".player-name").textContent = player.name;
    clone.querySelector(".player-country").textContent = player.country;
    clone.querySelector(".player-number").textContent = player.number;

    // console.log(clone.querySelector(".player-number").textContent = player.name)
    return clone;
}

// Render Datat to HTML
players.forEach((player) => {
    const newPlayer = createPlayerCard(player);

    output.appendChild(newPlayer);
});
