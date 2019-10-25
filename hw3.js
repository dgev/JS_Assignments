// Problem 1

function starPattern(n) {
    for (let i = 0; i < 2 * n - 1; i++) {
        let str = '';
        for (let j = 0; j <= 2 * n; j++) {
            if ((i === j) || j === 2 * n - i - 2) {
                str += '*';
            } else {
                str += ' ';
            }

        }
        console.log(str);
    }
}

// starPattern(5)


// Problem 2

function frequency(arr) {
    arr.sort();
    let current = arr[0];
    let count = 0;
    let length = arr.length;
    arr.forEach((element, index) => {
        if (element === current) {
            count++;
        } else {
            console.log(current + ': ' + count / length);
            current = element;
            count = 1;
        }
        if (index === length - 1) {
            console.log(current + ': ' + count / length);
        }
    });
}

// frequency([1, 1, 2, 2, 3]);


// Problem 3

function typeOfElems(arr) {
    let count_nums = 0;
    let count_str = 0;
    arr.forEach(elem => {
        if (typeof (elem) === "number") {
            count_nums++;
        } else {
            count_str++;
        }
    })
    console.log(`Numbers: ${count_nums}
Strings: ${count_str}`);
}

// typeOfElems([1, 4, 'i am a string', '456']);


// Problem 4

function longestWord(sentence) {
    let prev_count = 0;
    let prev_value = '';
    let count = 0;
    let value = '';
    sentence.split('').forEach((element, index) => {
        if ([' ', ',', '-'].includes(element) || index === sentence.length - 1) {
            if (prev_count <= count) {
                prev_value = value;
                prev_count = count;
            }
            count = 0;
            value = '';
        }
        value += element;
        count++;
    })
    console.log(prev_value);
}

// longestWord("Which would be worse - to live as a monster, or to die as a good man?");


// Problem 5

function longestSubstring(line) {
    let prev_count = 0;
    let prev_str = '';
    let count = 0;
    let str = '';
    line.split('').forEach(element => {
        if (!str.includes(element) || element === ' ') {
            str += element;
            count++;
        } else {
            count = str.length - str.indexOf(element);
            str = str.slice(str.indexOf(element) + 1, str.length) + element;
        }
        if (count >= prev_count) {
            prev_count = count;
            prev_str = str;
        }
    })
    console.log(prev_str);
}

// longestSubstring('parting your soup is not a miracle, bruce.');


// Problem 6

function newString(str) {
    let remainder = str.length % 3;
    let length = str.length;
    let new_str = '';
    for (let i = 1; i < length; i++) {
        if (i === length - remainder || (remainder === 0 && i === length - 1)) {
            new_str += (remainder === 0 ? str.slice(i, length) + str[i - 2] : str[i - 3] + str.slice(i, length));
            break;
        } else if (i % 3 === 0) {
            new_str += str[i - 3];
        } else {
            new_str += str[i];
        }
    }
    console.log(new_str);

}

// newString('aweyoolp')


// Problem 7

function productOfNums(arr) {
    let product = 1;
    let max;
    let noNegative = false;
    let noArrays = false;
    arr.forEach(elem => {
        max = 1;
        if (Array.isArray(elem)) {
            noArrays = true;
            elem.forEach((element) => {
                if (element < 0) {
                    if (max === 1) {
                        max = Number.NEGATIVE_INFINITY
                    };
                    max = (element > max ? element : max);
                    noNegative = true;
                }
            });
            product *= max;
        }
    });

    if (!noArrays)
        console.log('Invalid Argument');
    else if (!noNegative)
        console.log('No negatives');
    else
        console.log(product);
}

// productOfNums([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);

// Problem 8

function allSubsets(arr) {
    if (arr.length < 3) {
        return arr;
    }
    let result = [];
    for (let k = 0; k < arr.length - 2; k++) {
        for (let i = k + 1; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                result.push([arr[k], arr[i], arr[j]])
            }
        }
    }
    return result;
}

// console.log(allSubsets([5, 9, 23, 0, -2, -1]));