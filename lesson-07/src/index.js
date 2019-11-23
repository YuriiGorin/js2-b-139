import axios from "axios";
import init from "./init.js";

window.addEventListener("load", () => {
    axios.get("./data.json")
        .then((res) => {
            console.log(res.data);
            init(res.data);
        });

});
