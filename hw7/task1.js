// Написать две функции:

const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

// первая выведет список студентов и средний бал каждого

const averageMarks = (student) => {
    return student.marks.reduce((a, b) => a + b) / student.marks.length;
};

function createHeaderLog() {
    console.log('---------------------------------');
    console.log('Students and their average marks:');
    console.log('---------------------------------');
};

createHeaderLog();

for (const student of students) {
    console.log(`${student.name}: ${averageMarks(student)}`);
};

// вторая выведен средний бал по всем студентам

const sumOfMark = students.reduce((sum, student) => {
    return sum + averageMarks(student);
}, 0);

const averageMarkOfAll = (sumOfMark / students.length).toFixed(2);

function createAverageMarkLog() {
    const resultAverageMark = `Average mark of all students ${averageMarkOfAll}`;
    console.log('---------------------------------');
    console.log(resultAverageMark);
};

createAverageMarkLog();