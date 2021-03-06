// // 1) С помощью prompt спрашиваем у пользователя действие.

// 2) С помощью prompt спрашиваем у пользователя числа. Числа вводяться через пробел.

// 3) Выполняем то действие, которое выбрал пользователь со всеми числами.

// Если ввёл действие которого нет (не +, -, *, /) то выводим соответсвующее сообщение и не выполняем код дальше.

// Удаляем все значения, которые не являются числами.

// т.е. если пользователь ввел "1 ыва 2 56", то калькуляцию мы должны провести тольк с 1 2 56

// Для этого у массива есть специальный метод который позволяет убрать ненужные значения.

const mathOperation = prompt('Please, enter math operation.');

if (checkIfCanceledOperation()) {
    alert('Cancel input');
} else if (checkIncorrectInput()) {
    alert('Incorrect input');
} else {
    createOperationLog();
    const enterNumbers = prompt('Please enter numbers separated by a space.');

    if (checkIfCanceledArrayCreation(enterNumbers)) {
        alert('Cancel input');
        console.log('Please refresh your browser and try again.');
    } else {
        createFilteredArrayOfNumbers(enterNumbers);

        if (checkIfFilteredArrayEmpty(enterNumbers)) {
            alert('Incorrect input no numbers to perform the operation.');
            console.log('Please refresh your browser and try again.');
        } else {
            createFilteredArrayLog(enterNumbers);
            createResultLog(enterNumbers);
        }

    }
};

function checkIfCanceledOperation() {
    if (mathOperation === null) {
        return true;
    }
};

function checkIncorrectInput() {
    if (mathOperation !== '+' && mathOperation !== '-' && mathOperation !== '*' && mathOperation !== '/') {
        return true;
    };
};

function createOperationLog() {
    console.log(`Your operation is (${mathOperation}).`);
};

function checkIfCanceledArrayCreation(enterNumbers) {
    if (enterNumbers === null) {
        return true;
    }
};
function createArrayOfNumbers(enterNumbers) {
    if (enterNumbers !== null) {
        const arrayOfNumber = enterNumbers.split(' ');
        return arrayOfNumber;
    }
};

function createFilteredArrayOfNumbers(enterNumbers) {

    const filteredArrayOfNumbers = createArrayOfNumbers(enterNumbers).filter(function (item) {
        if (item === '') {
            return false;
        } else if (isNaN(item)) {
            return false;
        } else {
            return true;
        }
    })

    return filteredArrayOfNumbers;
};

function checkIfFilteredArrayEmpty(enterNumbers) {
    if (createFilteredArrayOfNumbers(enterNumbers).length === 0) {
        return true;
    }
};

function createFilteredArrayLog(enterNumbers) {
    console.log(`Your array of numbers is [${createFilteredArrayOfNumbers(enterNumbers)}].`);
};

function performsArrayOperations(enterNumbers) {
    if (mathOperation === '+') {
        const sumOfOperation = createFilteredArrayOfNumbers(enterNumbers).reduce((acc, value) => parseInt(acc) + parseInt(value));
        return sumOfOperation;
    } else if (mathOperation === '-') {
        const minustOfOperation = createFilteredArrayOfNumbers(enterNumbers).reduce((acc, value) => acc - value);
        return minustOfOperation;
    } else if (mathOperation === '/') {
        const divisionOfOperation = createFilteredArrayOfNumbers(enterNumbers).reduce((acc, value) => acc / value);
        return divisionOfOperation;
    } else if (mathOperation === '*') {
        const multiplicationOfOperation = createFilteredArrayOfNumbers(enterNumbers).reduce((acc, value) => acc * value);
        return multiplicationOfOperation;
    }
};

function createResultLog(enterNumbers) {
    console.log(`The result of your operation is ${performsArrayOperations(enterNumbers)}.`);
};