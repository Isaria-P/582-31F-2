const loadUser = document.getElementById("load-user")
const statusMessage = document.getElementById("status")
// console.log(statusBTN)


// 2. Fetch one user
fetch("https://jsonplaceholder.typicode.com/users/1")

    .then((response) => {
        // console.log(response)
        return response.json()
    })
    .then((user) => {
        // const parseuser = JSON.Parse(user)
        console.log(typeof user)
        loadUser.addEventListener("click", () => {
            statusMessage.textContent =  JSON.stringify(user, null, 2)
        })
        return users
    })
    .catch((error) => {
        statusMessage.textContent = "User not found"
    })