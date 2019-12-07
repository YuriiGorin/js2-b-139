"use strict";
const fs = require("fs");
const EventEmitter = require("events");
class CombineEventEmitter extends EventEmitter {}

const srcDir = `${__dirname}/src/`;
const bus = new CombineEventEmitter();
let css = "";
let files = [];
let current = 0;

bus.on("reading-dir-started", () => {
    fs.readdir(srcDir, (err, list) => {
        if (err) return console.error(err);
        files = list;
        bus.emit("reading-file-started");
    });
});

bus.on("reading-file-started", () => {
    if (current < files.length) {
        fs.readFile(`${srcDir}/${files[current]}`, "utf-8", (err, content) => {
            if (err) return console.error(err);
            css += content;
            current++;
            bus.emit("reading-file-started");
        });
    } else {
        bus.emit("writing-file-started");
    }
});

bus.on("writing-file-started", () => {
    fs.writeFile(`${__dirname}/dist/styles2.css`, css, (err) => {
        if (err) return console.log(err);
        console.log("CSS успешно записан");
    });
});

// возбуждение события
bus.emit("reading-dir-started");
