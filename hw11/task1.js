// Написать функцию createCalculator, чтобы ее можно было использовать таким образом

// const calc = createCalculator(10);

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); // 100

function createCalculator(calculator) {
    let ValueOfCalculator = parseFloat(calculator);
    console.log(ValueOfCalculator);

    function calculateSumOfNumbers(sum) {
        ValueOfCalculator += parseFloat(sum);
        console.log(ValueOfCalculator);
    }

    function calculateMultiplicationOfNumbers(multiplication) {
        ValueOfCalculator *= parseFloat(multiplication);
        console.log(ValueOfCalculator);
    }

    function calculateSubtractionOfNumbers(subtraction) {
        ValueOfCalculator -= parseFloat(subtraction);
        console.log(ValueOfCalculator);
    }

    function calculateDivisionOfNumbers(division) {
        ValueOfCalculator /= parseFloat(division);
        console.log(ValueOfCalculator);
    }

    function setAnyNumericValue(setValue) {
        ValueOfCalculator = parseFloat(setValue);
        console.log(ValueOfCalculator);
    }

    return {
        calculateSumOfNumbers,
        calculateMultiplicationOfNumbers,
        calculateSubtractionOfNumbers,
        calculateDivisionOfNumbers,
        setAnyNumericValue,
    }
}