// select button in DOM
const button = document.getElementById("load_button");
const output = document.getElementById("output");
const input_field = document.getElementById("inp")
// console.log(button, output)

function input_check(str) {
    let promise = new Promise((resolve, reject) => {
        if (str == "Hello") {
            setTimeout(() => {
                resolve("Content Loaded")
            }, 3000);
        } else {
            setTimeout(() => {
                reject("Content didn't Loaded")
            }, 1000);
        }
    });

    return promise;
}

// ADD function to button
button.addEventListener("click", () => {
    // console.log(output)

    output.textContent = "Loading...."

    input_check(input_field.value).then(result => {
        output.textContent = result;
        input_field.value = ""
    })
    .catch((error) => {
        output.textContent = error
        input_field.value = ""

    })
})


