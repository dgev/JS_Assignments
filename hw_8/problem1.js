class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender;
    }


    set name(value) {
        let validName = /^[a-zA-Z]+$/;
        if (!validName.test(value)) {
            return 'Please write a valid name!';
        }
        this._name = value;
    }

    set email(value) {
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!validEmail.test(value)) {
            return 'Email is not valid!';
        }
        this._email = value;
    }

    set gender(value) {
        if (value.toUpperCase() === "MALE" || value.toUpperCase() === "FEMALE") {
            this._gender = value;
        } else {
            return 'Please write male or female!';
        }
    }

    toString() {
        return `{
            name: ${this.name},
            email: ${this.email},
            gender: ${this.gender}
        }`;

    }

}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }

    set title(value) {
        let validTitle = /^[a-zA-Z]+$/;
        if (!validTitle.test(value)) {
            return 'Please write a valid title!';
        }
        this._title = value;
    }

    set author(value) {
        if (value instanceof Author) {
            this._author = value;
        } else {
            return 'Invalid author!';

        }
    }

    set price(value) {
        let validPrice = /^\d+(?:[.,]\d+)*$/;
        if (!validPrice.test(value)) {
            return 'Invalid price!';
        }
        this._price = value;
    }

    set quantity(value) {
        if (Number.isInteger(value)) {
            this._quantity = value;
        } else {
            return 'Invalid amount!';
        }
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        return `{ 
    title: ${this.title},
    author: ${this.author.toString()},
    price: ${this.price},
    quantity: ${this.quantity} 
}`;
    }
}


let author = new Author("kh", "jfl@gmail.com", "female");
author.name = "new";
// console.log(author.name);
let book = new Book("df", author, 12, 11);

// let profit = book.getProfit();
// console.log(profit);
// console.log(book.toString());

// let key = book.key();

