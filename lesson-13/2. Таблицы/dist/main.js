/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Animal.js":
/*!***********************!*\
  !*** ./src/Animal.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Animal {\n    constructor(n, a) {\n        this.name = n;\n        this.age = a;\n    }\n\n    eat() {\n        console.log(`${this.name} пытается поесть`);\n        return this;\n    }\n\n    sleep() {\n        console.log(`${this.name} пытается поспать`);\n        return this;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animal);\n\n\n//# sourceURL=webpack:///./src/Animal.js?");

/***/ }),

/***/ "./src/Cat.js":
/*!********************!*\
  !*** ./src/Cat.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Animal.js\");\n\nconst countSym = Symbol();\n\nclass Cat extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(...args) {\n        // super() - вызов родительского конструктора\n        super(...args);\n        this[countSym] = 9;\n    }\n\n    // свойство livesCount только для чтения\n    get livesCount() {\n        return this[countSym];\n    }\n\n    get isAlive() {\n        return this[countSym] > 0;\n    }\n\n    meow() {\n        this._checkStatus();\n        console.log(`${this.name} говорит ммяяяяууу!`);\n        return this;\n    }\n\n    kill() {\n        this._checkStatus(\"Что мертво умереть не может\");\n        this[countSym]--;\n        return this;\n    }\n\n    eat() {\n        this._checkStatus();\n        return super.eat();\n    }\n\n    sleep() {\n        this._checkStatus();\n        return super.sleep();\n    }\n\n    _checkStatus(msg = \"Некромантия запрещена\") {\n        if (!this.isAlive) {\n            throw new Error(msg);\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cat);\n\n\n//# sourceURL=webpack:///./src/Cat.js?");

/***/ }),

/***/ "./src/Table.js":
/*!**********************!*\
  !*** ./src/Table.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tableSym = Symbol();\n\nclass Table {\n    constructor({\n        tableClass = \"\",\n        openTableTag = \"\",\n        closeTableTag = \"</table>\",\n        openRowTag = \"<tr>\",\n        closeRowTag = \"</tr>\",\n        openHeadingTag = \"<th>\",\n        closeHeadingTag = \"</th>\",\n        openCellTag = \"<td>\",\n        closeCellTag = \"</td>\",\n    } = {}) {\n\n        if (openTableTag === \"\") {\n            openTableTag = `<table class=\"${tableClass}\">`;\n        }\n\n        this.openTableTag = openTableTag;\n        this.closeTableTag = closeTableTag;\n        this.openRowTag = openRowTag;\n        this.closeRowTag = closeRowTag;\n        this.openHeadingTag = openHeadingTag;\n        this.closeHeadingTag = closeHeadingTag;\n        this.openCellTag = openCellTag;\n        this.closeCellTag = closeCellTag;\n\n        this[tableSym] = [];\n    }\n\n    _addRow(type, cells) {\n        const row = cells.map(value => ({ isHeading: type === \"headings\", value }));\n        this[tableSym].push(row);\n    }\n\n    addHeadingsRow(...cells) {\n        this._addRow(\"headings\", cells);\n        return this;\n    }\n\n    addRow(...cells) {\n        this._addRow(\"data\", cells);\n        return this;\n    }\n\n    generate() {\n        let html = this.openTableTag;\n        for (const row of this[tableSym]) {\n            html += this.openRowTag;\n            for (const cell of row) {\n                html += cell.isHeading ? this.openHeadingTag : this.openCellTag;\n                html += cell.value;\n                html += cell.isHeading ? this.closeHeadingTag : this.closeCellTag;\n            }\n            html += this.closeRowTag;\n        }\n        html += this.closeTableTag;\n        return html;\n    }\n\n    [Symbol.iterator]() {\n        let current = 0;\n        let self = this;\n        return {\n            next() {\n                if (current < self[tableSym].length) {\n                    return {\n                        value: self[tableSym][current++].map(({ value }) => value),\n                        done: false,\n                    };\n                }\n\n                return { done: true };\n            },\n        };\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n\n//# sourceURL=webpack:///./src/Table.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ \"./src/Table.js\");\n\n\nwindow.addEventListener(\"load\", function () {\n\n    const usersContainer = document.querySelector(\"#users\");\n    const example = document.querySelector(\"#example\");\n    const example2 = document.querySelector(\"#example-div\");\n\n    const users = new _Table__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        tableClass: \"table table-bordered table-hover\"\n    });\n\n    users.addHeadingsRow(\"Имя\", \"Возраст\", \"Email\")\n        .addRow(\"Иван\", 39, \"ivan@yandex.ru\")\n        .addRow(\"Светлана\", 19, \"svetko@mail.ru\")\n        .addRow(\"Наталья\", 23, \"nataly@gmail.com\");\n\n    users.addHeadingsRow(\"Имя\", \"Возраст\", \"Email\");\n    users.addRow(\"Иван\", 39, \"ivan@yandex.ru\");\n    users.addRow(\"Светлана\", 19, \"svetko@mail.ru\");\n    users.addRow(\"Наталья\", 23, \"nataly@gmail.com\");\n\n    for (const user of users) {\n        console.log(user);\n    }\n\n    // const it = users[Symbol.iterator]();\n    // while (true) {\n    //     let { value, done } = it.next();\n    //     if (done) break;\n    //     console.log(value);\n    // }\n    //\n    // usersContainer.innerHTML = users.generate();\n    //\n    // console.log([...users]);\n\n    // ----------------------------------------------------------------------------\n\n    const table2 = new _Table__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    table2.addHeadingsRow(\"Простая\", \"Таблица\");\n    table2.addRow(\"Какой-то текст\", 234234234);\n    table2.addRow(\"Еще что-нибудь\", 898989);\n    table2.addRow(\"И напоследок\", 346587);\n    example.innerHTML = table2.generate();\n    table2.addRow(\"И напоследок\", 346587);\n\n    // ----------------------------------------------------------------------------\n\n    const table3 = new _Table__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        openTableTag: '<div class=\"card card-default\"><div class=\"card-body\">',\n        closeTableTag: '</div></div>',\n        openRowTag: '<div class=\"d-flex\">',\n        closeRowTag: '</div>',\n        openCellTag: '<div class=\"cell\">',\n        closeCellTag: '</div>',\n        openHeadingTag: '<div class=\"cell cell--heading\">',\n        closeHeadingTag: '</div>'\n    });\n\n    table3.addHeadingsRow(\"Тестируем\", \"Таблицу\", \"Из блоков\", \"div\");\n    table3.addRow(\"vnvbnvbn\", 456456, \"fghfghfgh\", 1234);\n    table3.addRow(\"bvnvbnvbn\", 2222, \"ghjjje34\", 66643);\n    table3.addRow(\"dasdasda  sdfsdf\", 5555, \"ghghfgh\", 7743);\n    example2.innerHTML = table3.generate();\n\n});\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ \"./src/Cat.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\nconst test = new _Cat__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"test\", 2);\n// попробовать выполнить код\ntry {\n    test.eat().meow().kill().kill().kill().kill().kill().kill().kill().kill().kill();\n    console.log(test.livesCount);\n\n    test.eat();\n    test.eat();\n    test.eat();\n} catch(e) {\n    // этот блок выполняется только если возникла ошибка\n    alert(e);\n}\n\nconsole.log(typeof _Cat__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconsole.log(test.__proto__ === _Cat__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nconst parent = {\n  eat() {\n      console.log(\"parent eat\");\n  }\n};\nconst mock = {\n    _checkStatus() {\n        console.log(\"check из mock\");\n        return true;\n    },\n    name: \"mock\",\n};\n\nObject.setPrototypeOf(mock, parent);\n\n// mock.eat = Cat.prototype.eat\nmock.eat = test.eat;\nmock.eat();\n\nmock.__proto__.eat();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });