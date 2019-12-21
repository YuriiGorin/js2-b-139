import _ from "lodash";
import css from "../css/index.less";

const list = [5, 1, 2, 3, 6, 10, 11, 5, 3, 2];
const parts = _.chunk(list, 3);

window.addEventListener("load", () => {
    document.body.style.border = "2px solid green";
    for (const [a,b,c] of parts) {
        console.log(a + b + c);
    }
    // undefined();
});
