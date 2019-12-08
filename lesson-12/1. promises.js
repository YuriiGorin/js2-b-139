"use strict";
const fs = require("fs");

const srcDir = `${__dirname}/src/`;

const readFilesList = function(src) {
    // фукция-executor используется для запуска асинхронной операции
    // задача промиса - извлечь и передать внешнему коду значение асинхронной операции
    return new Promise((resolve, reject) => {
        console.log("Запущен executor");
        // запустили асинхронную фукцию (вызов произойдёт сразу при создании объекта-промиса
        fs.readdir(src, (err, files) => {
            // если произошла ошибка, то сообщаем об этом промису
            // путём вызова служебного колбека, т.е. переключаем промис в сосяние rejected
            if (err) return reject(err);
            // а если нет, то передаём полученное значение (список файлов) и переключаем промис
            // в состояние fullfilled
            resolve(files);
        });
    });
};

// const p = readFilesList(srcDir+"sdfsdf");
// console.log(p);
//
// console.log(1);
// // data - это те данные, которые были переданы в resolve()
// p.then((data) => console.log(data))
//     .catch((err) => console.error("Oooops! \n" + err));
// console.log(2);
//
// p.then(console.log);

// console.log(1);
// readFilesList(srcDir)
//     .then(console.log)
//     .then(() => console.log("Ololololo"))
//     .catch(console.error);
// console.log(2);


// вызов then и catch всегда возвращает новый промис
// а колбек всегда выполняется асихнронно
// const p1 = readFilesList(srcDir);
// const p2 = p1.then(console.log);
// p2.then(console.log);
// const p3 = p2.catch(console.error);
//
// console.log(p1 === p2);
// console.log(p2 === p3);
// console.log(p1 === p3);


console.log(1);
readFilesList(srcDir)
    .then((data) => { console.log(data); return data.map(str => str.toUpperCase()) })
    .then(console.log)
    .catch(console.error);
console.log(2);
