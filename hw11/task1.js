// Написать функцию createCalculator, чтобы ее можно было использовать таким образом

// const calc = createCalculator(10);

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); // 100

function createCalculator(initialValue) {
    let valueOfCalculator = parseFloat(initialValue);

    const calculateSumOfNumbers = (sum) => valueOfCalculator += parseFloat(sum);

    const calculateMultiplicationOfNumbers = (multiplication) => valueOfCalculator *= parseFloat(multiplication);

    const calculateSubtractionOfNumbers = (subtraction) => valueOfCalculator -= parseFloat(subtraction);

    const calculateDivisionOfNumbers = (division) => valueOfCalculator /= parseFloat(division);

    const setAnyNumericValue = (setValue) => valueOfCalculator = parseFloat(setValue);

    const showCalculatorLog = () => console.log(valueOfCalculator);

    return {
        calculateSumOfNumbers,
        calculateMultiplicationOfNumbers,
        calculateSubtractionOfNumbers,
        calculateDivisionOfNumbers,
        setAnyNumericValue,
        showCalculatorLog
    }
}