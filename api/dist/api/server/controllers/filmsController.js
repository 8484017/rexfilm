"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Db_1 = require("../classes/Db");
var film_model_1 = require("../../../models/film.model");
var films_model_1 = require("../../../models/films.model");
var name_model_1 = require("../../../models/name.model");
var pageCount = 10;
var router = express.Router();
router.post("/api/films", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var filter, cond, queryDb, films, count, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filter = r.body;
                cond = {
                    type: filter.type,
                    isPublic: true
                };
                if (filter.genre.length > 0) {
                    cond.genre = { $all: filter.genre };
                }
                queryDb = Db_1.db.getCollection(film_model_1.Film)
                    .find(cond)
                    .sort(filter.sortBy, -1)
                    .limit(pageCount)
                    .skip((filter.page - 1) * pageCount)
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 });
                return [4 /*yield*/, queryDb.toArray()];
            case 1:
                films = _a.sent();
                return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).countDocuments(cond, {})];
            case 2:
                count = _a.sent();
                result = new films_model_1.Films();
                result.films = films;
                result.pagination = new films_model_1.Pagination();
                result.pagination.currentPage = filter.page;
                result.pagination.itemsPerPage = pageCount;
                result.pagination.totalItems = count;
                s.json(result);
                return [2 /*return*/];
        }
    });
}); });
router.get("/api/film/:id", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var id, result, actors, compositors, hudognik, montag, operators, produsers, regisers, scenarists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(r.params.id);
                return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).findOne({ _id: id })];
            case 1:
                result = _a.sent();
                actors = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.actors } }).toArray();
                compositors = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.compositors } }).toArray();
                hudognik = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.hudognik } }).toArray();
                montag = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.montag } }).toArray();
                operators = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.operators } }).toArray();
                produsers = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.produsers } }).toArray();
                regisers = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.regisers } }).toArray();
                scenarists = Db_1.db.getCollection(name_model_1.Name).find({ _id: { $in: result.scenarists } }).toArray();
                return [4 /*yield*/, Promise.all([actors, compositors, hudognik, montag, operators, produsers, regisers, scenarists])
                        .then(function (_a) {
                        var actors = _a[0], compositors = _a[1], hudognik = _a[2], montag = _a[3], operators = _a[4], produsers = _a[5], regisers = _a[6], scenarists = _a[7];
                        result.actors = actors;
                        result.compositors = compositors;
                        result.hudognik = hudognik;
                        result.montag = montag;
                        result.operators = operators;
                        result.produsers = produsers;
                        result.regisers = regisers;
                        result.scenarists = scenarists;
                    })];
            case 2:
                _a.sent();
                Db_1.db.getCollection(film_model_1.Film).updateOne({ _id: r.params.id }, { $inc: { count: 1 } });
                s.json(result);
                return [2 /*return*/];
        }
    });
}); });
router.get("/api/films/index", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var indexFilms, newFilms, newSerials, popularFilms, popularSerials, rand;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                indexFilms = new films_model_1.IndexFilms();
                newFilms = Db_1.db.getCollection(film_model_1.Film)
                    .find({ type: film_model_1.FilmType.film, isPublic: true })
                    .sort({ timespan: -1 })
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .limit(12).toArray();
                newSerials = Db_1.db.getCollection(film_model_1.Film)
                    .find({ type: film_model_1.FilmType.serial, isPublic: true })
                    .sort({ timespan: -1 })
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .limit(12).toArray();
                popularFilms = Db_1.db.getCollection(film_model_1.Film)
                    .find({ type: film_model_1.FilmType.film, isPublic: true })
                    .sort({ count: -1 })
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .limit(12).toArray();
                popularSerials = Db_1.db.getCollection(film_model_1.Film)
                    .find({ type: film_model_1.FilmType.serial, isPublic: true })
                    .sort({ count: -1 })
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .limit(12).toArray();
                rand = Db_1.db.getCollection(film_model_1.Film)
                    .aggregate([{ $match: { isPublic: true } }, { $sample: { size: 12 } }])
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .limit(12).toArray();
                return [4 /*yield*/, Promise.all([newFilms, newSerials, popularFilms, popularSerials, rand]).then(function (_a) {
                        var newFilms = _a[0], newSerials = _a[1], popularFilms = _a[2], popularSerials = _a[3], rand = _a[4];
                        indexFilms.newFilms = newFilms;
                        indexFilms.newSerials = newSerials;
                        indexFilms.popularFilms = popularFilms;
                        indexFilms.popularSerials = popularFilms;
                        indexFilms.randomFilms = rand;
                    })];
            case 1:
                _a.sent();
                s.json(indexFilms);
                return [2 /*return*/];
        }
    });
}); });
router.get("/api/films/rand", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var rand;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).aggregate([{ $match: { isPublic: true } }, { $sample: { size: 12 } }])
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                    .toArray()];
            case 1:
                rand = _a.sent();
                s.json(rand);
                return [2 /*return*/];
        }
    });
}); });
router.get("/api/films/byname/:id", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var nameFilms, id, cond, actors, regisers, scenarists, produsers, operators, compositors, hudognik, montag, name, films;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nameFilms = new name_model_1.NameFilms();
                id = parseInt(r.params.id);
                cond = {};
                actors = { $in: [id] };
                regisers = { $in: [id] };
                scenarists = { $in: [id] };
                produsers = { $in: [id] };
                operators = { $in: [id] };
                compositors = { $in: [id] };
                hudognik = { $in: [id] };
                montag = { $in: [id] };
                cond = { isPublic: true, $or: [{ actors: actors }, { regisers: regisers }, { scenarists: scenarists }, { produsers: produsers }, { operators: operators }, { compositors: compositors }, { hudognik: hudognik }, { montag: montag }] };
                name = Db_1.db.getCollection(name_model_1.Name).findOne({ _id: id });
                films = Db_1.db.getCollection(film_model_1.Film).find(cond).sort({ year: -1 })
                    .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 }).toArray();
                return [4 /*yield*/, Promise.all([name, films]).then(function (_a) {
                        var name = _a[0], films = _a[1];
                        nameFilms.name = name;
                        nameFilms.films = films;
                    })];
            case 1:
                _a.sent();
                s.json(nameFilms);
                return [2 /*return*/];
        }
    });
}); });
router.post("/api/films/my", function (r, s) { return __awaiter(_this, void 0, void 0, function () {
    var obj, films;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                obj = r.body;
                return [4 /*yield*/, Db_1.db.getCollection(film_model_1.Film).find({ _id: { $in: obj } })
                        .project({ _id: 1, name: 1, description: 1, poster_thumb: 1, time: 1, kp: 1, genre: 1, counrty: 1, year: 1 })
                        .toArray()];
            case 1:
                films = _a.sent();
                s.json(films);
                return [2 /*return*/];
        }
    });
}); });
exports.FilmsRouter = router;
