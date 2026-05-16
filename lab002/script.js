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

loadUserBtn.addEventListener("click", () => {
    status.innerHTML = `<p>loading Cards....</p>`
    
    Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json()),

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
    ])    
 

        .then(([users, posts]) => {
            allPosts = posts;

            const firstFiveUsers = users.slice(0,5)

            // add settimeout
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
        cards.innerHTML = cardsHTML.join("");        // console.log(cardsHTML)
    })
    .catch((error) => {
        cards.innerHTML = `<p>Failed to load</p>`
    });
})

function loadPosts(userId) {
    
    const userPost = allPosts.slice(0, 3);
        // .filter((post) => post.userId === userId)
        
        
    const postHTML = userPost.map((post) => {
        return `
        <div class="post">
            <p>${post.title}</p>
            <p>${post.body}</p>
            </div>
        `;

    }).join("")

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

