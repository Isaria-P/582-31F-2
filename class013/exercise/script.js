// 1.
// Create a Book class with:
//  title
//  pages
//  getter summary
//  getter/setter for pages
//  static method isValidPageCount()
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    //  getter summary
    get summary() {
        return `Book Summary:${this._title},${this.__pages} `
    }

    //  getter/setter for pages
    set pages(value) {
        if (value < 0) {
            throw new Error("pages cannot be below 0");
        }
        this.__pages = value
    }

    get pages(){
        return this.__pages;
    }

}
const book1 = new Book("MidNight", 2)
console.log(book1.pages)
book1.pages = 70;
console.log(book1.pages)

// 2.
// Create a BankAccount class with:
//  owner
//  balance
//  getter for balance
//  setter that rejects negative balances
//  static method isValidAmount()
class BankAccount{
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    //  getter for balance
    get balance() {
        return this.__balance;
    }

    

}


// 3.
// Create a Course class with:
//  title
//  credits
//  getter label
//  getter/setter for credits
//  static property for schoolName

// 4.
// Create a class called Movie.

// Code the following:
//  constructor with title and rating
//  getter description that returns something like:
//  "Inception has a rating of 9"
//  getter/setter for rating
//  setter must reject values outside 0–10
//  static method isValidRating(value)