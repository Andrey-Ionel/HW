// 2. Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

for (let i = 10; i <= 100; i = i + 10) {
    const conversionResult = `The cost of the hryvnia to ${i} dollars:\n ${i}$ * 30 = ${i * 30} ₴ \n `;
    console.log(conversionResult);
};