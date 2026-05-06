// create a function that checks password
// takes password as a parameter
// it returns a Promise
// It compares the entered password with your password
// based on that has a reject or resolve (with a string value)

// call the function with 3 different passwords
//      all should have a .then() and .catch()

// bonus: wrap the resolve in a setTimeout of 2 seconds

const correctPassword = "r2391";

function checksPassword(enterPassword) {
    const promise = new Promise((resolve, reject) => {
        if (correctPassword == enterPassword) {
            setTimeout(() => {
                resolve("Login Successful");
            }, 1000);
        } else {
            reject("Login unsucessful")
        }
    });
    return promise;
}

checksPassword("r2391")
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });