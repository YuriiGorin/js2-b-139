// конфиг для dev-версии
const config = require("./common.webpack.config");
const merge = require("webpack-merge");
const path = require("path");

// экспортируем новый объект с конфигом вебпака, которые получен путём слияния
// основного конфига и уточнений для dev-режима
module.exports = merge.smart(config, {
    mode: "development",
    watch: true,
    devtool: "eval",
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    devServer: {
        port: 6825,
        // hot: true,
        liveReload: true,
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
    },
});
