const loadPostbtn = document.getElementById("load-post");
const statusP = document.getElementById("status");
const postContent = document.getElementById("post-content");

// console.log(loadPostbtn, statusP, postBody)

// addEventListener for btn
loadPostbtn.addEventListener("click", () => {
    statusP.textContent = "Loading...."
    
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
        if (!response) {
            // console.log(response)
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json();
    })
    .then((post) => {
        // postTitle.textContent = 
        postContent.innerHTML = `
            <h2>Profile Information</h2>
            <p>Title: ${post.title}</p>
            <p>Email: ${post.body}</p>
    
        `;
        // console.log(post)
        statusP.textContent = "User loaded successfully"
    })
    .catch((error) => {
        statusP.textContent = `Failed to load Post: ${error.message}`;
    })

})
