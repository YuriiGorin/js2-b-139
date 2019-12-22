const { src, dest, parallel, series } = require("gulp");
const less = require("gulp-less");
const ap = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const webpack = require("webpack");
const wpStream = require("webpack-stream");
const clean = require("gulp-clean");

function css() {
    return src("./src/css/**/*.less")
        .pipe(less())
        .pipe(ap())
        .pipe(cleanCSS())
        .pipe(dest("./dist/css"));
}

function buildJS(production = false) {
    const filename = production ? "prod" : "dev";
    const config = require(`./webpack.config/${filename}`);

    return src("./src/js/index.js")
        .pipe(wpStream(config, webpack))
        .pipe(dest("./dist/"));
}

function cleanDist() {
    return src("./dist/", { allowEmpty: true }).pipe(clean());
}

// exports.css = css;
// exports.jsProd = () => buildJS(true);
// exports.jsDev = () => buildJS();

// production-build
exports.build = series(cleanDist, parallel(css, () => buildJS(true)));
