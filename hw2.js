// Problem 1

function isPrime(number) {
    if (number === 0 || number === 1)
        console.log('no');
    let count = 0;
    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    console.log((count > 1 ? 'no' : 'yes'));
}


// Problem 2

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacci(n) {
    console.log(fibonacci(n));
}


// Problem 3

function Fibonacci(n) {
    let i = 0;
    let series = '';
    while (fibonacci(i) < n) {
        series += fibonacci(i++) + ', ';
    }
    console.log(series);
}


// Problem 4 

function isDivisible(n) {
    if (n === 0) {
        console.log('Cannot calculate.');
    } else {
        let sum = 0;
        let product = 1;
        while (n > 0) {
            sum += n % 10;
            product *= n % 10;
            n = Math.floor(n / 10);
        }
        console.log((product % sum === 0 ? `Quotient is ${product/sum}.` : `Remainder is ${product%sum}.`));
    }
}


// Problem 9

function evenlySpaced(a, b, num) {
    let array = [];
    array[0] = a;
    let space = (b - a) / (num - 1);
    for (let i = 1; i < num; i++) {
        array[i] = Number((array[i - 1] + space).toFixed(1));
    }
    console.log(array);
}


// Problem 10

function secondMax(array) {
    let first_max = array[0];
    let second_max = array[1];
    for (let i = 2; i < array.length; i++) {
        if (first_max < second_max) {
            let temp = first_max;
            first_max = second_max;
            second_max = temp;
        }
        if (first_max < array[i]) {
            second_max = first_max;
            first_max = array[i];
        } else if (second_max < array[i]) {
            second_max = array[i];
        }
    }
    console.log(array.indexOf(second_max));
}


// Problem 11

function pad(array, padAmount, repeat) {
    if (padAmount <= array.length) {
        let array1 = [];
        while (repeat > 0) {
            repeat--;
            array1 = array1.concat(array.slice(0, padAmount));
            array = array.concat(array.slice(array.length - padAmount));
        }
        console.log(array1.concat(array));
    } else {
        console.log('Invalid padding amount');
    }
}