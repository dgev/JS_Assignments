class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }

    get age() {
        return this._age;
    }

    set firstName(value) {
        let validName = /^[a-zA-Z]+$/;
        if (!validName.test(value)) {
            return 'Please write a valid name!';
        }
        this._firstName = value;
    }

    set lastName(value) {
        let validName = /^[a-zA-Z]+$/;
        if (!validName.test(value)) {
            return 'Please write a valid name!';
        }
        this._lastName = value;
    }

    set gender(value) {
        if (value.toUpperCase() === "MALE" || value.toUpperCase() === "FEMALE") {
            this._gender = value;
        } else {
            return 'Please write male or female!';
        }
    }

    set age(value) {
        let validAge = /^[1-9]?[0-9]{1}$|^100$/;
        if (validAge.test(value)) {
            this._age = value;
        } else {
            return 'Invalid age!';
        }
    }

    toString() {
        return `{
            first name: ${this.firstName},
            last name: ${this.lastName},
            gender: ${this.gender},
            age: ${this.age}
        }`;

    }
}

class Student extends Person {
    _programs = ["Mathematics", "English", "Marketing", "Human Rights", "Genocide Studies",
        "Environmetnal Sciences", "Archaeology", "Law", "History"
    ]

    _exams = [];
    _passedCourses = false;
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }

    get program() {
        return this._program;
    }

    get year() {
        return this._year;
    }

    get fee() {
        return this._fee;
    }

    set program(value) {
        if (Array.isArray(value) && value.every(element => _programs.includes(element))) {
            this._program = value;
        }
    }

    set year() {

    }

    set fee() {

    }

    passExam(program, grade) {

        // sif (grade >= 50) 
    }

    toString() {
        return `{
            personal info: ${super.toString()};
            program: ${this.program},
            age: ${this.age},
            year: ${this.year},
            fee: ${this.fee}

        }`;
    }
}

class Teacher extends Person {
    _programs = ["Mathematics", "English", "Marketing", "Human Rights", "Genocide Studies",
        "Environmetnal Sciences", "Archaeology", "Law", "History"
    ]

    constructor(firstName, lastName, gender, age, program, salary) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.salary = salary;
    }

    get program() {
        return this._program;
    }

    get salary() {
        return this._salary;
    }

    set program(value) {
        if (_programs.includes(value)) {
            this._program = value;
        } else {
            console.log('Invalid input!');

        }

    }

    set salary(value) {

    }

    toString() {
        return `{
            personal info: ${super.toString()};
            program: ${this.program},
            salary: ${this.salary}

        }`;
    }
}