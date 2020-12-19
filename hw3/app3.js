// 3. Дано трехзначное число. 
// a. Определить является ли четной сумма его цифр. 
// b. Определить, кратна ли сумма его цифр пяти. 
// c. Определить является ли произведение его цифр больше 100. 

const threeDigitNumber = Number(prompt('Please enter three-digit number:', 999));

if(isNaN(threeDigitNumber)) {
    alert('Incorrect input');
}else {     
    const firstNumber = Math.trunc(threeDigitNumber / 100);
    const secondNumber = Math.trunc((threeDigitNumber / 10) % 10);
    const thirdNumber = threeDigitNumber % 10;
    const sumOfNumbers = firstNumber + secondNumber + thirdNumber;
    const evenOrOddNumber = sumOfNumbers % 2;
    const multiplicationOfNumbers = firstNumber * secondNumber * thirdNumber;

    if(evenOrOddNumber) {
        const sumResult = `Sum of the digits of your number '${sumOfNumbers}' is not even.`;
        alert(sumResult); 
    }else {
        const sumResult = `Sum of the digits of your number '${sumOfNumbers}' is even.`;
        alert(sumResult);
    };

    if(sumOfNumbers===5) {
        const sumEqualResult = `Sum of the digits of your number '${sumOfNumbers}' is equal '5'.`;
        alert(sumEqualResult);
    }else {
        const sumEqualResult = `Sum of the digits of your number '${sumOfNumbers}' is not equal '5'.`;
        alert(sumEqualResult);
    };

    if(multiplicationOfNumbers > 100) {
        const multiplicationResult = `Multiplication of the digits of your number '${multiplicationOfNumbers}' more then '100'.`;
        alert(multiplicationResult);  
    }else if(multiplicationOfNumbers === 100) {
        const multiplicationResult = `Multiplication of the digits of your number '${multiplicationOfNumbers}' = '100' but not more then '100'.`;
        alert(multiplicationResult);
    }else {
        const multiplicationResult = `Multiplication of the digits of your number '${multiplicationOfNumbers}' less then '100'.`;
        alert(multiplicationResult);
    };
};