let countFindLetter;

const countCharacter = (word, letter) => {
    countFindLetter = 0;
    for (let key of word) {
        if (key === letter) {
            countFindLetter++;
        }
    }return console.log(`The "${word}" have letter "${letter}" = ${countFindLetter}`)
}

countCharacter("hello" , "l");
countCharacter("techup", "p");
