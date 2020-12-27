// 5. Дано некоторое число. 
// Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя).

const anyNumber = parseInt(prompt('Please enter any number:', 0));

if (isNaN(anyNumber)) {
    alert('Incorrect input');
} else {

    for (let i = 1; i < anyNumber; i++) {
        const powerThree = Math.pow(3, i);
        if (powerThree === anyNumber) {
            const powerNumber = `When raising (3^i), you can get '${anyNumber}'.`;
            alert(powerNumber);
            break;
        } else if (powerThree > anyNumber) {
            const powerNumber = `When raising (3^i), you can not get '${anyNumber}'.`;
            alert(powerNumber);
            break;
        };
    };
};