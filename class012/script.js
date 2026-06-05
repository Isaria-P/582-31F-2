// Example 1
// try {
//   const result = JSON.parse('{"name":"Alice"}');
//   console.log(result.name);
// } catch (error) {
//   console.log("Something went wrong");
//   console.log(error.message);
// }

// Example 2
// try {
//   const result = JSON.parse("{ name: Alice }");  
//   // correct syntax ('{ "name":"Alice"}')
//   console.log(result.name);
// } catch (error) {
//   console.log("JSON parsing failed");
//   console.log(error.message);
// }

// example 3
// try {
//   console.log("Trying something...");
//   throw new Error("Example failure");
// } catch (error) {
//   console.log("Caught:", error.message);
// } finally {
//   console.log("This always runs");
// }

// Example A — input validation
// function setAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   }
//   return `Age set to ${age}`;
// }
// try {
//   console.log(setAge(5));
// } catch (error) {
//   console.log(error.message);
// }

// Example B — empty name validation
// function greetUser(name) {
//     if (name.trim() === "") {
//         throw new Error("Name cannot be empaty");
//     }
//     return `Hello, ${name}`;
// }
// try {
//     console.log(greetUser("izza"));
// } catch (error) {
//     console.log(error.message);
// }


// Fetch with manual error handling
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user.name);
//   })
//   .catch((error) => {
//     console.log("Failed to load user");
//     console.log(error.message);
//   });

const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

// console.log(loadPostBtn)
// // /*



loadPostBtn.addEventListener("click", () => {
  status.textContent = "Loading post...";
  output.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/4")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      output.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      status.textContent = "Post loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load post: ${error.message}`;
    });
    
});

const postIdInput = document.getElementById("post-id-input")
const loadPostBtn1 = document.getElementById("load-post-btn1")
const status1 = document.getElementById("status1");
const clearBtn = document.getElementById("clear-post-btn");
const loadCommentBtn = document.getElementById("load-comment-btn");

// */
function validatePostId(id) {
  if (typeof id !== "number" || id <= 0 ) {
    throw new Error("Post ID must be a positive number")
  }
}
try {
  validatePostId(-1);
} catch (error) {
  console.log(error.message)
} 
// console.log("Hiiiii")

// console.log(loadPostBtn1)
loadPostBtn1.addEventListener("click", () => {
  console.log("Hiiiii")
  let postId;

  try {
    postId = Number(postIdInput.value);

    // validate the input
    validatePostId(postId) 

    status.textContent = "Loading post from input...";
    output.innerHTML = ""; 
    postIdInput.innerHTML = "";
  } catch (error) {
    status1.textContent = error.message;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error ("Post Not found.")
      }
      return response.json();
    })
    .then((post) => {
      status.textContent = "Post loaded Successfully.";
      output.innerHTML = `
        <h3>Post ID: ${post.id}</h3>
        <p>${post.title}</p>
      `;
    })
    .catch((error) => {
    status1.textContent = error.message;
    })
    .finally(() => {
      console.log("Request finished");
    });

})

clearBtn.addEventListener("click", () => {
  output.innerHTML = "";
  status.textContent = "Click the button to load a post";
  // status1.textContent = "";
})
 
// console.log(fetch("https://jsonplaceholder.typicode.com/users/"))  
//   .then(res => res.json())
//   .then(data => console.log(data))

/*
Part 8 — Reflection Questions
Answer these briefly.

What is the purpose of try/catch?
Try-> code that may fail
catch-> code that runs if an error happens
What does throw new Error(...) do?
if an action fails throw new Error that will detail the pasific error

Why do we check response.ok in fetch code?
fetch() does not aleays throws an error so we use response.ok
to out own error if its needed.

What is the difference between sync error handling and Promise .catch()?
where the error occurs 

What is finally useful for?
code that will always run it's use for cleanup and not main logic.
*/

// Challenge 2 — Load comments instead of posts
const badJson = '{"Name": "Izzy", "studentNumber": "4567"}';

try {
  JSON.parse("{ bad json }");
} catch (error) {
  console.log(error.message);
}

// Continue Here
// Challenge 2 — Load comments instead of posts

loadCommentBtn.addEventListener("click", () => {
  status.textContent = "Loading Comment";
  loadCommentBtn.disabled = true;

  fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((comment) => {
      status.textContent = "Post loaded Successfully.";
      output.innerHTML = `
        <h2>${comment.id}</h2>
        <p>${comment.name}</p>
        <p>${comment.body}</p>
      `
    })
    .catch((error) => {
      status.textContent = error.message;
    })
    .finally(() => {
      loadCommentBtn.disabled = false;
      status.textContent = "Comment request finished";
    })
})
