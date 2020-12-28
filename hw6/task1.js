// // 1) С помощью prompt спрашиваем у пользователя действие.

// 2) С помощью prompt спрашиваем у пользователя числа. Числа вводяться через пробел.

// 3) Выполняем то действие, которое выбрал пользователь со всеми числами.

// Если ввёл действие которого нет (не +, -, *, /) то выводим соответсвующее сообщение и не выполняем код дальше.

// Удаляем все значения, которые не являются числами.

// т.е. если пользователь ввел "1 ыва 2 56", то калькуляцию мы должны провести тольк с 1 2 56

// Для этого у массива есть специальный метод который позволяет убрать ненужные значения.

const mathOperation = prompt('Please, enter math operation');

if (chackIfCanceledOperation()) {
    alert('Cancel input');
} else if (checkCorrectInput()) {
    alert('Incorrect input');
} else {
    createOperationLog();

    const arrayOfNumber = createArrayOfNumbers();

    const filteredArrayOfNumber = arrayOfNumber.filter(function (item, index, array) {
        if (item === '') {
            return false;
        } else if (isNaN(item)) {
            return false;
        } else {
            return true;
        }
    });

    function createFilteredArrayLog() {
        filteredArrayOfNumber === true;
        console.log(`Your array of numbers is [${filteredArrayOfNumber}].`);
        return true;
    };
    createFilteredArrayLog();

    performsArrayOperations();

    function performsArrayOperations() {

        if (mathOperation === '+') {
            const sumOfOperation = filteredArrayOfNumber.reduce((acc, value) => parseInt(acc) + parseInt(value));
            return sumOfOperation;
        } else if (mathOperation === '-') {
            const minustOfOperation = filteredArrayOfNumber.reduce((acc, value) => acc - value);
            return minustOfOperation;
        } else if (mathOperation === '/') {
            const divisionOfOperation = filteredArrayOfNumber.reduce((acc, value) => acc / value);
            return divisionOfOperation;
        } else if (mathOperation === '*') {
            const multiplicationOfOperation = filteredArrayOfNumber.reduce((acc, value) => acc * value);
            return multiplicationOfOperation;

        }
    };
    function createresultLog() {
        performsArrayOperations() === true;
        console.log(`The result of your operation is ${performsArrayOperations()}.`);
        return true;
    };
    createresultLog();
};


function chackIfCanceledOperation() {
    if (mathOperation === null) {
        return true;
    }
};

function checkCorrectInput() {
    if (mathOperation !== '+' && mathOperation !== '-' && mathOperation !== '*' && mathOperation !== '/') {
        return true;
    };
};


function createOperationLog() {
    mathOperation === true;
    console.log(`Your operation is (${mathOperation}).`);
    return true;
};

function createArrayOfNumbers() {
    const enterNumbers = prompt('Please enter numbers separated by a space');
    if (enterNumbers === null) {
        alert('Cancel input');
        return true;
    } else {
        const arrayOfNumber = enterNumbers.split(' ');
        return arrayOfNumber;
    }
};