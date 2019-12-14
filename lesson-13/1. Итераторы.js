"use strict";

const str = "something";
const arr = [1, 6, 3];

console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]);

// скопировали ссылку на функцию-итератор
// const it = str[Symbol.iterator];

// вызов функции-итератора вернул объект
const it = str[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

while (true) {
    const { value, done } = it.next();
    if (done) break;
    console.log(value);
}


