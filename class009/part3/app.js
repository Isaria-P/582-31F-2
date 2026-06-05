import { fetchUsers } from "./api.js";
import { renderUsers } from "./ui.js";
import { clearUsers } from "./ui.js"

const loadUsersBtn = document.getElementById("load-users-btn");
const status = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const clearUsersBtn = document.getElementById("clear-btn")

clearUsersBtn.addEventListener("click", () => {
    status.textContent = "Clear users";
    
    fetchUsers()
        .then((users) => {
            clearUsers(usersContainer)
            status.textContent = `Cleared all users`
        })
        .catch((error) => {
            status.textContent = `Failed to load users: ${error.message}`;
        });
     
})

loadUsersBtn.addEventListener("click", () => {
  status.textContent = "Loading users...";

  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      status.textContent = "Users loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load users: ${error.message}`;
    });
});
