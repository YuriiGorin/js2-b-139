const tableSym = Symbol();

class Table {
    constructor({
        tableClass = "",
        openTableTag = "",
        closeTableTag = "</table>",
        openRowTag = "<tr>",
        closeRowTag = "</tr>",
        openHeadingTag = "<th>",
        closeHeadingTag = "</th>",
        openCellTag = "<td>",
        closeCellTag = "</td>",
    } = {}) {

        if (openTableTag === "") {
            openTableTag = `<table class="${tableClass}">`;
        }

        this.openTableTag = openTableTag;
        this.closeTableTag = closeTableTag;
        this.openRowTag = openRowTag;
        this.closeRowTag = closeRowTag;
        this.openHeadingTag = openHeadingTag;
        this.closeHeadingTag = closeHeadingTag;
        this.openCellTag = openCellTag;
        this.closeCellTag = closeCellTag;

        this[tableSym] = [];
    }

    _addRow(type, cells) {
        const row = cells.map(value => ({ isHeading: type === "headings", value }));
        this[tableSym].push(row);
    }

    addHeadingsRow(...cells) {
        this._addRow("headings", cells);
        return this;
    }

    addRow(...cells) {
        this._addRow("data", cells);
        return this;
    }

    generate() {
        let html = this.openTableTag;
        for (const row of this[tableSym]) {
            html += this.openRowTag;
            for (const cell of row) {
                html += cell.isHeading ? this.openHeadingTag : this.openCellTag;
                html += cell.value;
                html += cell.isHeading ? this.closeHeadingTag : this.closeCellTag;
            }
            html += this.closeRowTag;
        }
        html += this.closeTableTag;
        return html;
    }

    [Symbol.iterator]() {
        let current = 0;
        let self = this;
        return {
            next() {
                if (current < self[tableSym].length) {
                    return {
                        value: self[tableSym][current++].map(({ value }) => value),
                        done: false,
                    };
                }

                return { done: true };
            },
        };
    }
}

export default Table;
