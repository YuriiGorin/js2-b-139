"use strict";
const fs = require("fs");
const srcDir = `${__dirname}/src/`;

// fs.readdir(srcDir, (err, files) => {
//     if (err) return console.log(err);
//
//     let css = "test";
//     for (const file of files) {
//         fs.readFile(`${srcDir}/${file}`, "utf-8", (err, content) => {
//             if (err) return console.log(err);
//             css += content;
//             console.log(content);
//         });
//     }
//
//     fs.writeFile(`${__dirname}/dist/styles.css`, css, (err) => {
//         if (err) return console.log(err);
//         console.log("CSS успешно записан");
//     });
// });


const combineCssFiles = function(list, cb) {
    let css = "";
    const readNextFile = function(i) {
        fs.readFile(`${srcDir}/${list[i]}`, "utf-8", (err, content) => {
            if (err) return cb(err);
            css += content;

            if (i < list.length - 1) {
                return readNextFile(i + 1);
            } else {
                cb(null, css);
            }
        });
    };

    readNextFile(0);
};


fs.readdir(srcDir, (err, files) => {
    if (err) return console.log(err);

    combineCssFiles(files, (err, content) => {
        fs.writeFile(`${__dirname}/dist/styles.css`, content, (err) => {
            if (err) return console.log(err);
            console.log("CSS успешно записан");
        });
    });
});
