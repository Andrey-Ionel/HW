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

// console.log("Price with sauce: “ + hamburger.getPrice());
// console.log("Callories with sauce: “ + hamburger.getCallories());

const SIZE_SMALL = 'SIZE_SMALL';
const SIZE_MEDIUM = 'SIZE_MEDIUM';
const SIZE_BIG = 'SIZE_BIG';
const TOPPING_CHEESE = 'TOPPING_CHEESE';
const TOPPING_SALAD = 'TOPPING_SALAD';
const TOPPING_POTATO = 'TOPPING_POTATO';
const TOPPING_FLAVORING = 'TOPPING_FLAVORING';
const TOPPING_MAYO = 'TOPPING_MAYO';

let hamburgerPrice = 0;
let hamburgerCallories = 0;

function Hamburger(hamburgerSize) {

    this.getPrice = function () {
        switch (hamburgerSize) {
            case SIZE_SMALL:
                hamburgerPrice += 50;
                break;
            case SIZE_MEDIUM:
                hamburgerPrice += 75;
                break;
            case SIZE_BIG:
                hamburgerPrice += 100;
                break;
        }
        return hamburgerPrice;
    }

    this.getCallories = function () {
        switch (hamburgerSize) {
            case SIZE_SMALL:
                hamburgerCallories += 20;
                break;
            case SIZE_MEDIUM:
                hamburgerCallories += 30;
                break;
            case SIZE_BIG:
                hamburgerCallories += 40;
                break;
        }
        return hamburgerCallories;
    }

    this.addTopping = function (toppingType) {
        switch (toppingType) {
            case TOPPING_CHEESE:
                hamburgerPrice += 10;
                hamburgerCallories += 20;
                break;
            case TOPPING_SALAD:
            case TOPPING_MAYO:
                hamburgerPrice += 20;
                hamburgerCallories += 5;
                break;
            case TOPPING_POTATO:
                hamburgerPrice += 15;
                hamburgerCallories += 10;
                break;
            case TOPPING_FLAVORING:
                hamburgerPrice += 15;
                hamburgerCallories += 0;
                break;
        }
        return {
            hamburgerPrice,
            hamburgerCallories
        }
    }
}