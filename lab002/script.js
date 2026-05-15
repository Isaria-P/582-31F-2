const loadUserBtn = document.getElementById("load-user-btn")
const statusArea = document.getElementById("status")
const clearBtn = document.getElementById("clear-button");
const cards = document.getElementById("cardContainer")
// const cards = document.getElementById("cards")

console.log(cards)
// Users https://jsonplaceholder.typicode.com/users
// Posts https://jsonplaceholder.typicode.com/posts

loadUserBtn.addEventListener("click", () => {
    cards.innerHTML = `<p>loading Cards....</p>`
    
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()),

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
    ])    
   
        .then(([users, posts]) => {

            // console.log(users)
            const firstFiveUsers = users.slice(0,5)
            console.log(firstFiveUsers)

            const user = users[0]
            // console.log(user)

            //filter Post to user
            const userPost = posts.filter((post) => {
                return post.userId === user.id
            })

            const firstThreePost = userPost.slice(0,3)
            console.log(firstThreePost)

            const postHTML = firstThreePost.map((post) => {
                return `
                    <div class="post">

                    <h3>${post.title}</h3>

                    <p>${post.body}</p>

                </div>
                `;
            }).join("")

            cards.innerHTML = `
                <h2>Name: ${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Email: ${user.phone}</p>
                <p>Email: ${user.address.city}</p>
                <p>Email: ${user.company.name}</p>

                ${postHTML}

            `;

        // render users

        // const userHTML = firstFiveUsers.map((users) => {
        //     return `

        //     `
        // })
        // console.log(userPost)


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
    .catch((error) => {
        cards.innerHTML = `<p>Failed to load</p>`
    });
    
    
         

})


clearBtn.addEventListener("click", () => {
    statusArea.textContent = ""
})