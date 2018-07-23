"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var film_model_1 = require("./film.model");
var Films = /** @class */ (function () {
    function Films() {
        this.films = [];
    }
    return Films;
}());
exports.Films = Films;
var IndexFilms = /** @class */ (function () {
    function IndexFilms() {
        this.newFilms = [];
        this.newSerials = [];
        this.randomFilms = [];
        this.popularFilms = [];
        this.popularSerials = [];
    }
    return IndexFilms;
}());
exports.IndexFilms = IndexFilms;
var Pagination = /** @class */ (function () {
    function Pagination() {
        this.itemsPerPage = 10;
        this.currentPage = 1;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
var FilmFilter = /** @class */ (function () {
    function FilmFilter() {
        this.genre = [];
        this.page = 1;
        this.sortBy = "timespan" /* date */;
        this.type = film_model_1.FilmType.film;
    }
    return FilmFilter;
}());
exports.FilmFilter = FilmFilter;
