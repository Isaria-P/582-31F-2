/* Part 1 — Reading Notes
1. What problem are prototypes solving?
Suppose you create many similar objects. */

const user1 = {
  name: "Alice",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};

const user2 = {
  name: "Mina",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};

/* This works, but each object has its own copy of greet().

If you create many similar objects, that becomes repetitive.

A better approach is:

store each object’s own data on the object
store shared behavior in one shared place
That shared place is the prototype.

2. What is a prototype?
A prototype is another object that JavaScript can check when a property or method is not found directly on the object itself.

Very simple model:

JavaScript checks the object
if the property is not there, it checks the prototype
This allows many objects to share the same method.

3. Why is this useful?
Prototypes help us:

avoid repeating methods
share behavior
reduce duplication
understand how JavaScript classes work underneath
4. Main design idea
Usually:

object-specific data belongs on the object
shared methods belong on the prototype
Examples of object-specific data:

name
title
price
available
Examples of shared behavior:

greet()
displayInfo()
borrow()
returnBook() */

// Part 2 — Small Examples
// Example A — duplicated methods on each object

const student1 = {
  name: "Alice",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

const student2 = {
  name: "Karim",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(student1.introduce());
console.log(student2.introduce());
// This works, but introduce() is duplicated.

// Example B — constructor function
function Student(name) {
  this.name = name;
}

const s1 = new Student("Alice");
const s2 = new Student("Karim");

console.log(s1.name);
console.log(s2.name);
// This creates objects more systematically.

// Example C — shared method through the prototype
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

// const s1 = new Student("Alice");
// const s2 = new Student("Karim");

console.log(s1.introduce());
console.log(s2.introduce());
// Now both objects use the same shared method from Student.prototype.

// Example D — inspect the relationship
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

// const s1 = new Student("Alice");

console.log(Object.getPrototypeOf(s1) === Student.prototype);
// This should output:
// true

// Part 3 — Important Concept: Property Lookup
// When you write:

/* s1.introduce();
JavaScript looks in this order:

does s1 itself have introduce?
if not, check s1’s prototype
if found there, use it
This is called prototype lookup. */

// Example: own property vs prototype method
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.displayInfo = function () {
  return `${this.name} costs $${this.price}`;
};

const p1 = new Product("Keyboard", 49.99);

console.log(p1.name);
console.log(p1.displayInfo());
/* Here:
name is an own property
displayInfo is found on the prototype */


// blank object
// let person = {}

// add to objects
// person.name = "Kiro";
// person.age = 38;

// person.eat = function() {
//   console.log("Person is eating")
// }

const personMethods = {
  eat() {
    console.log("Person is eating")
  },

  sleep() {
    console.log("Person is eating")
  }
}

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.eat = personMethods.eat
  person.sleep = personMethods.sleep()

  return person;

}

const messi = Person("Kairo", 38)
console.log(Person.eat)
console.log(messi)


