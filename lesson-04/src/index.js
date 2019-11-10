import {numbers, names, students} from "./data";
import * as my from "./my";

// функция map строит новый массив, в который попадает КАЖДЫЙ элемент
// исходного массива, но его значение обработано указанным колбэком
// и в новый массив записаны значения колбэков
console.log(numbers.map(n => n - 5));
// исходный массив не меняется
console.log(numbers);

// фильтр формирует новый массив, в который попадают только те элементы
// исходного массива, для которых вызов колбэка вернут true
// следовательно, колбэк должен возвращать true или false
console.log(names.filter(name => name.length > 4));

// исходный массив не меняется
console.log(names);

console.log("--------------");

// работает аналогично обычному map
console.log(my.map(numbers, x => x * x));

console.log(my.filter(numbers, n => n > 0));

my.forEach(names,(item, index) => {
    console.log(`Элемент ${index} равен ${item}`);
});

// names.forEach(alert);

const firstGirl = students.find(item => item.sex === "f");
console.log(firstGirl);

console.log(numbers.reduce((acc, n) => acc + n));

console.log(my.reduce(numbers, (a, n) => a + n));


console.log(my.reduce(numbers, (acc, v) => acc + v, 100));

console.log(my.filterReduce([5, -4, 1], x => x > 0));
