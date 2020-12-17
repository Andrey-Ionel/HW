// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

const sixDigitNumber = Number(prompt('Please enter six-digit number:', 123321));

const firstThreeNumbers = Math.trunc(sixDigitNumber / 1000);
const fourthNumber = (Math.trunc(sixDigitNumber / 100) % 10)
const fifthNumber = (Math.trunc(sixDigitNumber / 10) % 10*10);
const sixthNumber = (Math.trunc(sixDigitNumber % 10) * 100);
const secondThreeNumbers = sixthNumber + fifthNumber + fourthNumber;

if(firstThreeNumbers === secondThreeNumbers) {
    const comparisonResult = `Your number '${sixDigitNumber}' is mirrored.`;
    alert(comparisonResult);  
}else {
    const comparisonResult = `Your number '${sixDigitNumber}' is not mirrored.`; 
    alert(comparisonResult);
};
