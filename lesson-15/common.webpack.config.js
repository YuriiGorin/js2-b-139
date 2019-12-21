// общий конфиг для dev и prod сборок
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // точка "входа", т.е. сборка начинается с этого файла
    // точек входа может быть несколько
    entry: "./src/js/main.js",
    // точка "выхода", т.е. то, что должно получиться после сборки
    output: {
        // path.resolve объединяет ПУТИ файлов в один
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    // массив с плагинами, которые серьезно модифицируют функциональность вебпака
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            title: "Сборка с вебпаком",
            meta: {
                viewport: "width=device-width, initial-scale=1.0",
            },
            hash: true,
        }),
        new CleanWebpackPlugin(),
    ],
};
