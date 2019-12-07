"use strict";
const EventEmitter = require("events");
const fs = require("fs");

module.exports = class Combiner extends EventEmitter {
    constructor(options) {
        super();
        this._src = options.src;
        this._dist = options.dist;
        this._content = "";
        this._current = 0;
        this._files = [];
    }

    run() {
        // setImmediate(() => this._readDir());
        this._readDir();
    }

    _readDir() {
        fs.readdir(this._src, (err, list) => {
            if (err) return console.error(err);
            this._files = list;
            this._readFile();
        });
    }

    get _currentFile() {
        return `${this._src}/${this._files[this._current]}`
    }

    _readFile() {
        if (this._current < this._files.length) {
            fs.readFile(this._currentFile, "utf-8", (err, content) => {
                if (err) return console.error(err);
                this._content += content;
                this._current++;
                this._readFile();
            });
        } else {
            this._writeFile();
        }
    }

    _writeFile() {
        fs.writeFile(this._dist, this._content, (err) => {
            if (err) return console.log(err);
            this.emit("completed");
        });
    }
};
