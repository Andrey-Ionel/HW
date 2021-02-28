// Написать функцию createCalculator, чтобы ее можно было использовать таким образом

// const calc = createCalculator(10);

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); // 100

// function createCalculator(valueOfCalculator) {

//     const sum = (sum) => valueOfCalculator += parseFloat(sum);

//     const mult = (multiplication) => valueOfCalculator *= parseFloat(multiplication);

//     const sub = (subtraction) => valueOfCalculator -= parseFloat(subtraction);

//     const div = (division) => valueOfCalculator /= parseFloat(division);

//     const set = (setValue) => valueOfCalculator = parseFloat(setValue);

//     const showCalculatorValueLog = () => console.log(valueOfCalculator);

//     return {
//         sum,
//         mult,
//         sub,
//         div,
//         set,
//         showCalculatorValueLog
//     }
// }

function createCalculator(currentNumber) {
    return {
        sum: (number) => currentNumber += number,
        sub: (number) => currentNumber -= number,
        mult: (number) => currentNumber *= number,
        div: (number) => currentNumber /= number,
        set: (number) => currentNumber = number,
    }
}
