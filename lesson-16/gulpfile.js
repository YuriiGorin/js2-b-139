const { src, dest, parallel, series, watch } = require("gulp");
const less = require("gulp-less");
const ap = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const webpack = require("webpack");
const wpStream = require("webpack-stream");
const clean = require("gulp-clean");
const browserSync =  require("browser-sync").create();
const eslint = require("gulp-eslint");
const gulpIf = require("gulp-if");

function css(production = false) {
    return src("./src/css/**/*.less")
        .pipe(less())
        .pipe(gulpIf(production, ap()))
        .pipe(gulpIf(production, cleanCSS()))
        .pipe(dest("./dist/css"));
}

function js(production = false) {
    const filename = production ? "prod" : "dev";
    const config = require(`./webpack.config/${filename}`);

    return src("./src/js/index.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(wpStream(config, webpack))
        .pipe(dest("./dist/"));
}

function isFixed(file) {
    return file.eslint != null && file.eslint.fixed;
}

function lintAndFix() {
    return src(["./src/js/**/*.js",'!node_modules/**'])
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, dest("./src/js/")));
}

function cleanDist() {
    return src("./dist/", { allowEmpty: true }).pipe(clean());
}

// exports.css = css;
// exports.jsProd = () => buildJS(true);
// exports.jsDev = () => buildJS();

function cssProd() {
    return css(true);
}

function cssDev() {
    return css();
}

function jsProd() {
    return js(true);
}

function jsDev() {
    return js();
}

// production-build
exports.build = series(cleanDist, parallel(cssProd, jsProd));
exports.dev = series(cleanDist, parallel(cssDev, jsDev));
exports.lintAndFix = lintAndFix;

exports.default = () => {
    exports.dev();
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
    });
    watch("./src/css/**/*.less", cssDev).on("change", browserSync.reload);
    watch("./src/js/**/*.js", jsDev).on("change", browserSync.reload);
};
