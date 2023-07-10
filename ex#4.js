const employees = [
    {name: "John", age: 32},
    {name: "Jane", age: 28},
    {name: "Jim", age: 40}
]
let oldestAge;
let oldestPerson;
console.log(employees[1].name)

function findOldestPerson(employees) {
    oldestAge = null;
    for (let key of employees) {
        if (!oldestAge) {
            oldestPerson = key.name
            oldestAge = key.age;
        } else if (oldestAge < key.age) {
            oldestPerson = key.name;
            oldestAge = key.age;
        }
    }
    return console.log(`Name: ${oldestPerson} Age: ${oldestAge}`)
}
findOldestPerson(employees)