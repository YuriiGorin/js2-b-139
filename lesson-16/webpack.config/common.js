// общий конфиг для dev и prod сборок
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // точка "выхода", т.е. то, что должно получиться после сборки
    output: {
        filename: "index.js",
    },
    // массив с плагинами, которые серьезно модифицируют функциональность вебпака
    plugins: [
        new HtmlWebpackPlugin({
            // filename: "../index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            title: "Сборка с вебпаком",
            meta: {
                viewport: "width=device-width, initial-scale=1.0",
            },
            hash: true,
        }),
    ],
};
