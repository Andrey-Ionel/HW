// 3. Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа которое ввёл пользователь.

const anyNumber = parseInt(prompt('Please enter any number:', 0));

if (isNaN(anyNumber)) {
    alert('Incorrect input');
} else {
    let powerNumber = '';

    for (i = 1; i * i <= anyNumber; i++) {
        powerNumber = `The square of the number '${i}' = '${i * i}' that does not exceed the entered number '${anyNumber}'.`;
        console.log(powerNumber);
        if (i === 100) {
            break;
        };
    };
};            