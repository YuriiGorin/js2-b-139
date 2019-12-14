"use strict";
// используем версию File API, в которой функции возвращают промисы
const fs = require("fs").promises;

const srcDir = `${__dirname}/src/`;

const combineCss = function* () {
    try {
        const files = yield fs.readdir(srcDir);
        let css = "";

        for (const file of files) {
            const content = yield fs.readFile(`${srcDir}/${file}`, "utf-8");
            css += content;
        }

        yield fs.writeFile(`${__dirname}/dist/yield-styles.css`, css);
        console.log("Запись файла завершена");
    } catch(e) {
        console.error("Ooops\n", e);
    }
};

const run = function(gen) {
    const it = gen();
    const runNext = (val) => {
        const { value: promise, done } = it.next(val);
        if (!done) {
            promise.then(runNext)
        }
    };
    runNext();
};

run(combineCss);
