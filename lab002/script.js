const loadUserBtn = document.getElementById("load-user-btn")
const statusArea = document.getElementById("status")
const clearBtn = document.getElementById("clear-button");
const cardContainer = document.getElementById("cardContainer")
const cards = document.querySelectorAll("div.cards")

console.log(cards, statusArea)
// Users https://jsonplaceholder.typicode.com/users

// Posts https://jsonplaceholder.typicode.com/posts

loadUserBtn.addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const parseUsers = response.json()
            // console.log(`ParsedUser: ${parseUsers}`)
            return parseUsers
        })
        .then((users) => {
            const firstFiveUders = users.slice(0,5)
            // console.log(firstFiveUders)

            // Loading message
            cards.forEach(card => {
                card.innerHTML = `
                    <p>loading Cards....</p>
                `
                return card
            })
            .then((user))
            
        })

})


clearBtn.addEventListener("click", () => {
    statusArea.textContent = ""
})