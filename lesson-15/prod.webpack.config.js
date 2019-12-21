// конфиг только для production сборки
const config = require("./common.webpack.config");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ap = require("autoprefixer");

const postCssConfig = {
    loader: "postcss-loader",
    options: {
        plugins: [ap()],
    },
};

module.exports = merge.smart(config, {
    mode: "production",
    // генерация карт в отдельных файлах
    devtool: "source-map",
    // описание того, как собирать модуль
    module: {
        // здесь перечисляются загрузчики (loaders) для обработки файлов
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", postCssConfig],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,  "css-loader", "less-loader", postCssConfig],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
});
