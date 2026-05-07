// let's load all DOM
const btn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");


btn.addEventListener("click", () => {
    status.textContent = "Loading post...";
    output.innerHTML = "";

    const userFetch = fetch("https://jsonplaceholder.typicode.com/users/7");

    
        setTimeout(() => {
            userFetch    
                .then((response) => {
                    // console.log(response.json())
                    return response.json()
        
                })
                .then((data) => {
                    console.log(data.body)
                    for (let i = 0; i <= 5; i++) {

                        output.textContent = `${data[i].title}`
                    }
                    
                })
        }, 2000);
})


