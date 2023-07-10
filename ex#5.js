const students = [
	{ name: "John", grade: 80 },
	{ name: "Jane", grade: 90 },
	{ name: "Jim", grade: 85 }
];


function findAverageGrade(students) {
    let totalScore = 0;
    let averageScore = 0;
    let numberOfStudunts = 0;
    for (let key of students) {
        totalScore += key.grade;
        numberOfStudunts++;
    }
    averageScore = totalScore/numberOfStudunts;
    return averageScore;
}


console.log(findAverageGrade(students)); // Output: 85