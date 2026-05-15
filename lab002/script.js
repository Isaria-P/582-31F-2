const loadUserBtn = document.getElementById("load-user-btn")
const statusArea = document.getElementById("status")
const clearBtn = document.getElementById("clear-button");
const cardContainer = document.getElementById("cardContainer")
const cards = document.querySelectorAll("div.cards")

console.log(cards, statusArea)
// Users https://jsonplaceholder.typicode.com/users

// Posts https://jsonplaceholder.typicode.com/posts

loadUserBtn.addEventListener("click", () => {
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()),

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())

    ])

    .then(([users, posts]) => {

        const firstFiveUders = users.slice(0,5)
        // console.log(firstFiveUders)

        const firstUser = users[0,5]
        console.log(firstUser)

        //filter Post to user
        const userPost = posts.filter((post) => {
            return post.userId === users.id
        })
        console.log(userPost)


        // Loading message
        // cards.forEach(card => {

        //         // for Post
        //         // card.innerHTML = `
        //         //     <p>loading Cards....</p>
        //         // `
        //         // return card
        // })
        // return cards
        
        // })
        // .then((post) => {
        //     console.log(post)
        //     const firstThreePost = post.slice(0,4)
        //     console.log(firstThreePost)
        // })
    })
    
         

})


clearBtn.addEventListener("click", () => {
    statusArea.textContent = ""
})