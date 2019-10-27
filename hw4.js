// Problem 1

function newArray(arr, num) {
    let result = arr.filter(element => {
        if (element > num)
            return element;
    });
    return (result.length > 0 ? result : 'Such values do not exist.');
}

// console.log(newArray([1, 1, 2, -3, 0, 8, 4, 0], 9));


// Problem 2

function allNums(num1, num2) {
    let result = [];
    while (num1 < num2) {
        num1++;
        if (num1.toString().split('').every(element => element % 2 === 0)) {
            result.push(num1);
        }
    }
    return (result.length > 0 ? result.join(', ') : 'Such numbers do not exist.');
}

// console.log(allNums(99, 199));


// Problem 3

function areOdd(num) {
    if (num < 10) {
        return num % 2 === 1;
    }
    return (areOdd(num % 10) && areOdd(Math.floor(num / 10)));
}

// console.log(areOdd(4211133));


// Problem 4

function minimalPositive(arr) {
    if (arr.length === 1) {
        return (arr[0] >= 0 ? arr[0] : -1);
    }
    let min1 = minimalPositive([arr[0]]);
    let min2 = minimalPositive(arr.splice(1, arr.length));
    if (min1 >= 0 && min2 >= 0) {
        return (min1 > min2 ? min2 : min1);
    }
    return (min1 < 0 ? (min2 < 0 ? -1 : min2) : min1);
}

// console.log(minimalPositive([-5, -9, -111, -1000, -7]));


// Problem 5

function isViolated(arr) {
    return arr.findIndex((element, i) => (i > 0 && element < arr[i - 1]));
}

// console.log(isViolated([-9, -4, -4, 3, 12, 4, 5]));