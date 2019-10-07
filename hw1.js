//Problem 1

function oddOrEven(num) {
    console.log((num % 2 === 0 ? "even" : "odd"));
}


//Problem 2

function isDivisible(num1, num2) {

    console.log((num1 % num2 === 0 || num2 % num1 === 0) ? 1 : 0);
}


//Problem 3

function sum(n) {
    console.log(n + (+(n + '' + n)) + (+(n + '' + n + n)));
}


//Problem 4

function lastDigit(n) {
    console.log((n % 10 !== 0 && n > 10) ? n % 10 + '' + (n - n % 10) / 10 : n);
}


//Problem 5

function average(num1, num2, num3, num4, num5) {
    console.log((num1 + num2 + num3 + num4 + num5) / 5);
}


//Problem 6

function sort(num1, num2, num3) {
    if (num1<num2) {
        if (num2 < num3) {
            console.log(num1 + ', ' + num2 + ', ' + num3);
        }
        else if (num1<num3) {
            console.log(num1 + ', ' + num3 + ', ' + num2);
        }
        else{
            console.log(num3 + ', ' + num1 + ', ' + num2);
        }
    }
    else if (num2 < num1) {
        if (num1 < num3) {
            console.log(num2 + ', ' + num1 + ', ' + num3);
        }
        else if (num2 > num3) {
            console.log(num3 + ', ' + num2 + ', ' + num1);
        }
        else{
            console.log(num2 + ', ' + num3 + ', ' + num1);
        }
    }
}



//Problem 7

function sign(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log('unsigned');
    } else {
        let count = 0;
        if (num1 < 0)
            count++;
        if (num2 < 0)
            count++;
        if (num3 < 0)
            count++;
        if (count % 2 == 0) {
            console.log('+');
        } else {
            console.log('-');
        }
    }
}


//Problem 8

function quadratic(a, b, c) {
    if (a === 0) {
        console.log('Enter valid constants');
    } else {
        let discriminant = Math.pow(b, 2) - 4 * a * c;
        if (discriminant < 0) {
            console.log('Solution does not exist');
        } else if (discriminant === 0) {
            console.log('Solution is ' + (-1 * b) / (2 * a));
        } else {
            console.log('Solutions are ' + (-1 * b - Math.sqrt(discriminant)) / (2 * a) + ' and ' + (-1 * b + Math.sqrt(discriminant)) / (2 * a));
        }
    }
}



//Problem 9

var n = +prompt();

var i = 0;
var j = 0;

if(n % 2 === 0 && !Math.floor(n/10)){
    i+=1;
}

if(n % 3 === 0 && n % 10 === 1) {
    j += 1;
}

//Problem 10

function contains(digit, num) {
    while (num > 0) {
        if (digit === num % 10) {
            console.log('Yes');
            break;
        }
        num = Math.floor(num / 10);
    }
    if (num === 0) {
        console.log('No');
    }
}


// Problem 11

function reverse(num) {
    if (num > 10) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        let firstDigit = num;
        let count = 0;
        while (firstDigit > 10) {
            firstDigit = Math.floor(firstDigit / 10);
            count++;
        }
        num = (lastDigit * Math.pow(10, count) + (num - firstDigit * Math.pow(10, count))) * 10 + firstDigit;
    }
    console.log(num);
}


//Problem 12

var figure = prompt('Enter the name of the figure');
var a = +prompt();
var b = +prompt();

if (a > 0 && b > 0) {
    var area = a * b;
    if (figure === 'triangle') {
        console.log(area / 2);
    } else if (figure === 'rectangle') {
        console.log(area);
    }
} else {
    console.log('Please enter only positives');
}

//Problem 13

function difference(num) {
    let max = min = num % 10;
    while (num > 10) {
        num = Math.floor(num / 10);
        if (min > num % 10) {
            min = num % 10;
        }
        if (max < num % 10) {
            max = num % 10;
        }
    }
    console.log(max - min);
}
