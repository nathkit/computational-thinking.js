function doubleValues(obj) {
    let double = {};
    for (let key in obj) {
        double[key] = obj[key]*2;
    }
    return console.log(double);
}

const obj = { a: 1, b: 2, c: 3 };
const anotherObj = { x: 10, y: 20, z: 30 };

doubleValues(obj); // Output: { a: 2, b: 4, c: 6 }
doubleValues(anotherObj) // Output: { x: 20, y: 40, z: 60 }