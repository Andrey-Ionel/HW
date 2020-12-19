// 4. Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

const anyNumber = parseInt(prompt('Please enter any number:', 0));

if (isNaN(anyNumber)) {
    alert('Incorrect input');
} else {

    for (let i = 2; i <= anyNumber; i++) {
        if (anyNumber % i === 0) {
            if (anyNumber !== i) {
                const alertResult = `'${anyNumber}' is complex number.`
                alert(alertResult);
                break;
            }
            const alertResult = `'${anyNumber}' is prime.`
            alert(alertResult);
            break;
        }
    }
};