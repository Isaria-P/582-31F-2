const loadUser = document.getElementById("load-user")
const userCard = document.getElementById("user-card")
const title = document.getElementById("title")
const status = document.getElementById("status")
const p = document.getElementById("discription")
// console.log(statusBTN)

let userData = [];

// 2. Fetch one user
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        return response.json()
    })
    .then((user) => {
        console.log(user.name)
        userData = user;        
        return JSON.stringify(user, null, 2)
    })
    .catch((error) => {
        status.textContent = "User not found"
    })


loadUser.addEventListener("click", () => {
    // userCard.textContent =  JSON.stringify(userData, null, 2)
    userCard.textContent = `
        Name: ${userData.name}, 
        Email: ${userData.email},
        Phone: ${userData.Phone},
        City: ${userData.city}`
    
    title.textContent = userData.name
    status.textContent = "Successfully Loaded"
    p.textContent = userData.username
});
    