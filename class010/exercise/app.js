
class BookClass {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  displayInfo() {
    return `${this.title} by ${this.author} | Available: ${this.available}`;
  }
}

BookClass.prototype.borrow = function () {
    if (this.available) {
        this.available = false;
        return `${this.title} is already borrowed.`;
    }
    this.available === true;
    return `${this.title} is available to borrow.`;
};

BookClass.prototype.returnBook = function () {
    this.available = true 
    return `${this.title} has been returned.`;
};

// BookClass.prototype.displayInfo = function () {
//     return `${this.title} by ${this.author} | Available: ${this.available}`;
// };


const book1 = new BookClass("Clean Code", "Robert C. Martin");
const book2 = new BookClass("Eloquent JavaScript", "Marijn Haverbeke", false);

// console.log(book1.returnBook())
// console.log(book2.returnBook())

const runDemoBtn = document.getElementById("run-demo-btn")
const output = document.getElementById("output")

runDemoBtn.addEventListener("click", () => {
  const book1 = new BookClass("Clean Code", "Robert C. Martin");
  const book2 = new BookClass("Eloquent JavaScript", "Marijn Haverbeke", false);

  output.innerHTML = `
    <p>${book1.displayInfo()}</p>
    <p>${book1.borrow()}</p>
    <p>${book1.returnBook()}</p>
    <hr>
    <p>${book2.displayInfo()}</p>
    <p>${book2.borrow()}</p>
    <p>${book2.returnBook()}</p>
  `;
});

// console.log(Object.getPrototypeOf(book1) === Book.prototype);
// console.log(book1.hasOwnProperty("title"));
// console.log(book2.hasOwnProperty("displayInfo"));

BookClass.prototype.toggleAvailability = function () {
  this.available = !this.available;
  return `${this.title} availability is now ${this.available}`;
};
// console.log(book1.toggleAvailability())
// console.log(book2.toggleAvailability())
// console.log(book1.displayInfo === book2.displayInfo);

BookClass.prototype.category = "General";
book1.category = "Programming"; // Change the category of book1 General from to Programming

console.log(book1.category);
console.log(book2.category);

//Add another constructor
function Author(name, country) {
  this.name = name;
  this.country = country;
}

Author.prototype.describe = function () {
  return `${this.name} is from ${this.country}`;
};

console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("category"));
console.log(book1.hasOwnProperty("displayInfo"));
console.log(book1.category);





/* 
What problem do prototypes solve? solve copying the same object
What is the difference between an own property and a prototype method? 
own property individual value or method stored directly on a single object 
prototype method - a shared function placed on a parent template. 
Where does JavaScript look if a method is not found directly on an object?
it looks on the prototype
Why is book1.displayInfo === book2.displayInfo useful evidence?
prototype methods
book1 & book2 share the same methods displayInfo()
What happened when you changed book1.category? 
the book Category of book 1 is updated to the name that is inputed
Why is it better to put shared behavior on the prototype instead of inside every object?
to reduce storage space and reuse shared behavior on prototype methods instean of in on every object.

*/
