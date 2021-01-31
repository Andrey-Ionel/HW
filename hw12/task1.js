// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький(50 тугриков, 20 калорий)
// средний(75 тугриковб 30 каллорий)
// большой(100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром(+ 10 тугриков, + 20 калорий)
// салатом(+ 20 тугриков, + 5 калорий)
// картофелем(+ 15 тугриков, + 10 калорий)
// посыпать приправой(+ 15 тугриков, 0 калорий)
// полить майонезом(+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем.

// Напишите программу, расчитывающую стоимость и калорийность гамбургера.Используй ООП подход(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

// Пример работы кода:

// const hamburger = new Hamburger(SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(TOPPING_MAYO);
// hamburger.addTopping(TOPPING_POTATO);

// console.log("Price with sauce: " + hamburger.getPrice());
// console.log("Callories with sauce: " + hamburger.getCallories());

const SIZE_SMALL = {
    hamburgerCallories: 20,
    hamburgerPrice: 50
};
const SIZE_MEDIUM = {
    hamburgerCallories: 30,
    hamburgerPrice: 75
};
const SIZE_BIG = {
    hamburgerCallories: 40,
    hamburgerPrice: 100
};
const TOPPING_CHEESE = {
    hamburgerCallories: 20,
    hamburgerPrice: 10
};
const TOPPING_SALAD = {
    hamburgerCallories: 5,
    hamburgerPrice: 20
};
const TOPPING_POTATO = {
    hamburgerCallories: 10,
    hamburgerPrice: 15
};
const TOPPING_FLAVORING = {
    hamburgerCallories: 0,
    hamburgerPrice: 15
};
const TOPPING_MAYO = {
    hamburgerCallories: 5,
    hamburgerPrice: 20
};

let hamburgerPrice = 0;
let hamburgerCallories = 0;

function Hamburger(hamburgerSize) {

    this.getPrice = () => {
        hamburgerPrice += hamburgerSize.hamburgerPrice;
        return hamburgerPrice;
    }

    this.getCallories = () => {
        hamburgerCallories += hamburgerSize.hamburgerCallories;
        return hamburgerCallories;
    }

    this.addTopping = (topping) => {
        hamburgerPrice += topping.hamburgerPrice;
        hamburgerCallories += topping.hamburgerCallories;
    }
}