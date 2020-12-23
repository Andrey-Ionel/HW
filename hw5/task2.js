// 2. Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// f. Найти количество четных положительных элементов.
// g. Найти сумму четных положительных элементов.
// h. Найти сумму нечетных положительных элементов.
// i. Найти произведение положительных элементов.
// j. Найти наибольший среди элементов массива, остальные обнулить.

// a. Найти сумму и количество положительных элементов.
const arrayOfNumbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arrayOfNumbers);

let sumOfPositiveNumbers = 0;
let quantitiOfPositiveNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] >= 0) {
        sumOfPositiveNumbers += arrayOfNumbers[i];
        quantitiOfPositiveNumbers += 1;
    }
};

const resultOfPositiveNumbers = `The sum of the positive elements = '${sumOfPositiveNumbers}' and the quantiti of the positive elements = '${quantitiOfPositiveNumbers}'.`;
console.log(resultOfPositiveNumbers);

// b. Найти минимальный элемент массива и его порядковый номер.
let minimumValueIndex = 0;
let minimumValue = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < minimumValue) {
        minimumValue = arrayOfNumbers[i];
        minimumValueIndex = i;
    }
};

const minimumElementResult = `The minimum element of the array is '${arrayOfNumbers[minimumValueIndex]}' and its index is '${minimumValueIndex}'.`;
console.log(minimumElementResult);

// c. Найти максимальный элемент массива и его порядковый номер.

let maximumValueIndex = 0;
let maximumValue = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maximumValue) {
        maximumValue = arrayOfNumbers[i];
        maximumValueIndex = i;
    }
};

const maximumElementResult = `The maximum element of the array is '${arrayOfNumbers[maximumValueIndex]}' and its index is '${maximumValueIndex}'.`;
console.log(maximumElementResult);

// d. Определить количество отрицательных элементов.

let quantitiOfNegativeNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] <= 0) {
        quantitiOfNegativeNumbers += 1;
    }
};

const resultOfQuantitiNegativeNumbers = `The quantiti of the negative elements = '${quantitiOfNegativeNumbers}'.`;
console.log(resultOfQuantitiNegativeNumbers);

// e. Найти количество нечетных положительных элементов.

let quantitiOfPositiveOddNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0 && (arrayOfNumbers[i] % 2) !== 0) {
        quantitiOfPositiveOddNumbers += 1;
    }
};

const resultOfPositiveOddNumbers = `The quantiti of the positive odd elements = '${quantitiOfPositiveOddNumbers}'.`;
console.log(resultOfPositiveOddNumbers);

// f. Найти количество четных положительных элементов.

let quantitiOfPositiveEvenNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0 && (arrayOfNumbers[i] % 2) === 0) {
        quantitiOfPositiveEvenNumbers += 1;
    }
};

const resultOfPositiveEvenNumbers = `The quantiti of the positive even elements = '${quantitiOfPositiveEvenNumbers}'.`;
console.log(resultOfPositiveEvenNumbers);

// g. Найти сумму четных положительных элементов.

let sumOfPositiveEvenNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0 && (arrayOfNumbers[i] % 2) === 0) {
        sumOfPositiveEvenNumbers += arrayOfNumbers[i];
    }
};

const resultOfSumPositiveEvenNumbers = `The sum of the positive even elements = '${sumOfPositiveEvenNumbers}'.`;
console.log(resultOfSumPositiveEvenNumbers);

// h. Найти сумму нечетных положительных элементов.

let sumOfPositiveOddNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0 && (arrayOfNumbers[i] % 2) !== 0) {
        sumOfPositiveOddNumbers += arrayOfNumbers[i];
    }
};

const resultOfSumPositiveOddNumbers = `The sum of the positive odd elements = '${sumOfPositiveOddNumbers}'.`;
console.log(resultOfSumPositiveOddNumbers);

// i. Найти произведение положительных элементов.

let productOfPositiveNumbers = 1;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0) {
        productOfPositiveNumbers *= arrayOfNumbers[i];
    }
};

const resultOfProductPositiveNumbers = `The product of the positive elements = '${productOfPositiveNumbers}'.`;
console.log(resultOfProductPositiveNumbers);

// j. Найти наибольший среди элементов массива, остальные обнулить.

let maximumOfI = 0;
maximumValue = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maximumValue) {
        maximumValue = arrayOfNumbers[i];
        arrayOfNumbers[maximumOfI] = 0;
        maximumOfI = i;
    } else {
        arrayOfNumbers[i] = 0;
    }
};
const resultOfZeroingElements = `The maximum element of the array is '${arrayOfNumbers[maximumOfI]}' and all other elements are zeroed.`;
console.log(resultOfZeroingElements);
console.log(arrayOfNumbers);