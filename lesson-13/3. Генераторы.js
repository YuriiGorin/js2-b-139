"use strict";

// function* random() {
//     while (true) {
//         yield Math.floor(Math.random() * 100);
//     }
// }
//
// let counter = 10;
// for (const n of random()) {
//     console.log(n);
//     counter--;
//     if (counter <= 0) break;
// }


function* limitedRandom(n = 1) {
    while (n-- > 0) {
        yield Math.floor(Math.random() * 100);
    }
}

for (const n of limitedRandom(5)) {
    console.log(n);
}

// console.log(limitedRandom(1).next());

// function* test() {
//     console.log("первый запуск генератора");
//     yield 3;
//     console.log(".... что-то произошло... ???? ");
//     yield 2;
//     console.log(".... что-то произошло снова... ???? ");
//     yield 1;
//
//     console.log("а сейчас?");
// }
//
// const it = test();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//
// console.log(it.next());
// console.log(it.next());
//
// console.log("---------");
// for (let n of test()) {
//    // console.log("Извлекли значение");
//     console.log(n);
// }
//
// console.log(test());

const generator = function* () {
    const a = yield 3;
    console.log("Было получено значение a = ", a);

    const b = yield 2;
    console.log("Было получено значение b = ", b);

    const c = yield 1;
    console.log("Было получено значение c = ", c);

    console.log("Мы знаем все значения: ", a, b, c);
};


const gen = generator();

console.log("Извлекли 1 значение", gen.next(30));
console.log("Извлекли 2 значение", gen.next(11));
console.log("Извлекли 3 значение", gen.next(55));
console.log("Последняя попытка", gen.next(1500));
