// Problem 1

function removeFirst(arr, ind = 0) {
    if (arr.length === ind) {
        return arr.splice(0, ind - 1);
    }
    arr[ind] = arr[++ind];
    return removeFirst(arr, ind);
}

// console.log(removeFirst([6, 78, 'n', 0, 1]));


// Problem 2 

function flatten(arr) {
    if (arr.length <= 1 && !Array.isArray(arr[0])) {
        return arr;
    }
    let result = (Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]]);
    return result.concat(flatten(arr.splice(1, arr.length)));
}

// console.log(flatten([14, [1, [[[3, []]], 1], 0]]));


// Problem 3

function sumOfDigits(num) {
    while (num >= 10) {
        num = ('' + num).split('').map(Number).reduce((a, b) => a + b);
    }
    return num;
}

// console.log(sumOfDigits(29));


// Problem 4

function rotate(arr, num) {
    if (num === 0) {
        return arr;
    } else if (num < 0) {
        arr.unshift(arr[arr.length - 1]);
        return rotate(arr.splice(0, arr.length - 1), num + 1);
    }
    arr[arr.length] = arr[0];
    return rotate(arr.splice(1, arr.length), num - 1);
}

// console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));


// Problem 5

function invert(obj) {
    for (key in obj) {
        let current = obj[key];
        if (obj.hasOwnProperty(current)) {
            obj[key] = (Array.isArray(obj[current]) ? obj[current].concat([key]) : [obj[current]].concat([key]));
            obj[current] = obj[key];
        } else {
            obj[key] = key;
            obj[current] = obj[key];
        }
        delete obj[key];
    }
    return obj;
}

// console.log(invert({
//     a: '1',
//     b: '2',
//     c: '2',
//     d: '2'
// }));

// Problem 6

function sorted(books) {
    return books.filter(element => {
        if (element.readStatus === true) {
            return element;
        }
    }).sort((a, b) => b.percent - a.percent);
}

// console.log(sorted([{
//         book: "Catcher in the Rye",
//         readStatus: true,
//         percent: 40
//     },
//     {
//         book: "Animal Farm",
//         readStatus: true,
//         percent: 20
//     },
//     {
//         book: "Solaris",
//         readStatus: false,
//         percent: 90
//     },
//     {
//         book: "The Fall",
//         readStatus: true,
//         percent: 50
//     },
//     {
//         book: "White Nights",
//         readStatus: false,
//         percent: 60
//     },
//     {
//         book: "After Dark",
//         readStatus: true,
//         percent: 70
//     }
// ]));