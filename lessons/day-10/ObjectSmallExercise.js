//Data
const teo = {
    name: "Teo",
    grades: [9, 8, 6]
}

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [8, 8, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6, 7, 8];

//Usage
const { bestStudentName, avgScore } = findBestStudent([teo, ti, tun]);
console.log(`Best Student is ${bestStudentName}, with score ${avgScore}`);

//Controller
function findBestStudent(studentsList) {
    let bestStudent = studentsList[0];
    let currentHighestScore = calculateAvgScore(bestStudent);

    for (const student of studentsList) {
        const avgScore = calculateAvgScore(student);
        if (avgScore > currentHighestScore) {
            bestStudent = student;
            currentHighestScore = avgScore;
        }
    }
    return {
        bestStudentName: bestStudent.name,
        avgScore: currentHighestScore,
        metaData: {}
    }
}

function calculateAvgScore({ grades }) {
    let total = 0;
    for (const grade of grades) {
        total += grade;
    }
    return Math.ceil(total / grades.length);
}