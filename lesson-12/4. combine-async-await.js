"use strict";
// используем версию File API, в которой функции возвращают промисы
const fs = require("fs").promises;

const srcDir = `${__dirname}/src/`;

(async function() {
    try {
        const files = await fs.readdir(srcDir);
        let css = "";

        for (const file of files) {
            const content = await fs.readFile(`${srcDir}/${file}`, "utf-8");
            css += content;
        }

        await fs.writeFile(`${__dirname}/dist/async-styles.css`, css);
        console.log("Запись файла завершена");
    } catch(e) {
        console.error("Ooops\n", e);
    }

})();

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
