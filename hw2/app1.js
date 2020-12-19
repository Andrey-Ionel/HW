const firstNumber = Number(prompt('Enter the first number:', 0));

const secondNumber = Number(prompt('Enter the second number:', 0));

const sumOfNumber = firstNumber + secondNumber;
const subtractionOfNumber = firstNumber - secondNumber;
const multiplicationOfNumber = firstNumber * secondNumber;
const divisionOfNumber = firstNumber / secondNumber;

const alertResult = `Your results:
${firstNumber} + ${secondNumber} = ${sumOfNumber}; 
${firstNumber} - ${secondNumber} = ${subtractionOfNumber};
${firstNumber} * ${secondNumber} = ${multiplicationOfNumber};
${firstNumber} : ${secondNumber} = ${divisionOfNumber};`;

alert(alertResult);
