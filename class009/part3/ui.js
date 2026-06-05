export function clearUsers(container) {
  container.innerHTML = "";
}

export function renderUsers(users, container) {
  container.innerHTML = "";

  users.slice(0, 5).forEach((user) => {
    const article = document.createElement("article");
    const card = createUserCard(user)
    article.appendChild(card)
    container.appendChild(article);
  });
  return users
}

export function createUserCard(user) {
  // return a DOM element
    
    const card = document.createElement("div");
    card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
    `;
  return card
}



/*

Students should answer these briefly:

What is the purpose of type="module" in HTML? to discribe the purpouse of the script
Why is it useful to separate fetchUsers() into api.js? to organize code
Why is it useful to separate rendering into ui.js? so we can separate the responsability of rendering
What would happen if everything stayed in one file as the project grows? the file will become hard to read and maintain.
What is the difference between exporting and importing? exporting is ending 
Exporting a function makes a function available outside of the file
Importing brings an exported function into a new file
*/