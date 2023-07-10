let word;

const findLongStrings = function (strings, count) {
    word = [];
    for (let key of strings) {
        if (key.length > count) {
            word.push(key);
        }
    } return console.log(word);

}

const strings = ["apple", "banana", "cherry", "date", "elderberry"];

findLongStrings(strings, 5);
findLongStrings(strings, 8);