"use strict";

async function fn() {
    console.log("test");
    return 100500;
}

// это особая разновидность функций
console.log(fn);

Promise.resolve("promise").then(console.log);
setTimeout(() => console.log("timeout"), 0);
console.log(fn());


fn().then(result => console.log("olololo", result));

