// Problem 1

function isPrime(number) {
    if (number === 0 || number === 1)
        console.log('no');
    let is_prime = true;
    for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            is_prime = false;
            break;
        }
    }
    console.log(is_prime ? 'yes' : 'no');
}


// Problem 2

function fibonacci(n) {
    if (n === 0 || n === 1) {
        console.log(n);
    } else {
        let previous1 = 0;
        let previous2 = 1;
        let fibonacci_n;
        for (let i = 2; i <= n; i++) {
            fibonacci_n = previous1 + previous2;
            previous1 = previous2;
            previous2 = fibonacci_n;
        }
        console.log(fibonacci_n);
    }
}


// Problem 3

function Fibonacci(n) {
    if (n === 0) {
        console.log(n);
    } else {
        let previous1 = 0;
        let previous2 = 1;
        let series = previous1 + ', ' + previous2 + ', ';
        for (let i = 1; i <= n; i = previous1 + previous2) {
            series += i + ', ';
            previous1 = previous2;
            previous2 = i;
        }
        console.log(series);
    }
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
    let index = 0;

    function findMax(array) {
        if (array.length === 1) {
            return array[0];
        } else if (array.length === 2) {
            return array[0] > array[1] ? array[0] : array[1];
        }

        let second_max = findMax(array.slice(0, array.length / 2));
        let max = findMax(array.slice(array.length / 2));
        if (max < second_max) {
            max += second_max;
            second_max = max - second_max;
            max -= second_max;
        }
        index = array.indexOf(second_max);
        return max;
    };

    findMax(array);
    console.log(index);
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