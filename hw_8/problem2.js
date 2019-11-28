class Account {
    _current_id = 0;
    constructor(name, balance) {
        this._current_id++;
        this.name = name;
        this.balance = balance;
    }

    get id() {
        return this._current_id;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set name(value) {
        let validName = /^[a-zA-Z]+$/;
        if (!validName.test(value)) {
            return 'Please write a valid name!';
        }
        this._name = value;
    }

    set balance(value) {
        if (isNaN(value)) {
            return "Invalid input!"
        }
        this._balance = value;
    }

    credit(amount) {
        if (isNaN(amount)) {
            return "Inavlid amount!"
        }
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            return true;
        }
        return 'Amount exceeded balance!';
    }

    transferTo(anotherAccount, amount) {
        let isValid = this.debit(amount);
        if (isValid === true && anotherAccount instanceof Account) {
            anotherAccount.credit(amount);
            return this.balance;
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return (accountFirst instanceof Account && accountSecond instanceof Account &&
            accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance);
    }

    toString() {
        return `{
            id: ${this.id},
            name: ${this.name},
            balance: ${this.balance}
        }`
    }
}

let a1 = new Account("ann", 60);
let a2 = new Account('john', 0);
// console.log(a1.id);
