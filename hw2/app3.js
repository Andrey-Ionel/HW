const firstNumber = Number(prompt('Enter the first number:', 0));

const secondNumber = Number(prompt('Enter the second number:', 0));

const thirdNumber = Number(prompt('Enter the second number:', 0));

const averageOfNumber = (firstNumber + secondNumber + thirdNumber) / 3;

const alertResult = `Your result:
(${firstNumber} + ${secondNumber} + ${thirdNumber}) : 3 = ${averageOfNumber};`;

alert(alertResult);
