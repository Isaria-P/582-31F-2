// Promises
// It allows you to associate handlers with an asynchronous action's
// eventual success value or failure reason

/** A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

//last week callback functions

// synchronous code - one line after the other
// console.log("hello")
// console.log("Bye-----------")


// asynchronous code - middle pops up after everthing loads
// console.log("Start");
// setTimeout(() => { 
//     console.log("Middle");
// }, 1000); // this line is delayed
// console.log("End")


// promisses
// when programs become complex we need a structure

// A promise is pending
// it will pass or fail
// base on pass or fail we do this or that depending
 
// const promise = Promise.resolve("Hello from a resolved promise")
// console.log(promise)


// const failPromise = Promise.reject("something went wrong")
// console.log(failPromise);

// promise object
const value = Promise.resolve(42)
console.log(value)

//
// basic resolve Promises:
Promise.resolve("Heloo World").then(result => {
    console.log(result)
})

//basic Reject Promise
Promise.reject("Failed to load")
    .catch((error) => {
        console.log(error);
})


//both sucess and fuilure flow
const success = true

const myPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve("operation Successfull");
    } else {
        reject("Operation Failed.")
    }
})

myPromise
    .then(result => {
        console.log("--------")
        console.log(result)
    })
    .catch((error) => {
        console.log("--------")
    console.log(error)
 })

 // Important 
/** A Promise often wrappes asynchronous work,
 * such as a timer or a HTTP request, etc... */

// Delayed succes or failure

const success2 = false;
// a compound of promise with a setTimeout inside of it.
const myPromise2 = new Promise((resolve, reject) => {
    if (success2) {
        setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
//   } else {
//     setTimeout(() => {
//         reject("Data did not Loaded");
//     }, 1000);
  }
})


// uncaugth --> didn't catch! (doesn't have a .catch())
myPromise2.then((result) => {
    console.log(result);
})
.catch((error) => {
    // catch is useful to handel errors
    console.log(error);
});

let number = 10
let number2 = 15

// a promise inside of a function
function checkNumber(newNumber) {
    const promise = new Promise((resolve, reject) => {
        if (newNumber > 10 ){
            resolve("Number is greater thn 10")
        } else {
            reject("Number is 10 or less than 10")
        }
    });
    return promise;
}

checkNumber(number)
    .then((result) => {
        console.log(result);
    }) 
    .catch((error) => {
        console.log(error);
    });

checkNumber(number2).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})
