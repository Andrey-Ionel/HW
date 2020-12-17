// 2. Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

const twoDigitNumber = Number(prompt('Please enter two-digit number:', 99));

const firstNumber = Math.trunc(twoDigitNumber / 10);
const secondNumber = twoDigitNumber % 10;

if(firstNumber > secondNumber) {

    const alertResult = `The first digit '${firstNumber}' is greater than the second '${secondNumber}'.`;

    alert(alertResult);   
}else if(firstNumber === secondNumber) {
    const alertResult = `The digits '${firstNumber}' and '${secondNumber}' are equal.`;

    alert(alertResult);
}else {
    
    const alertResult = `The first digit '${firstNumber}' is less than the second '${secondNumber}'.`;

    alert(alertResult);
};

