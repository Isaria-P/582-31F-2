const loadUserBtn = document.getElementById("load-user-btn")
const clearBtn = document.getElementById("clear-button")
const cards = document.getElementById("cardContainer")
const status = document.getElementById("status")

// const loadPostBtn = document.querySelectorAll(".load-Post-btn")
// console.log(loadPostBtn)

let allPosts = [];

function setSatus(message, type) {
    status.textContent = message;
    status.className = type;
}

function clearDashBoard() {
    cards.innerHTML = "";
    setSatus("")
}

function loadUsers() {
    setSatus("Loading users...", "loading")

    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()),

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
    ])
    .then(([users, posts]) => {
            
        allPosts = posts;
        cards.innerHTML = "";
        const firstFiveUsers = users.slice(0,5)

        // const cardsHTML =
        firstFiveUsers.map((user) => {
            const userCard = renderUserCard(user);
            cards.appendChild(userCard);
        }); 

        setSatus("User Loaded Successfully", "success");
    }) 
    .catch((error) => {
        setSatus("Failed to Load Users", "error");
        console.log(error)
    })
}

function renderUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
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
    `;

    const loadPostBtn = card.querySelector(".load-post-btn");
    const postsContainer = card.querySelector(".posts");
    
    loadUserBtn.addEventListener("click", () => { 
        loadPostForUser(user, postsContainer);
    });
    return card;
}

/* Load Post. */
function loadPostsForUser(user, postsContainer) {
    setSatus(`Loading Post for ${user.name}....`, "loading");

    /* First 3 post only */
    const firstThreePost = allPosts.slice(0, 3);
    renderUserCard(firstThreePost, postsContainer);

    setSatus(`Posts loaded for ${user.name}`, "success");
}

/* Render Posts. */
function renderPosts(posts, container) {
    const postHTML = posts.map((post) => {
        return `
            <div class="post">
                <p>${post.title}</p>
                <p>${post.body}</p>
            </div>
        `;
    }).join("");
    container.innerHTML = postHTML;
    
}

// loadUserBtn.addEventListener("click", () => {
    // status.innerHTML = `<p>loading Cards....</p>`
    
      
 

        // .then(([users, posts]) => {
            
        //     allPosts = posts;
        //     cards.innerHTML = "";
        //     const firstFiveUsers = users.slice(0,5)

        //     // const cardsHTML =
        //     firstFiveUsers.map((user) => {
        //         const userCard = renderUserCard(user);
        //         cards.appendChild(userCard);
        //     });

            // return `
            //     <div class="cards">
            // //         <h5>${user.name}</h5>
            // //         <p>Email: ${user.email}</p>
            // //         <p>Phone: ${user.phone}</p>
            // //         <p>City: ${user.address.city}</p>
            // //         <p>Company: ${user.company.name}</p>
            // //         <br>
            // //         <button class="load-post-btn" data-userid="${user.id}">
            // //             Load Posts
            // //         </button>
            // //         <div class="posts" id="posts-${user.id}"></div>
            // //     </div>
            // // `;
        // });
        // cards.innerHTML = cardsHTML.join("");        // console.log(cardsHTML)
    // })
    // .catch((error) => {
    //     cards.innerHTML = `<p>Failed to load</p>`
    // });
// })

function loadPosts(userId) {
    
    //const userPost = allPosts.slice(0, 3);
        // .filter((post) => post.userId === userId)
        
    // const postHTML = userPost.map((post) => {
    //     return `
    //     <div class="post">
    //         <p>${post.title}</p>
    //         <p>${post.body}</p>
    //         </div>
    //     `;

    // }).join("")

    document.getElementById(`posts-${userId}`).innerHTML = postHTML;
}

// button click 
cards.addEventListener("click", (e) => {
    if (e.target.classList.contains("load-post-btn")) {
        const userId = Number(e.target.dataset.userid);
        loadPosts(userId)
    }
});





clearBtn.addEventListener("click", () => {
    status.textContent = ""
})



// function 




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

