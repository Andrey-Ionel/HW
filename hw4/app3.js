// 3. Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const anyNumber = parseInt(prompt('Please enter any number:', 0));

if (isNaN(anyNumber)) {
    alert('Incorrect input');
} else {

    for (let i = 1; i <= 100; i++) {
        const powerNumber = Math.pow(i, 2);
        if (powerNumber <= anyNumber) {
            const powerNumberResult = `The square of the number '${i}' = '${powerNumber}' that does not exceed the entered number '${anyNumber}'.`;
            console.log(powerNumberResult);
        } else {
            break;
        };
    };
};            