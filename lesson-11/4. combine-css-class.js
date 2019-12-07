"use strict";
const Combiner = require("./Combiner");
const comb = new Combiner({
    src: `${__dirname}/src/`,
    dist: `${__dirname}/dist/styles3.css`,
});

comb.on("completed", () => {
    console.log("Запись файла завершена");
});

comb.run();
