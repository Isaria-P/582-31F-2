
// Parent Constructor
function Animal(name) {
    this.name = name;
}

class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `This animal is named ${this.name}`;
    }
}
Animal.prototype.describe = function () {
    return `This animal is named ${this.name}`;
}

// Challenge 1 - Override an inherited method
Dog.prototype.describe = function () {
  return `${this.name} is a ${this.breed}`;
};


// Child Constructor: Dog 
function Dog(name, breed) {
    Animal.call(this, name) ;
    this.breed = breed;
}

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks`;
    }
}

// connect the prototype
Dog.prototype = Object.create(AnimalClass.prototype);
Dog.prototype.constructor = Dog;
// add child-specific method
Dog.prototype.bark = function () {
    return `${this.name} barks loudly`;
};

class Bird extends AnimalClass {
    constructor(name, Taxonomy) {
        super(name);
        this.Taxonomy = Taxonomy;
    }
}

// test object
const dog1 = new Dog("Buddy", "Golden Retriever");
const bird1 = new Bird("Didi", "song bird")
console.log(bird1)

console.log(dog1.bark())
// console.log(dog1.describe())
// (name, color)
class CatClass extends AnimalClass {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        return `${this.name} meow softly.`;
    }
}

// It must inherit describe() from Animal.
// Cat.prototype = Object.create(AnimalClass.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.meow = function () {
//     return `${this.name} meow softly.`;
// };
const cat1 = new CatClass("Miu miu", "red");
console.log(cat1)
console.log(cat1.describe())
console.log(cat1.meow())

// Cat.prototype.describe = function () {
//     return `This Cat is named ${this.name} and color is ${this.color}`;
// }

// Vehicle.prototype.describe = function () {
//     return `Vehicle Brand: ${this.brand}`;
// };
// child Constructor
class VehicleClass {
    constructor(name, color, brand) {
        this.name = name;
        this.color = color;
        this.brand = brand;
    }

    describe() {
        return `Vehicle brand: ${this.brand}`;
    }
}

// class VehicleClass extends CarClass {
//     constructor(name, color, brand){
//         super(name, color)
//         this.brand = brand;
//     }
// }

class CarClass extends VehicleClass{
    constructor(brand, model, running = false) {
        super(brand)
        this.model = model;
        this.running = running;
    }   

    start() {
        this.running = true;
        return `${this.model} is running`;
    }
    stop() {
        this.running = false;
        return `${this.model} has stopped`;
    }
    showModel() {
        return `Model: ${this.model}`;
    }
}
// setup inheritance
// CarClass.prototype = Object.create(VehicleClass.prototype);
// CarClass.prototype.constructor = CarClass;

// Add child-specific methods
// CarClass.prototype.start = function () {
//     this.running = true;
//     return `${this.model} is running`;
// }

// CarClass.prototype.stop = function () {
//     this.running = false;
//     return `${this.model} has stopped`;
// }

// CarClass.prototype.showModel = function () {
//     return `Model: ${this.model}`;
// }

//Child Vehicle
class ElectricCar extends CarClass {
    constructor(brand, model, batteryLevel)  {
        super(brand, model);
        this.batteryLevel = batteryLevel;
    }
}

class Truck extends CarClass {
    constructor(brand, model, ram) {
        super(brand, model);
        this.ram = ram;
    }
}

const elec1 = new CarClass("Jeep", "M69", "300k")
console.log(elec1)
// function ElectricCar(brand, model, batteryLevel) {
//     CarClass.call(this, brand, model);
//     this.batteryLevel = batteryLevel;
// }

// ElectricCar.prototype = Object.create(CarClass.prototype);
// ElectricCar.prototype.constructor = ElectricCar;

    //() {
    // VehicleClass.call(this, brand);
    // this.model = model;
    // this.running = running;
// }
////////////////////////////////////////////////////////////////here
/*
Task 3 — Show both inheritance chains in the page
Update your browser output so it displays:

one Dog
one Cat
one Car
one ElectricCar
Show:

inherited behavior
child-specific behavior
*/

// Display results on the page:
const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
    const car1 = new CarClass("Toyota", "Corolla");
    const car2 = new CarClass("Honda", "Civic", true);
    const cat1 = new CatClass("Miu miu", "red");
    const evCar1 = new ElectricCar("Xiaomi", "SU7", "70%")

    console.log(car1.stop())
    console.log(car1.describe())
    output.innerHTML = `
        <p>${car1.describe()}</p>
        <p>${car1.showModel()}</p>
        <p>${car1.start()}</p>
        <hr>
        <hr>
        <p>${car2.describe()}</p>
        <p>${car2.showModel()}</p>
        <p>${car2.start()}</p>
        <hr>
        <hr>
        <p>${evCar1.describe()}</p>
        <p>${evCar1.showModel()}</p>
        <p>${evCar1.start()}</p>
        <hr>
        <hr>
        <p>${cat1.describe()}</p>
        <p>${cat1.meow()}</p>
        
    `;
})

console.log(Object.getPrototypeOf(DogClass.prototype) === AnimalClass.prototype);
console.log(Object.getPrototypeOf(CarClass.prototype) === VehicleClass.prototype);
console.log(Object.getPrototypeOf(ElectricCar.prototype) === CarClass.prototype);

/* 
Part 8 — Reflection Questions
Answer these briefly.

What is inheritance?
inheritance allows one object or class to build on another

Why do we use Animal.call(this, name) or Vehicle.call(this, brand) in child constructors?
this  the parent constructor Animal/Vehicle in the context of the new object.

Why do we use Object.create(...)?
use Object.create() to connect prototypes

Why do we reset the constructor property?
overwriting the prototype object destroys the original reference to the constructor function

What is the difference between inherited methods and child-specific methods?
Behaviors defined in a parent class that a child class automatically receives. Child-specific methods are unique, specialized behaviors defined only within the child class itself, which the parent class does not posses

How does class ... extends ... relate to prototypes?
builds and links objects together through the prototype chain under the hood
*/

/*
what is similar?
both allows objects to inherit properties by child and methods from parent.
what is easier to read?
class inheritance has a more simple syntaxs
how both still rely on prototypes
Constructor-function inheritance requires manually linking prototypes 
and class inheritance  rely on JavaScript's prototype system to create inheritance chains.

*/


