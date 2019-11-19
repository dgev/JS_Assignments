// Problem 1

function largestProduct(arr) {
    let max = arr[0] * arr[1];
    arr.slice(1, arr.length - 1).forEach((element, index) => {
        max = (max > element * arr[index + 2] ? max : element * arr[index + 2]);
    });
    return max;
}


// Problem 2

function countMissing(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0] + 1 - arr.length;
}

console.log(countMissing([9, 5, 4, -7, -5, 2, 11, 0]));


// Problem 3

function acronym(str) {
    return str.split(' ').map(elem => elem[0].toUpperCase()).join('');
}

// console.log(acronym('Have a good night'));


// Problem 4

function substrings(str, n) {
    let arr = [];
    for (let i = 0; i <= str.length - n; i++) {
        arr.push(str.slice(i, i + n));
    }
    return arr.join(', ');
}

// console.log(substrings('abcdfghz', 7));


// Problem 5

function treeObject(arr) {
    let obj = {};
    let child1 = {};
    let child2 = {};
    parent1 = null;
    parent2 = null;
    for (let i = arr.length - 1; i > 0; i--) {
        if (parent1 === null || parent1 === arr[i].id) {
            let str = JSON.parse(JSON.stringify(child1));
            child1 = {};
            child1[arr[i].id] = str;
            parent1 = arr[i].parent;
        } else if (parent2 === null || parent2 === arr[i].id) {
            let str = JSON.parse(JSON.stringify(child2));
            child2 = {};
            child2[arr[i].id] = str;
            parent2 = arr[i].parent;

        } else if (parent1 === arr[i].parent) {
            let temp = {};
            temp[arr[i].id] = {};
            child1 = Object.assign({}, temp, child1);
        } else if (parent2 === arr[i].parent) {
            let temp = {};
            temp[arr[i].id] = {};
            child2 = Object.assign({}, temp, child2);
        }
    }
    obj = Object.assign({}, child1, child2);
    let str = JSON.parse(JSON.stringify(obj));
    obj = {};
    obj[arr[0].id] = str;
    return obj;
}

// console.log(treeObject([{
//         parent: null,
//         id: 0
//     },
//     {
//         parent: 0,
//         id: 1
//     },
//     {
//         parent: 0,
//         id: 2
//     },
//     {
//         parent: 1,
//         id: 3
//     },
//     {
//         parent: 1,
//         id: 4
//     },
//     {
//         parent: 2,
//         id: 5
//     },
//     {
//         parent: 4,
//         id: 6
//     }
// ]));