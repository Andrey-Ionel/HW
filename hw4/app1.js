// 1. Вывести в консоль числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….)

let numberStep = '';

for (i = 20; i <= 30; i++) {
    if (i === 30) {
        numberStep += i;
    }
    else {
        numberStep += `${i} ${i + 0.5} `;
    };
};
const logResult = `Numbers from 20 to 30 when we use step 0.5 = ${numberStep}`;
console.log(logResult);