// 2. Один доллар стоит 30 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

const oneUSDInUa = 30;
for (let i = 10; i <= 100; i = i + 10) {
    const convertingDollarToHrivnia = i * 30;
    const conversionResult = `The cost of the hryvnia to ${i} dollars:\n ${i}$ * ${oneUSDInUa} = ${convertingDollarToHrivnia} ₴ \n `;
    console.log(conversionResult);
};