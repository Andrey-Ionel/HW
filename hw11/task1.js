// Написать функцию createCalculator, чтобы ее можно было использовать таким образом

// const calc = createCalculator(10);

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); // 100

function createCalculator(calculator) {
    let valueOfCalculator = parseFloat(calculator);
    console.log(valueOfCalculator);

    function calculateSumOfNumbers(sum) {
        valueOfCalculator += parseFloat(sum);
        console.log(valueOfCalculator);
    }

    function calculateMultiplicationOfNumbers(multiplication) {
        valueOfCalculator *= parseFloat(multiplication);
        console.log(valueOfCalculator);
    }

    function calculateSubtractionOfNumbers(subtraction) {
        valueOfCalculator -= parseFloat(subtraction);
        console.log(valueOfCalculator);
    }

    function calculateDivisionOfNumbers(division) {
        valueOfCalculator /= parseFloat(division);
        console.log(valueOfCalculator);
    }

    function setAnyNumericValue(setValue) {
        valueOfCalculator = parseFloat(setValue);
        console.log(valueOfCalculator);
    }

    return {
        calculateSumOfNumbers,
        calculateMultiplicationOfNumbers,
        calculateSubtractionOfNumbers,
        calculateDivisionOfNumbers,
        setAnyNumericValue,
    }
}