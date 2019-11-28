let current_id = 0;

class Account {
    #id = current_id++;
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    get id() {
        return this.#id;
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
        if (isNaN(amount) || amount < 0) {
            return "Inavlid amount!"
        }
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount < 0){
            return "Invalid input!"
        }
        else if (amount < this.balance) {
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
