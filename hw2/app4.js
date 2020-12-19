const fiveDigitNumber = Number(prompt('Enter the five-digit number:', 12345));

const firstNumber = (fiveDigitNumber / 10000) - (fiveDigitNumber / 10000) % 1;

const secondNumber = (fiveDigitNumber / 1000) % 10 - ((fiveDigitNumber / 1000) % 10) % 1;

const thirdNumber = (fiveDigitNumber / 100) % 10 - ((fiveDigitNumber / 100) % 10) % 1;

const fourthNumber = (fiveDigitNumber / 10) % 10 - ((fiveDigitNumber / 10) % 10) % 1;

const fifthNumber = fiveDigitNumber % 10;

const alertResult = `Your result:
${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`;

alert(alertResult);
