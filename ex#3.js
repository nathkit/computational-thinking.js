let numbers = [23, 3, 444, 12];
let maxNumber;
function findMaxNumber(numbers) {
    maxNumber = null;
    for (let i of numbers) {
        if (!maxNumber) {
            maxNumber = i;
        } else if (maxNumber < i) {
            maxNumber = i;
        }
    } 
    return maxNumber;
}

maxNumber = findMaxNumber (numbers);
console.log(maxNumber)
