"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Film = /** @class */ (function () {
    function Film() {
        this._id = null;
        this.isPublic = false;
        this.poster = null;
        this.poster_thumb = null;
        this.name = null;
        this.alternateName = null;
        this.description = null;
        this.type = null;
        this.year = null;
        this.slogan = null;
        this.counrty = [];
        this.regisers = [];
        this.scenarists = [];
        this.produsers = [];
        this.operators = [];
        this.compositors = [];
        this.hudognik = [];
        this.montag = [];
        this.genre = [];
        this.time = null;
        this.kp = null;
        this.timespan = Date.now();
        this.actors = [];
        this.features = [];
        this.count = 0;
    }
    return Film;
}());
exports.Film = Film;
var FilmType = /** @class */ (function () {
    function FilmType() {
    }
    FilmType.film = "фильм";
    FilmType.serial = "сериал";
    return FilmType;
}());
exports.FilmType = FilmType;
exports.Genres = [
    'аниме',
    'биография',
    'боевик',
    'вестерн',
    'военный',
    'детектив',
    'детский',
    'драма',
    'история',
    'комедия',
    'криминал',
    'мелодрама',
    'музыка',
    'мультфильм',
    'мюзикл',
    'приключения',
    'семейный',
    'спорт',
    'триллер',
    'ужасы',
    'фантастика',
    'фэнтези'
];
