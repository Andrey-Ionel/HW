// 1. Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру и информацию о том чётная она, или нет.

const anyNumber = Number(prompt('Please enter any number:', 0));

const lastNumber = anyNumber % 10;
const evenOrOddNumber = anyNumber % 2;

if(evenOrOddNumber) {
    const alertResult = `Your number is not even. 
The last number is '${lastNumber}'.`;
    alert(alertResult);
} else {
        const alertResult = `Your number is even. 
The last number is '${lastNumber}'.`;
    alert(alertResult);
};
