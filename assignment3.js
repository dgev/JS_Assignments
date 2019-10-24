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
    let count = 1;
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        if (arr[i] === current) {
            count++;
        } else {
            console.log(current + ': ' + count / length);
            count = 1;
            current = arr[i];
        }
        if (i === length - 1) {
            console.log(current + ': ' + count / length);
        }
    }
}

// frequency([1, 1, 2, 2, 3]);


// Problem 3

function typeOfElems(arr) {
    let count_nums = 0;
    let count_str = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            count_nums++;
        } else {
            count_str++;
        }
    }
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
    for (let i = 0; i < sentence.length; i++) {
        if ([' ', ',', '-'].includes(sentence[i]) || i === sentence.length - 1) {
            if (prev_count <= count) {
                prev_value = value;
                prev_count = count;
            }
            count = 0;
            value = '';
        }
        value += sentence[i];
        count++;
    }
    console.log(prev_value);
}

// longestWord("Which would be worse - to live as a monster, or to die as a good man?");


// Problem 5

function longestSubstring(line) {
    let prev_count = 0;
    let prev_str = '';
    let count = 0;
    let str = '';
    for (let i = 0; i < line.length; i++) {
        if (!str.includes(line[i]) || line[i] === ' ') {
            str += line[i];
            count++;
        } else {
            count = str.length - str.indexOf(line[i]);
            str = str.slice(str.indexOf(line[i]) + 1, str.length) + line[i];
        }
        if (count >= prev_count) {
            prev_count = count;
            prev_str = str;
        }
    }
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
    for (let i = 0; i < arr.length; i++) {
        max = 1;
        if (Array.isArray(arr[i])) {
            noArrays = true;
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] < 0) {
                    max = arr[i][j];
                    noNegative = true;
                    for (let index = j + 1; index < arr[i].length; index++) {
                        if (arr[i][index] < 0 && arr[i][index] > max) {
                            max = arr[i][index];
                        }
                    }
                    break;
                }
            }
        }
        product *= max;
    }

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