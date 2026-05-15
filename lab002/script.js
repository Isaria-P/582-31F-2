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

            // //filter Post to user
            // const userPost = posts.filter((post) => {
            //     return post.userId === user.id
            // })
            const cardsHTML = firstFiveUsers.map((user) => {
            return `
                <div class="cards">
                    <h5>${user.name}</h5>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>City: ${user.address.city}</p>
                    <p>Company: ${user.company.name}</p>
                    <br>
                    <button class="load-post-btn" data-userid="${user.id}">
                        Load Posts
                    </button>
                    <div class="posts" id="posts-${user.id}"></div>
                </div>
            `;
        });

        cards.innerHTML = cardsHTML
        console.log(cardsHTML)
        // render users
        // const userHTML = firstFiveUsers.map((users) => {
        //     return `
        //     `
    })
    .catch((error) => {
        cards.innerHTML = `<p>Failed to load</p>`
    });
})


clearBtn.addEventListener("click", () => {
    statusArea.textContent = ""
})





// const firstThreePost = userPost.slice(0,3)
            // console.log(firstThreePost)

            // const postHTML = firstThreePost.map((post) => {
            //     return `
            //         <div class="post">

            //         <h3>${post.title}</h3>

            //         <p>${post.body}</p>

            //     </div>
            //     `;
            // }).join("")

            // cards

            // cards.innerHTML = `
            //     <h2>Name: ${user.name}</h2>
            //     <p>Email: ${user.email}</p>
            //     <p>Email: ${user.phone}</p>
            //     <p>Email: ${user.address.city}</p>
            //     <p>Email: ${user.company.name}</p>
            // `;

                // ${postHTML}

