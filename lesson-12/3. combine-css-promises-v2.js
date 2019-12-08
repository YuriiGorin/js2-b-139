"use strict";
// используем версию File API, в которой функции возвращают промисы
const fs = require("fs").promises;

const srcDir = `${__dirname}/src/`;

const getFileContents = function(files) {
   let css = "";
   return files.reduce((acc, file) => {
       return acc
           .then(() => fs.readFile(file, "utf-8"))
           .then(content => (css += content));
   }, Promise.resolve())
};

fs.readdir(srcDir)
    .then(files => files.map(file => `${srcDir}/${file}`))
    .then(getFileContents)
    .then(content => fs.writeFile(`${__dirname}/dist/styles.promises2.css`, content))
    .then(() => console.log("Запись файла завершена"))
    .catch(console.error);
