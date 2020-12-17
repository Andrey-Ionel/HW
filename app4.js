// 3. Дано трехзначное число. 
// а. Верно ли, что все его цифры одинаковые? 
// б. Есть ли среди его цифр одинаковые?

const threeDigitNumber = Number(prompt('Please enter three-digit number:', 999));

if(isNaN(threeDigitNumber)) {
    alert('Incorrect input');
}else {    
    const firstNumber = Math.trunc(threeDigitNumber / 100);
    const secondNumber = Math.trunc((threeDigitNumber / 10) % 10);
    const thirdNumber = threeDigitNumber % 10;
    const comparisonOfNumbers = (firstNumber === secondNumber && firstNumber === thirdNumber);

    if(comparisonOfNumbers) {
        const comparisonResult = `The digits of your number '${threeDigitNumber}' are equal.`; 
        alert(comparisonResult);  
    }else if(firstNumber === secondNumber) {
        const comparisonResult = `Only the first and second digit of your number '${threeDigitNumber}' are equal.`;  
        alert(comparisonResult);
    }else if(firstNumber === thirdNumber) {
        const comparisonResult = `Only the first and third digit of your number '${threeDigitNumber}' are equal.`;  
        alert(comparisonResult);
    }else if(secondNumber === thirdNumber) {
        const comparisonResult = `Only the second and third digit of your number '${threeDigitNumber}' are equal.`;    
        alert(comparisonResult);
    }else {
        const comparisonResult = `The digits of your number '${threeDigitNumber}' are not equal.`;   
        alert(comparisonResult);
    };
};