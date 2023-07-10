const people = [
	{ name: "John", age: 28 },
	{ name: "Jane", age: 33 },
	{ name: "Jim", age: 45 },
	{ name: "Jack", age: 12 },
	{ name: "Jill", age: 73 }
];

function groupPeopleByAgeRange(people) {
    let groudAge = {};
    let countZeroToSevenTeenYearOlds = 0;
    let countEighTeenToSixtyFourYearOlds = 0;
    let countAboveSixtyFourYearOlds = 0;
  for (let i of people) {
    if (i.age >= 0 && i.age <= 17) {
        countZeroToSevenTeenYearOlds++;
    } else if (i.age >=18 && i.age <= 64) {
        countEighTeenToSixtyFourYearOlds++;
    } else {
        countAboveSixtyFourYearOlds++;
    }
  }
  groudAge["0-17"] = countZeroToSevenTeenYearOlds;
  groudAge["18-64"] = countEighTeenToSixtyFourYearOlds;
  groudAge["65 and above"] = countAboveSixtyFourYearOlds;
  return console.log(groudAge);
}

groupPeopleByAgeRange(people);

/* Output:
	{
	  "0-17": 1,
	  "18-64": 3,
	  "65 and above": 1
	}
*/
