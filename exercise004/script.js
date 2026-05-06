// fetch from https://jsonplaceholder.typicode.com/users

// update the DOM with the first 5 users as li elements.

// fetch("https://jsonplaceholder.typicode.com/users/5")

// load
const btn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");





const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users");
console.log(fetchRequest)

fetchRequest
    .then((result) => {
        console.log("Status: ", result.name)
    })

