import { getFilms, getImage } from "./api";

const $ = function(selector) {
    return document.querySelector(selector);
};

const renderHtml = function(template, data) {
    let html = template;
    for (const [key, value] of Object.entries(data)) {
        const rg = new RegExp(`\{%${key}%\}`, "g");
        html = html.replace(rg, value);
    }
    return html;
};


export default function() {
    const loadBtn = $("#loadFilms");
    const cardTemplateContainer = $("#card-template");
    const searchInput = $("#searchInput");
    const cardsContainer = $(".cards");
    const loaderContainer = $(".loaderCard__Container");
    const cardTemplate = cardTemplateContainer.innerHTML;
    const films = [];
    const filmsMap = new WeakMap();
    let loadingInProgress = false;

    const filterFilms = function(film) {

    };

    const displayFilms = function() {
        for (const film of films) {

        }
    };

    const loadFilms = async function () {

        if (loadingInProgress) return;

        loadingInProgress = true;
        loaderContainer.style.display = "block";
        films.push(...await getFilms());
        loaderContainer.style.display = "none";

        displayFilms();

        loadingInProgress = false;
    };


    loadFilms();
    loadBtn.addEventListener("click", loadFilms);
    searchInput.addEventListener("input", displayFilms);
}
