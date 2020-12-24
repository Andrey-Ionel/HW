// 1.  Создать массив, длину и элементы которого задаёт пользователь (строковые значения). 
// Затем отсортировать массив по возрастанию. 
// Затем, удалить элементы из массива с 2 по 4 (если длина меньше 4 вывести сообщение). 
// По мере изменений, выводить содержимое массива на страницу.

const arrayOfValue = [];
let lenghtOfArray = arrayOfValue.length;
lenghtOfArray = parseInt(prompt('Please enter the lenght of the array from 1 to 20.', 1));

if (isNaN(lenghtOfArray)) {
    alert('Incorrect input');
} else {
    if (lenghtOfArray === 0) {
        alert('Cancel');
    } else if (lenghtOfArray > 20) {
        alert('Array is too long.');
    } else {
        const lenghtResult = `The lenght of the array is '${lenghtOfArray}'.`
        console.log(lenghtResult);
        const falResulte = `The lenght of the array is '0'.`
        for (i = 0; i < lenghtOfArray; i++) {
            arrayOfValue[i] = String(prompt('Please enter array value ' + (i + 1)));
            if (arrayOfValue[i] === '' || arrayOfValue[i] === ' ') {
                alert('Incorrect input');
                arrayOfValue.splice(0, lenghtOfArray);
                console.log(falResulte);
                break;
            } else if (arrayOfValue[i] === 'null') {
                alert('Cancel');
                arrayOfValue.splice(0, lenghtOfArray);
                console.log(falResulte);
                break;
            } else {
                const resultOfCreating = `Result ${arrayOfValue[i]} array is `
                console.log(resultOfCreating);
                console.log(arrayOfValue);
            }
        }
    }
};
const sortResult = `The array has been sorted`
console.log(sortResult);
console.log(arrayOfValue.sort());
if (lenghtOfArray < 4) {
    const deleteResult = `Cannot delete elements from '2 to 4' because the array lenght is less then '4'.`
    console.log(deleteResult);
} else {
    arrayOfValue.splice(1, 3);
    const resultOfDeletedElements = `Elements from '2 to 4' have been removed`
    console.log(resultOfDeletedElements);
}
console.log(arrayOfValue);