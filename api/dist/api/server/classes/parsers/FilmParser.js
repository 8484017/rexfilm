"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio = require("cheerio");
var film_model_1 = require("../../../../models/film.model");
var FilmParser = /** @class */ (function () {
    function FilmParser(html, id) {
        this.html = html;
        this.id = id;
        this.film = new film_model_1.Film();
        this.$ = cheerio.load(html);
    }
    FilmParser.prototype.getFilm = function () {
        try {
            this.film._id = this.id;
            this.film.name = this.getName();
            this.film.alternateName = this.getAlternateName();
            this.film.type = this.getType();
            this.film.description = this.getDescription();
            this.film.year = this.getYear();
            this.film.counrty = this.getCountry();
            this.film.slogan = this.getSlogan();
            this.film.regisers = this.getPeoples('режиссер');
            this.film.scenarists = this.getPeoples('сценарий');
            this.film.produsers = this.getPeoples('продюсер');
            this.film.operators = this.getPeoples('оператор');
            this.film.compositors = this.getPeoples('композитор');
            this.film.hudognik = this.getPeoples('художник');
            this.film.montag = this.getPeoples('монтаж');
            this.film.genre = this.getGenre();
            this.film.time = this.getTime();
            this.film.kp = this.getKP();
            this.film.actors = this.getActors();
            this.film.features = this.getFeatures();
            this.film.poster = this.getPoster();
            return this.film;
        }
        catch (error) {
            return null;
        }
    };
    FilmParser.prototype.getName = function () {
        return this.$(".moviename-big").first()
            .contents()
            .first()
            .text().trim();
    };
    FilmParser.prototype.getAlternateName = function () {
        return this.$("*[itemprop = 'alternativeHeadline']").first()
            .contents()
            .first()
            .text().trim();
    };
    FilmParser.prototype.getType = function () {
        if (this.$("title").text().includes("сериал")) {
            return film_model_1.FilmType.serial;
        }
        else {
            return film_model_1.FilmType.film;
        }
    };
    FilmParser.prototype.getDescription = function () {
        return this.$(".film-synopsys").first().text().trim();
    };
    FilmParser.prototype.getYear = function () {
        var link = this.$("a[href*='year']").first().text().trim();
        var year = parseInt(link);
        return year;
    };
    FilmParser.prototype.getCountry = function () {
        var _this = this;
        var list = [];
        list = this.$("td:contains('страна')").first().next()
            .find("a[href*='country']").map(function (i, el) {
            return _this.$(el).text().trim();
        }).get();
        return list;
    };
    FilmParser.prototype.getSlogan = function () {
        var slogan = this.$("td:contains('слоган')").first().next()
            .text().trim();
        return slogan;
    };
    FilmParser.prototype.getPeoples = function (td) {
        var _this = this;
        var list = [];
        var links = this.$("td:contains('" + td + "')").first().next()
            .find("a[href*='name']").map(function (i, el) {
            return _this.$(el).attr("href");
        }).get();
        list = links.map(function (s) { return parseInt(s.replace(/^\D+/g, '')); });
        return list;
    };
    FilmParser.prototype.getGenre = function () {
        var _this = this;
        var list;
        list = this.$("*[itemprop='genre']").children().map(function (i, el) {
            return _this.$(el).text().trim();
        }).get();
        return list;
    };
    FilmParser.prototype.getTime = function () {
        return this.$(".time").first().contents().first().text().trim();
    };
    FilmParser.prototype.getKP = function () {
        var str = this.$(".rating_ball").first().text().trim();
        return parseFloat(str || "5");
    };
    FilmParser.prototype.getActors = function () {
        var _this = this;
        var list;
        list = this.$("*:contains('В главных ролях:')").next().find("li[itemprop='actors']").map(function (i, el) {
            return _this.$(el).children().first().attr("href");
        }).get();
        var listIds = list.filter(function (s) { return s.includes("name"); }).map(function (s) {
            var strNum = s.replace(/^\D+/g, '');
            return parseInt(strNum);
        });
        return listIds;
    };
    FilmParser.prototype.getFeatures = function () {
        var _this = this;
        return this.$("span.trivia_text").map(function (i, el) {
            return _this.$(el).text();
        }).get();
    };
    FilmParser.prototype.getPoster = function () {
        var url = this.$("img[itemprop = 'image']").first()
            .attr("src");
        return url.includes("poster_none") ? null : url;
    };
    return FilmParser;
}());
exports.FilmParser = FilmParser;
//# sourceMappingURL=FilmParser.js.map