"use strict";
const fs = require("fs");

const srcDir = `${__dirname}/src/`;

const readFilesList = function(src) {
    return new Promise((resolve, reject) => {
        fs.readdir(src, (err, files) => {
            if (err) return reject(err);
            resolve(files);
        });
    });
};

const readFile = function(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf-8", (err, content) => {
            if (err) return rej(err);
            res(content);
        });
    });
};

const writeFile = function(path, content) {
    return new Promise((res, rej) => {
        fs.writeFile(path, content, (err) => {
            if (err) return rej(err);
            // вызвать можно без аргумента, но вызывать нужно, чтобы переключить состояние промиса
            res();
        });
    });
};

// const getFileContents = function(files) {
//    let css = "";
//    let start = Promise.resolve();
//    for (const file of files) {
//        start = start
//            .then(() => readFile(`${srcDir}/${file}`))
//            .then(content => (css += content));
//    }
//    return start.then(() => css);
// };

const getFileContents = function(files) {
   let css = "";
   return files.reduce((acc, file) => {
       return acc
           .then(() => readFile(file))
           .then(content => (css += content));
   }, Promise.resolve())
};

// let css = "";
// let list = [];
//
// readFilesList(srcDir)
//     .then(files => (list = files, files))
//     .then(files => readFile(`${srcDir}/${files[0]}`))
//     .then(content => (css += content))
//     .then(() => readFile(`${srcDir}/${list[1]}`))
//     .then(content => (css += content))
//     .then(() => writeFile(`${__dirname}/dist/styles.promises.css`, css))
//     .then(() => console.log("Запись файла завершена"))
//     .catch(console.error);


readFilesList(srcDir)
    .then(files => files.map(file => `${srcDir}/${file}`))
    .then(getFileContents)
    .then(content => writeFile(`${__dirname}/dist/styles.promises.css`, content))
    .then(() => console.log("Запись файла завершена"))
    .catch(console.error);
