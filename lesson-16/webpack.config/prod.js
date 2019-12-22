// конфиг только для production сборки
const config = require("./common");
const merge = require("webpack-merge");

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
                query: {
                    presets:[["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3 }]]
                },
            },
        ],
    },
});
