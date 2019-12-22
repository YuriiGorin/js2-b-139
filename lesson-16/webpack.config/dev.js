// конфиг для dev-версии
const config = require("./common");
const merge = require("webpack-merge");
const path = require("path");

// экспортируем новый объект с конфигом вебпака, которые получен путём слияния
// основного конфига и уточнений для dev-режима
module.exports = merge.smart(config, {
    mode: "development",
    devtool: "eval",
});
